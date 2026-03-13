import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Pull Up & Hoop",
  description:
    "Privacy Policy for Pull Up & Hoop, the pickup basketball app.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 pt-28 pb-20">
        <h1 className="font-display text-5xl sm:text-6xl text-primary mb-2 tracking-wider">
          PRIVACY POLICY
        </h1>
        <p className="font-body text-muted text-sm mb-12">
          Last Updated: March 2026
        </p>

        <div className="space-y-10 font-body text-foreground/90 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              1. INTRODUCTION
            </h2>
            <p>
              Run Horse Run LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates Pull Up &amp; Hoop
              (the &quot;App&quot;). This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our mobile
              application and website at pullupandhoop.com. Please read this
              policy carefully. By using the App, you agree to the collection
              and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              2. INFORMATION WE COLLECT
            </h2>
            <p className="mb-3">
              We collect the following types of information to provide and
              improve our services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>
                <span className="text-primary font-semibold">Location Data:</span>{" "}
                We collect your device&apos;s location to help you find nearby
                basketball courts, check in at courts, and show other users
                who is currently at a court.
              </li>
              <li>
                <span className="text-primary font-semibold">Profile Information:</span>{" "}
                When you create an account, we collect your name, username,
                email address, and optional profile photo.
              </li>
              <li>
                <span className="text-primary font-semibold">Game &amp; Performance Stats:</span>{" "}
                We collect game statistics you submit (points, assists,
                rebounds, wins, losses) and verification data from other
                players.
              </li>
              <li>
                <span className="text-primary font-semibold">Email Address:</span>{" "}
                Used for account creation, authentication, notifications,
                and communication about your account.
              </li>
              <li>
                <span className="text-primary font-semibold">Device Information:</span>{" "}
                We may collect device type, operating system, and unique
                device identifiers for analytics and troubleshooting.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              3. HOW WE USE YOUR INFORMATION
            </h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>
                Providing core app functionality: finding courts, joining
                game queues, hosting games, and checking in.
              </li>
              <li>
                Displaying leaderboards and player rankings based on
                verified game stats.
              </li>
              <li>
                Enabling player-to-player stat verification to ensure
                accuracy.
              </li>
              <li>
                Sending notifications about game activity, queue updates,
                and stat verifications.
              </li>
              <li>
                Improving and optimizing the App through usage analytics.
              </li>
              <li>
                Communicating with you about your account, updates, and
                support requests.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              4. THIRD-PARTY SERVICES
            </h2>
            <p className="mb-3">
              We use the following third-party services to operate the App:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>
                <span className="text-primary font-semibold">Supabase:</span>{" "}
                Used for authentication, database storage, and real-time
                data. Your account information and game data are stored on
                Supabase servers. See{" "}
                <a
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80"
                >
                  Supabase&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <span className="text-primary font-semibold">
                  Google Maps / Google Places API:
                </span>{" "}
                Used to display court locations on maps and provide location
                search functionality. Your location data is shared with
                Google when using map features. See{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80"
                >
                  Google&apos;s Privacy Policy
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              5. DATA RETENTION &amp; DELETION
            </h2>
            <p>
              We retain your personal information for as long as your account
              is active or as needed to provide you with our services. If you
              wish to delete your account and all associated data, you may do
              so by contacting us at{" "}
              <a
                href="mailto:team@pullupandhoop.com"
                className="text-primary underline hover:text-primary/80"
              >
                team@pullupandhoop.com
              </a>
              . Upon receiving a deletion request, we will remove your
              personal data from our systems within 30 days, except where we
              are required to retain it by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              6. DATA SECURITY
            </h2>
            <p>
              We use commercially reasonable administrative, technical, and
              physical security measures to protect your personal information.
              However, no method of transmission over the Internet or method
              of electronic storage is 100% secure. While we strive to
              protect your data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              7. CHILDREN&apos;S PRIVACY
            </h2>
            <p>
              Pull Up &amp; Hoop is not intended for children under the age of
              13. We do not knowingly collect personal information from
              children under 13. If we learn that we have collected personal
              information from a child under age 13, we will take steps to
              delete that information as quickly as possible. If you believe
              that a child under 13 has provided us with personal
              information, please contact us at{" "}
              <a
                href="mailto:team@pullupandhoop.com"
                className="text-primary underline hover:text-primary/80"
              >
                team@pullupandhoop.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              8. CHANGES TO THIS POLICY
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the &quot;Last Updated&quot; date. You are advised
              to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              9. CONTACT US
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <div className="mt-3 bg-surface border border-surface-light rounded-xl p-6">
              <p className="text-primary font-semibold">Run Horse Run LLC</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:team@pullupandhoop.com"
                  className="text-primary underline hover:text-primary/80"
                >
                  team@pullupandhoop.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://pullupandhoop.com"
                  className="text-primary underline hover:text-primary/80"
                >
                  pullupandhoop.com
                </a>
              </p>
            </div>
          </section>

          <div className="pt-6 border-t border-surface-light">
            <div className="flex gap-6 font-body text-sm text-muted">
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/guidelines"
                className="hover:text-primary transition-colors"
              >
                Community Guidelines
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
