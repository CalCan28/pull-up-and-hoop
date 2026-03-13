import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center pt-16">
        <Image
          src="/logo.png"
          alt="Pull Up & Hoop"
          width={150}
          height={150}
          className="mb-2 object-contain"
        />

        <div className="text-6xl my-4" style={{ animation: "bounce-ball 3s ease-in-out infinite" }}>
          🏀
        </div>

        <h1 className="font-display text-7xl sm:text-8xl md:text-9xl text-foreground leading-none tracking-wider">
          PULL UP
          <br />
          <span className="text-primary">&amp; HOOP</span>
        </h1>

        <p className="font-body text-xl sm:text-2xl text-muted mt-6 max-w-xl font-light tracking-wide">
          The pickup basketball app. Find courts, call next, pick your squad,
          and track your stats &mdash; all verified by the players you hoop with.
        </p>

        {/* App Download CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="#download"
            className="bg-primary text-background font-display text-2xl tracking-wider px-10 py-4 rounded-xl hover:bg-primary/90 transition-all hover:scale-105"
          >
            DOWNLOAD THE APP
          </a>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20 max-w-5xl w-full">
          {[
            {
              icon: "\u{1F4CD}",
              title: "FIND COURTS",
              desc: "Locate basketball courts near you and see who's already there.",
            },
            {
              icon: "\u{270B}",
              title: "I GOT NEXT",
              desc: "Queue up for the next run digitally. No more arguing about who's next.",
            },
            {
              icon: "\u{1F4CA}",
              title: "TRACK STATS",
              desc: "Log your points, assists, rebounds after every game. Build your resume.",
            },
            {
              icon: "\u{2705}",
              title: "VERIFIED STATS",
              desc: "No cap. Your stats only count when the players you played with vouch for them.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-surface border border-surface-light rounded-xl p-6 text-left hover:border-primary/40 transition-colors"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-display text-xl text-primary mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-24 max-w-3xl w-full">
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-12">
            HOW IT WORKS
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "PULL UP TO A COURT",
                desc: "Open the app, find a court near you, and check in so others know you're there.",
              },
              {
                step: "02",
                title: "CALL NEXT",
                desc: "Tap 'I Got Next' to get in the queue. See who else is waiting and their stats.",
              },
              {
                step: "03",
                title: "PICK YOUR SQUAD",
                desc: "When it's your turn, pick players for your team based on their verified stats.",
              },
              {
                step: "04",
                title: "BALL OUT & LOG STATS",
                desc: "Play your game, then log your stats. Other players vouch to verify — no cap allowed.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-6 text-left"
              >
                <span className="font-display text-5xl text-primary/30 leading-none">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-foreground">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-3 gap-8 sm:gap-16 mt-24">
          <div className="text-center">
            <div className="font-display text-4xl sm:text-5xl text-primary">
              24/7
            </div>
            <div className="text-muted text-xs sm:text-sm uppercase tracking-wider mt-1">
              Live Updates
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl sm:text-5xl text-accent">
              5v5
            </div>
            <div className="text-muted text-xs sm:text-sm uppercase tracking-wider mt-1">
              Full Runs
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl sm:text-5xl text-primary">
              100%
            </div>
            <div className="text-muted text-xs sm:text-sm uppercase tracking-wider mt-1">
              Free
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div id="download" className="mt-24 mb-16 bg-surface rounded-2xl p-10 border border-surface-light max-w-lg w-full">
          <h2 className="font-display text-3xl text-primary mb-2">
            READY TO HOOP?
          </h2>
          <p className="font-body text-muted mb-6">
            Download Pull Up &amp; Hoop and find your next game.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="bg-foreground text-background font-display text-lg tracking-wider px-8 py-3 rounded-lg text-center hover:opacity-90 transition-opacity"
            >
              APP STORE (COMING SOON)
            </a>
            <a
              href="#"
              className="bg-surface-light text-foreground font-display text-lg tracking-wider px-8 py-3 rounded-lg text-center hover:opacity-90 transition-opacity"
            >
              GOOGLE PLAY (COMING SOON)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
