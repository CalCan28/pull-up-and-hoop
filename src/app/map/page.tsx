"use client";

import { useEffect, useState, useCallback } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { createClient } from "@/lib/supabase";
import type { Court } from "@/lib/types";
import Link from "next/link";

const mapContainerStyle = { width: "100%", height: "100%" };
const defaultCenter = { lat: 33.749, lng: -84.388 }; // Atlanta default

const darkMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#212121" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#2c2c2c" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212121" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#3c3c3c" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#000000" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#3d3d3d" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#1a3d1a" }],
  },
];

export default function MapPage() {
  const [courts, setCourts] = useState<Court[]>([]);
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(null);
  const [center, setCenter] = useState(defaultCenter);
  const [activeCounts, setActiveCounts] = useState<Record<string, number>>({});
  const supabase = createClient();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      (pos) =>
        setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => {} // Use default center on error
    );
  }, []);

  const fetchCourts = useCallback(async () => {
    const { data } = await supabase.from("courts").select("*");
    if (data) setCourts(data);

    // Get active check-in counts
    const { data: checkIns } = await supabase
      .from("check_ins")
      .select("court_id")
      .eq("is_active", true)
      .gt("expires_at", new Date().toISOString());

    if (checkIns) {
      const counts: Record<string, number> = {};
      checkIns.forEach((ci) => {
        counts[ci.court_id] = (counts[ci.court_id] || 0) + 1;
      });
      setActiveCounts(counts);
    }
  }, []);

  useEffect(() => {
    fetchCourts();
  }, [fetchCourts]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="animate-pulse text-primary font-display text-3xl">
          LOADING MAP...
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen pt-16 flex">
      {/* Sidebar */}
      <div className="w-80 bg-surface border-r border-surface-light overflow-y-auto hidden md:block">
        <div className="p-4">
          <h2 className="font-display text-2xl text-primary mb-4">
            NEARBY COURTS
          </h2>
          {courts.length === 0 && (
            <p className="text-muted text-sm">No courts found. Add some from the Admin page.</p>
          )}
          {courts.map((court) => (
            <Link
              key={court.id}
              href={`/court/${court.id}`}
              className="block bg-background rounded-lg p-4 mb-3 border border-surface-light hover:border-primary/50 transition-colors"
            >
              <h3 className="font-display text-lg text-foreground">
                {court.name}
              </h3>
              <p className="text-muted text-xs mt-1">{court.address}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-accent text-xs font-semibold">
                  {activeCounts[court.id] || 0} playing
                </span>
                <span className="text-muted text-xs">
                  {court.game_type} &middot; {court.surface_type}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 relative">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={13}
          options={{
            styles: darkMapStyle,
            disableDefaultUI: true,
            zoomControl: true,
          }}
        >
          {courts.map((court) => (
            <MarkerF
              key={court.id}
              position={{ lat: court.lat, lng: court.lng }}
              onClick={() => setSelectedCourt(court)}
              icon={{
                url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                  `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="18" fill="#F4762A" stroke="#0D0D0D" stroke-width="2"/>
                    <text x="20" y="27" text-anchor="middle" font-size="20">&#127936;</text>
                  </svg>`
                )}`,
                scaledSize: isLoaded
                  ? new google.maps.Size(40, 40)
                  : undefined,
              }}
            />
          ))}

          {selectedCourt && (
            <InfoWindowF
              position={{ lat: selectedCourt.lat, lng: selectedCourt.lng }}
              onCloseClick={() => setSelectedCourt(null)}
            >
              <div className="bg-surface text-foreground p-3 rounded-lg min-w-[200px]">
                <h3 className="font-bold text-lg" style={{ color: "#F4762A" }}>
                  {selectedCourt.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {selectedCourt.address}
                </p>
                <p className="text-sm mt-1" style={{ color: "#C8F135" }}>
                  {activeCounts[selectedCourt.id] || 0} players active
                </p>
                <Link
                  href={`/court/${selectedCourt.id}`}
                  className="inline-block mt-2 text-sm font-semibold px-3 py-1 rounded"
                  style={{ backgroundColor: "#F4762A", color: "#0D0D0D" }}
                >
                  View Court
                </Link>
              </div>
            </InfoWindowF>
          )}
        </GoogleMap>
      </div>
    </div>
  );
}
