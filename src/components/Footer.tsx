import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-surface-light bg-background">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">&#127936;</span>
            <span className="font-display text-xl tracking-wide text-primary">
              PULL UP & HOOP
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 font-body text-sm text-muted">
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
            <Link
              href="/guidelines"
              className="hover:text-primary transition-colors"
            >
              Community Guidelines
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center font-body text-xs text-muted/60">
          &copy; {new Date().getFullYear()} Run Horse Run LLC. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
