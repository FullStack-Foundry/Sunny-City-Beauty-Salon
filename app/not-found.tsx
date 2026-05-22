import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-serif text-6xl text-foreground mb-4">404</h1>
        <p className="text-muted-foreground mb-8">Page not found</p>
        <Link
          href="/"
          className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
