"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase";
import type { Court, CheckIn, Rating } from "@/lib/types";
import type { User } from "@supabase/supabase-js";
import StarRating from "@/components/StarRating";
import Link from "next/link";

export default function CourtDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [court, setCourt] = useState<Court | null>(null);
  const [checkIns, setCheckIns] = useState<CheckIn[]>([]);
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [checkInLoading, setCheckInLoading] = useState(false);

  // Rating form
  const [showRatingForm, setShowRatingForm] = useState(false);
  const [hoopQuality, setHoopQuality] = useState(3);
  const [courtCondition, setCourtCondition] = useState(3);
  const [competition, setCompetition] = useState(3);
  const [comment, setComment] = useState("");
  const [ratingLoading, setRatingLoading] = useState(false);

  const supabase = createClient();

  const fetchData = useCallback(async () => {
    const [courtRes, checkInsRes, ratingsRes] = await Promise.all([
      supabase.from("courts").select("*").eq("id", params.id).single(),
      supabase
        .from("check_ins")
        .select("*")
        .eq("court_id", params.id)
        .eq("is_active", true)
        .gt("expires_at", new Date().toISOString()),
      supabase
        .from("ratings")
        .select("*")
        .eq("court_id", params.id)
        .order("created_at", { ascending: false })
        .limit(10),
    ]);

    if (courtRes.data) setCourt(courtRes.data);
    if (checkInsRes.data) setCheckIns(checkInsRes.data);
    if (ratingsRes.data) setRatings(ratingsRes.data);
    setLoading(false);
  }, [params.id]);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (user && checkIns.length > 0) {
      setIsCheckedIn(checkIns.some((ci) => ci.user_id === user.id));
    }
  }, [user, checkIns]);

  const handleCheckIn = async () => {
    if (!user) {
      window.location.href = "/login";
      return;
    }
    setCheckInLoading(true);

    if (isCheckedIn) {
      await supabase
        .from("check_ins")
        .update({ is_active: false })
        .eq("court_id", params.id)
        .eq("user_id", user.id)
        .eq("is_active", true);
    } else {
      await supabase.from("check_ins").insert({
        user_id: user.id,
        court_id: params.id,
      });
    }

    await fetchData();
    setCheckInLoading(false);
  };

  const handleRating = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setRatingLoading(true);

    await supabase.from("ratings").insert({
      user_id: user.id,
      court_id: params.id,
      hoop_quality: hoopQuality,
      court_condition: courtCondition,
      competition,
      comment: comment || null,
    });

    setShowRatingForm(false);
    setComment("");
    await fetchData();
    setRatingLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="animate-pulse text-primary font-display text-3xl">
          LOADING...
        </div>
      </div>
    );
  }

  if (!court) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-16 gap-4">
        <h1 className="font-display text-4xl text-primary">COURT NOT FOUND</h1>
        <Link href="/map" className="text-accent hover:underline">
          Back to Map
        </Link>
      </div>
    );
  }

  const avgHoop =
    ratings.length > 0
      ? ratings.reduce((s, r) => s + r.hoop_quality, 0) / ratings.length
      : 0;
  const avgCondition =
    ratings.length > 0
      ? ratings.reduce((s, r) => s + r.court_condition, 0) / ratings.length
      : 0;
  const avgCompetition =
    ratings.length > 0
      ? ratings.reduce((s, r) => s + r.competition, 0) / ratings.length
      : 0;
  const overallAvg = ratings.length > 0 ? (avgHoop + avgCondition + avgCompetition) / 3 : 0;

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/map"
          className="text-muted hover:text-primary transition-colors text-sm mb-4 inline-block"
        >
          &larr; Back to Map
        </Link>

        {/* Header */}
        <div className="bg-surface rounded-xl p-6 border border-surface-light mb-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="font-display text-5xl text-primary">
                {court.name}
              </h1>
              <p className="text-muted mt-1">{court.address}</p>
              <div className="flex flex-wrap gap-3 mt-3">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {court.game_type}
                </span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                  {court.skill_level}
                </span>
                <span className="bg-surface-light text-muted px-3 py-1 rounded-full text-sm">
                  {court.surface_type}
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-display text-accent">
                {checkIns.length}
              </div>
              <div className="text-muted text-xs uppercase tracking-wider">
                Active Players
              </div>
            </div>
          </div>

          {/* Overall rating */}
          {ratings.length > 0 && (
            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={Math.round(overallAvg)} readonly size="md" />
              <span className="text-muted text-sm">
                {overallAvg.toFixed(1)} ({ratings.length} ratings)
              </span>
            </div>
          )}
        </div>

        {/* Check In Button */}
        <button
          onClick={handleCheckIn}
          disabled={checkInLoading}
          className={`w-full py-4 rounded-xl font-display text-2xl tracking-wider transition-all mb-6 ${
            isCheckedIn
              ? "bg-accent text-background hover:bg-accent/90"
              : "bg-primary text-background hover:bg-primary/90"
          } disabled:opacity-50`}
        >
          {checkInLoading
            ? "..."
            : isCheckedIn
              ? "I'M LEAVING"
              : "I'M HERE"}
        </button>

        {/* Rating Breakdown */}
        {ratings.length > 0 && (
          <div className="bg-surface rounded-xl p-6 border border-surface-light mb-6">
            <h2 className="font-display text-2xl text-foreground mb-4">
              RATINGS BREAKDOWN
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-muted text-xs uppercase mb-1">
                  Hoop Quality
                </div>
                <StarRating
                  rating={Math.round(avgHoop)}
                  readonly
                  size="sm"
                />
                <div className="text-foreground font-semibold mt-1">
                  {avgHoop.toFixed(1)}
                </div>
              </div>
              <div className="text-center">
                <div className="text-muted text-xs uppercase mb-1">
                  Court Condition
                </div>
                <StarRating
                  rating={Math.round(avgCondition)}
                  readonly
                  size="sm"
                />
                <div className="text-foreground font-semibold mt-1">
                  {avgCondition.toFixed(1)}
                </div>
              </div>
              <div className="text-center">
                <div className="text-muted text-xs uppercase mb-1">
                  Competition
                </div>
                <StarRating
                  rating={Math.round(avgCompetition)}
                  readonly
                  size="sm"
                />
                <div className="text-foreground font-semibold mt-1">
                  {avgCompetition.toFixed(1)}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rate This Court */}
        <div className="bg-surface rounded-xl p-6 border border-surface-light mb-6">
          {!showRatingForm ? (
            <button
              onClick={() => {
                if (!user) {
                  window.location.href = "/login";
                  return;
                }
                setShowRatingForm(true);
              }}
              className="w-full py-3 border-2 border-dashed border-primary/40 rounded-lg text-primary font-display text-xl hover:border-primary transition-colors"
            >
              RATE THIS COURT
            </button>
          ) : (
            <form onSubmit={handleRating}>
              <h2 className="font-display text-2xl text-foreground mb-4">
                RATE THIS COURT
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-muted text-sm block mb-1">
                    Hoop Quality
                  </label>
                  <StarRating
                    rating={hoopQuality}
                    onChange={setHoopQuality}
                    size="lg"
                  />
                </div>
                <div>
                  <label className="text-muted text-sm block mb-1">
                    Court Condition
                  </label>
                  <StarRating
                    rating={courtCondition}
                    onChange={setCourtCondition}
                    size="lg"
                  />
                </div>
                <div>
                  <label className="text-muted text-sm block mb-1">
                    Competition Level
                  </label>
                  <StarRating
                    rating={competition}
                    onChange={setCompetition}
                    size="lg"
                  />
                </div>
                <div>
                  <label className="text-muted text-sm block mb-1">
                    Comment (optional)
                  </label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={3}
                    className="w-full bg-background border border-surface-light rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Great runs on weekday evenings..."
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={ratingLoading}
                    className="flex-1 bg-primary text-background font-display text-lg py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    {ratingLoading ? "SUBMITTING..." : "SUBMIT RATING"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowRatingForm(false)}
                    className="px-6 bg-surface-light text-muted rounded-lg hover:text-foreground transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Recent Ratings */}
        {ratings.length > 0 && (
          <div className="bg-surface rounded-xl p-6 border border-surface-light">
            <h2 className="font-display text-2xl text-foreground mb-4">
              RECENT REVIEWS
            </h2>
            <div className="space-y-4">
              {ratings.map((rating) => {
                const avg =
                  (rating.hoop_quality +
                    rating.court_condition +
                    rating.competition) /
                  3;
                return (
                  <div
                    key={rating.id}
                    className="border-b border-surface-light pb-4 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <StarRating
                        rating={Math.round(avg)}
                        readonly
                        size="sm"
                      />
                      <span className="text-muted text-xs">
                        {new Date(rating.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    {rating.comment && (
                      <p className="text-foreground/80 text-sm mt-2">
                        {rating.comment}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
