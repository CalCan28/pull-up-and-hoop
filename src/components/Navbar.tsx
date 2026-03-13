"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-surface-light">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Pull Up & Hoop"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="font-display text-2xl tracking-wide text-primary">
            PULL UP & HOOP
          </span>
        </Link>

        <div className="flex items-center gap-6 font-body text-sm font-medium tracking-wide uppercase">
          <Link
            href="/map"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            Find Courts
          </Link>
          <Link
            href="/admin"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            Add Court
          </Link>
          {user ? (
            <button
              onClick={handleSignOut}
              className="bg-primary text-background px-4 py-2 rounded-md font-semibold hover:bg-primary/90 transition-colors"
            >
              Sign Out
            </button>
          ) : (
            <Link
              href="/login"
              className="bg-primary text-background px-4 py-2 rounded-md font-semibold hover:bg-primary/90 transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
