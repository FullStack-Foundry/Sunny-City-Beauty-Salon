export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-6 text-center border-t border-border/10">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <span className="font-serif text-2xl tracking-wide mb-3">
          Sunny City Beauty Salon
        </span>
        <p className="text-sm opacity-50 font-light mb-6">
          7 Pell St, New York, NY 10013
        </p>
        <p className="text-sm opacity-50 font-light">
          &copy; {new Date().getFullYear()} Sunny City Beauty Salon. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
