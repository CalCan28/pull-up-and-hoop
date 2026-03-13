import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Pull Up & Hoop",
  description:
    "Terms of Service and End-User License Agreement for Pull Up & Hoop.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 pt-28 pb-20">
        <h1 className="font-display text-5xl sm:text-6xl text-primary mb-2 tracking-wider">
          TERMS OF SERVICE
        </h1>
        <p className="font-body text-muted text-sm mb-12">
          Last Updated: March 2026
        </p>

        <div className="space-y-10 font-body text-foreground/90 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              1. END-USER LICENSE AGREEMENT (EULA)
            </h2>
            <p>
              This Terms of Service agreement constitutes an End-User License
              Agreement (&quot;EULA&quot;) between you (&quot;User&quot;) and Run Horse Run LLC
              (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) for the use of Pull Up &amp;
              Hoop (the &quot;App&quot;), including all related services, features, and
              content. By downloading, installing, or using the App, you agree
              to be bound by the terms of this EULA. If you do not agree to
              these terms, do not use the App.
            </p>
            <p className="mt-3">
              We grant you a limited, non-exclusive, non-transferable,
              revocable license to use the App for your personal,
              non-commercial use, subject to the terms of this agreement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              2. AGE REQUIREMENT
            </h2>
            <p>
              You must be at least 13 years of age to use Pull Up &amp; Hoop.
              By using the App, you represent and warrant that you are at
              least 13 years old. If you are under 18, you represent that you
              have your parent or guardian&apos;s consent to use the App.
            </p>
          </section>

          <section className="bg-surface border-2 border-primary/60 rounded-xl p-6">
            <h2 className="font-display text-2xl text-primary mb-3 tracking-wide">
              3. ZERO-TOLERANCE POLICY FOR OBJECTIONABLE CONTENT &amp; ABUSIVE
              USERS
            </h2>
            <p className="font-semibold text-foreground mb-3">
              Pull Up &amp; Hoop maintains a zero-tolerance policy for
              objectionable content and abusive users.
            </p>
            <p>
              Any user who posts objectionable content or engages in abusive
              behavior will have their content removed and their account
              terminated immediately, without warning. This includes but is
              not limited to: hate speech, threats, harassment, bullying,
              sexually explicit content, violent content, spam, impersonation,
              and any content that promotes illegal activity.
            </p>
            <p className="mt-3">
              We are committed to providing a safe, respectful environment
              for all basketball players. Violations of this policy will
              result in permanent account suspension and potential reporting
              to law enforcement where applicable.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              4. USER-GENERATED CONTENT (UGC)
            </h2>
            <p className="mb-3">
              Pull Up &amp; Hoop allows users to create profiles, submit game
              statistics, post comments, and interact with other users. You
              are solely responsible for the content you submit. By posting
              content, you agree that your content does not and will not
              include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>
                <span className="text-primary font-semibold">Hate Speech:</span>{" "}
                Content that attacks, demeans, or incites hatred against
                individuals or groups based on race, ethnicity, religion,
                gender, sexual orientation, disability, or any other
                protected characteristic.
              </li>
              <li>
                <span className="text-primary font-semibold">Harassment &amp; Bullying:</span>{" "}
                Repeated, targeted behavior intended to intimidate, silence,
                or harm another user on or off the court.
              </li>
              <li>
                <span className="text-primary font-semibold">Threats &amp; Violence:</span>{" "}
                Any content that threatens, promotes, or glorifies violence
                against any individual or group.
              </li>
              <li>
                <span className="text-primary font-semibold">
                  Inappropriate &amp; Explicit Content:
                </span>{" "}
                Sexually explicit material, graphic violence, or any content
                not suitable for a general audience.
              </li>
              <li>
                <span className="text-primary font-semibold">Spam &amp; Misinformation:</span>{" "}
                Fraudulent, misleading, or repetitive content intended to
                deceive or disrupt.
              </li>
              <li>
                <span className="text-primary font-semibold">Illegal Activity:</span>{" "}
                Content that promotes, facilitates, or depicts illegal
                activities.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              5. CONTENT MODERATION
            </h2>
            <p className="mb-3">
              We employ multiple methods to ensure a safe community:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>
                <span className="text-primary font-semibold">
                  Automated Filtering:
                </span>{" "}
                We use automated systems to detect and filter objectionable
                content before it is visible to other users.
              </li>
              <li>
                <span className="text-primary font-semibold">User Reporting:</span>{" "}
                Users can report objectionable content or abusive behavior
                directly within the App. All reports are reviewed promptly.
              </li>
              <li>
                <span className="text-primary font-semibold">User Blocking:</span>{" "}
                Users can block other users to prevent unwanted interactions.
                Blocked users cannot view your profile or contact you.
              </li>
              <li>
                <span className="text-primary font-semibold">Developer Review:</span>{" "}
                Our team reviews reported content and flagged accounts. We
                take action within 24 hours of receiving a report.
              </li>
              <li>
                <span className="text-primary font-semibold">Content Removal:</span>{" "}
                We reserve the right to remove any content that violates
                these terms at our sole discretion, without prior notice.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              6. ACCOUNT TERMINATION
            </h2>
            <p>
              We reserve the right to suspend or permanently terminate your
              account at our sole discretion, with or without notice, for any
              violation of these Terms of Service. Grounds for termination
              include but are not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-foreground/80">
              <li>Posting objectionable or prohibited content.</li>
              <li>Harassing, threatening, or abusing other users.</li>
              <li>
                Submitting fraudulent or intentionally falsified game
                statistics.
              </li>
              <li>Impersonating another user or person.</li>
              <li>Circumventing content moderation or blocking features.</li>
              <li>Any other violation of this agreement or applicable law.</li>
            </ul>
            <p className="mt-3">
              Upon termination, your license to use the App is revoked and
              you must cease all use. We may delete your account data in
              accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              7. INTELLECTUAL PROPERTY
            </h2>
            <p>
              The App and all content, features, and functionality
              (including but not limited to design, text, graphics, logos,
              and software) are owned by Run Horse Run LLC and are protected
              by copyright, trademark, and other intellectual property laws.
              You may not copy, modify, distribute, or create derivative
              works from any part of the App without our prior written
              consent.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              8. DISCLAIMER OF WARRANTIES
            </h2>
            <p>
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
              BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. RUN
              HORSE RUN LLC DOES NOT WARRANT THAT THE APP WILL BE
              UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS. YOU
              USE THE APP AT YOUR OWN RISK.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              9. LIMITATION OF LIABILITY
            </h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, RUN HORSE RUN LLC
              SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
              REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, ARISING FROM
              YOUR USE OF THE APP. OUR TOTAL LIABILITY SHALL NOT EXCEED THE
              AMOUNT YOU PAID US, IF ANY, IN THE TWELVE (12) MONTHS PRIOR TO
              THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              10. GOVERNING LAW
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance
              with the laws of the United States, without regard to conflict
              of law provisions. Any disputes arising under these terms shall
              be resolved in the courts of competent jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              11. CHANGES TO THESE TERMS
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any
              time. We will notify users of material changes by posting the
              updated terms in the App and on our website. Your continued use
              of the App after changes are posted constitutes your acceptance
              of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3 tracking-wide">
              12. CONTACT US
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
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
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
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
