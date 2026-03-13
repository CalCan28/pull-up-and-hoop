import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community Guidelines - Pull Up & Hoop",
  description:
    "Community Guidelines for Pull Up & Hoop. Play fair, show respect, and keep it competitive.",
};

export default function CommunityGuidelines() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 pt-28 pb-20">
        <h1 className="font-display text-5xl sm:text-6xl text-primary mb-2 tracking-wider">
          COMMUNITY GUIDELINES
        </h1>
        <p className="font-body text-muted text-sm mb-4">
          Last Updated: March 2026
        </p>
        <p className="font-body text-foreground/80 mb-12">
          Pull Up &amp; Hoop is built for hoopers who love the game. These
          guidelines exist to keep the community competitive, respectful,
          and fun for everyone. By using the App, you agree to follow these
          rules.
        </p>

        <div className="space-y-10 font-body text-foreground/90 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              1. SPORTSMANSHIP &amp; RESPECT
            </h2>
            <p>
              Basketball is competitive, and we love that. But competition
              doesn&apos;t mean disrespect. Whether you&apos;re on the court or in
              the app, treat every player the way you&apos;d want to be treated.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-foreground/80">
              <li>Be a good sport. Win with class, lose with dignity.</li>
              <li>
                Give credit where it&apos;s due. Verify other players&apos; stats
                honestly.
              </li>
              <li>
                Respect the queue. Don&apos;t cut the line or game the system.
              </li>
              <li>
                Keep trash talk playful, not personal. There&apos;s a line
                between competitive banter and abuse.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              2. NO HARASSMENT, HATE SPEECH, OR DISCRIMINATION
            </h2>
            <p>
              Pull Up &amp; Hoop has a zero-tolerance policy for harassment,
              hate speech, and discrimination. The following are strictly
              prohibited:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-foreground/80">
              <li>
                Attacks, slurs, or derogatory language targeting race,
                ethnicity, religion, gender, sexual orientation, disability,
                or any other protected characteristic.
              </li>
              <li>
                Bullying, intimidation, or targeted harassment of any user,
                whether on the court or through the App.
              </li>
              <li>
                Threats of violence, doxxing, or sharing another user&apos;s
                personal information without consent.
              </li>
              <li>
                Sexually explicit, graphic, or otherwise inappropriate
                content in profiles, messages, or any user-generated
                content.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              3. HONEST STAT REPORTING
            </h2>
            <p>
              Pull Up &amp; Hoop&apos;s stat system is built on trust between
              players. Keep it honest.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-foreground/80">
              <li>
                <span className="text-primary font-semibold">No fake stats.</span>{" "}
                Do not submit inflated, fabricated, or misleading game
                statistics.
              </li>
              <li>
                <span className="text-primary font-semibold">
                  Verify honestly.
                </span>{" "}
                When asked to verify another player&apos;s stats, confirm or
                deny them truthfully. Don&apos;t verify stats for games you
                didn&apos;t play in.
              </li>
              <li>
                <span className="text-primary font-semibold">
                  No stat manipulation.
                </span>{" "}
                Don&apos;t create multiple accounts, collude with others, or use
                any method to artificially boost your stats or leaderboard
                ranking.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              4. NO IMPERSONATION
            </h2>
            <p>
              Be yourself. Do not create profiles or use usernames that
              impersonate other players, public figures, or any other person.
              Parody or fan accounts must be clearly labeled as such. Accounts
              that mislead other users about your identity will be removed.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              5. REPORTING &amp; BLOCKING
            </h2>
            <p className="mb-3">
              If you encounter behavior that violates these guidelines, we
              make it easy to take action:
            </p>
            <div className="bg-surface border border-surface-light rounded-xl p-6 space-y-4">
              <div>
                <h3 className="font-display text-xl text-primary mb-1">
                  REPORT A USER
                </h3>
                <p className="text-foreground/80">
                  Tap the report button on any user&apos;s profile or content to
                  flag it for review. Include details about the violation.
                  Our team reviews all reports within 24 hours.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-primary mb-1">
                  BLOCK A USER
                </h3>
                <p className="text-foreground/80">
                  You can block any user at any time from their profile.
                  Blocked users cannot see your profile, contact you, or
                  interact with you in the App. Blocking is immediate and
                  can be reversed at any time.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-primary mb-1">
                  EMAIL US
                </h3>
                <p className="text-foreground/80">
                  For urgent issues or if you need additional help, email us
                  directly at{" "}
                  <a
                    href="mailto:team@pullupandhoop.com"
                    className="text-primary underline hover:text-primary/80"
                  >
                    team@pullupandhoop.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              6. CONSEQUENCES FOR VIOLATIONS
            </h2>
            <p className="mb-3">
              Violating these guidelines will result in action against your
              account. Depending on the severity, consequences include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>
                <span className="text-primary font-semibold">Warning:</span>{" "}
                For minor or first-time offenses, you may receive a warning
                with an explanation of the violation.
              </li>
              <li>
                <span className="text-primary font-semibold">
                  Content Removal:
                </span>{" "}
                Objectionable content will be removed immediately upon
                detection or report.
              </li>
              <li>
                <span className="text-primary font-semibold">
                  Temporary Suspension:
                </span>{" "}
                Repeated or moderate violations may result in a temporary
                account suspension.
              </li>
              <li>
                <span className="text-primary font-semibold">
                  Permanent Ban:
                </span>{" "}
                Severe violations, including hate speech, threats, and
                repeated abuse, will result in permanent account
                termination. This is enforced under our zero-tolerance
                policy.
              </li>
              <li>
                <span className="text-primary font-semibold">
                  Stat Reset:
                </span>{" "}
                Users found manipulating or falsifying stats may have their
                game history and leaderboard rankings reset.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              7. CONTACT US
            </h2>
            <p>
              Have questions about these guidelines? Want to report an issue?
              Reach out to us:
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
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
