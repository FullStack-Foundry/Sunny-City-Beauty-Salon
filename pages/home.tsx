import About from "@/components/ui/about";
import BookingBannerBottom from "@/components/ui/booking-banner-bottom";
import BookingBannerTop from "@/components/ui/booking-banner-top";
import ContactInfo from "@/components/ui/contact-info";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/ui/hero-section";
import MiniGallery from "@/components/ui/mini-gallery";
import Services from "@/components/ui/services";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function Home() {
  return (
    <div className="bg-background min-h-screen selection:bg-primary selection:text-primary-foreground">
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-border/60 py-3 sm:py-4 px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
        <span className="font-serif text-lg sm:text-xl tracking-wide text-foreground">
          Sunny City Beauty Salon
        </span>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href="tel:6463868898"
            className="font-sans text-xs sm:text-sm tracking-wide text-primary hover:text-primary/80 transition-colors duration-300 whitespace-nowrap"
          >
            Call 646-386-8898
          </a>
          <div className="flex flex-row gap-2 sm:gap-4">
            <button
              className={` border border-primary rounded-sm px-2 py-1 text-xs sm:text-sm`}
            >
              中国人
            </button>
            <button
              className={`border border-primary rounded-sm px-2 py-1 text-xs sm:text-sm`}
            >
              English
            </button>
          </div>
        </div>
      </nav>

      <HeroSection />

      {/* Booking Banner — Near Top */}
      <BookingBannerTop fadeInUp={fadeInUp} />

      <About fadeInUp={fadeInUp} />

      <Services fadeInUp={fadeInUp} />

      <MiniGallery fadeInUp={fadeInUp} />

      <ContactInfo fadeInUp={fadeInUp} />

      <BookingBannerBottom fadeInUp={fadeInUp} />

      <Footer />
    </div>
  );
}
