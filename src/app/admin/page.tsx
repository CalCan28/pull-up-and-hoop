"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";

export default function AdminPage() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [surfaceType, setSurfaceType] = useState("asphalt");
  const [gameType, setGameType] = useState("5v5");
  const [skillLevel, setSkillLevel] = useState("all");
  const [status, setStatus] = useState<{
    type: "success" | "error";
    msg: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const { error } = await supabase.from("courts").insert({
      name,
      address,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      surface_type: surfaceType,
      game_type: gameType,
      skill_level: skillLevel,
    });

    if (error) {
      setStatus({ type: "error", msg: error.message });
    } else {
      setStatus({ type: "success", msg: `"${name}" added successfully!` });
      setName("");
      setAddress("");
      setLat("");
      setLng("");
    }
    setLoading(false);
  };

  const selectClass =
    "w-full bg-background border border-surface-light rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none";
  const inputClass =
    "w-full bg-background border border-surface-light rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="font-display text-5xl text-primary mb-2">ADD A COURT</h1>
        <p className="text-muted mb-8">
          Know a spot? Add it to the map so others can pull up.
        </p>

        {status && (
          <div
            className={`px-4 py-3 rounded-lg mb-6 text-sm ${
              status.type === "success"
                ? "bg-accent/10 border border-accent/30 text-accent"
                : "bg-red-500/10 border border-red-500/30 text-red-400"
            }`}
          >
            {status.msg}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-surface rounded-xl p-6 border border-surface-light space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-muted mb-1">
              Court Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={inputClass}
              placeholder="Piedmont Park Courts"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted mb-1">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className={inputClass}
              placeholder="400 Park Dr NE, Atlanta, GA 30306"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-muted mb-1">
                Latitude
              </label>
              <input
                type="number"
                step="any"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                required
                className={inputClass}
                placeholder="33.7878"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted mb-1">
                Longitude
              </label>
              <input
                type="number"
                step="any"
                value={lng}
                onChange={(e) => setLng(e.target.value)}
                required
                className={inputClass}
                placeholder="-84.3742"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-muted mb-1">
              Surface Type
            </label>
            <select
              value={surfaceType}
              onChange={(e) => setSurfaceType(e.target.value)}
              className={selectClass}
            >
              <option value="asphalt">Asphalt</option>
              <option value="concrete">Concrete</option>
              <option value="hardwood">Hardwood</option>
              <option value="sport-court">Sport Court</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-muted mb-1">
                Game Type
              </label>
              <select
                value={gameType}
                onChange={(e) => setGameType(e.target.value)}
                className={selectClass}
              >
                <option value="5v5">5v5</option>
                <option value="3v3">3v3</option>
                <option value="21">21</option>
                <option value="mixed">Mixed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted mb-1">
                Skill Level
              </label>
              <select
                value={skillLevel}
                onChange={(e) => setSkillLevel(e.target.value)}
                className={selectClass}
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-background font-display text-xl tracking-wider py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {loading ? "ADDING..." : "ADD COURT"}
          </button>
        </form>
      </div>
    </div>
  );
}
