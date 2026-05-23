"use client";

import fs from "fs";
import path from "path";
import Navigation from "@/components/ui/navigation";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/ui/footer";

const images = [
  "gallery-1.jpg",
  "gallery-2.jpg",
  "gallery-3.jpg",
  "gallery-4.jpg",
  "gallery-5.jpg",
  "gallery-6.jpg",
];

export default function Page() {
  return (
    <div className="bg-background min-h-screen selection:bg-primary selection:text-primary-foreground">
      <Navigation
        langHandler={() => undefined}
        company="Sunny City Beauty Salon"
        phone="646-386-8898"
      />

      <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-primary/90 font-semibold mb-4">
            Gallery
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-foreground font-light mb-6">
            More salon photos
          </h1>
          <p className="mx-auto max-w-3xl text-base md:text-lg leading-8 text-foreground/70">
            Explore our full gallery of hair styling, color, and perm work from
            Sunny City Beauty Salon. These images show the looks we create for
            our clients in Chinatown.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary transition duration-300 hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Back to home
            </Link>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {images.map((filename) => (
              <article
                key={filename}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
                  <Image
                    src={`/images/${filename}`}
                    alt={filename.replace(/\.(jpe?g|png|webp)$/i, "")}
                    fill
                    className="object-cover transition duration-700 ease-out hover:scale-105"
                  />
                </div>
                <div className="px-6 py-5 text-center">
                  <p className="text-xs uppercase tracking-[0.4em] text-foreground/50">
                    Salon photo
                  </p>
                  <p className="mt-3 text-lg font-serif text-foreground">
                    {filename
                      .replace(/^gallery-/, "")
                      .replace(/\.[^.]+$/, "")
                      .replace(/-/g, " ")}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
