import About from "@/components/ui/about";
import BookingBannerTop from "@/components/ui/booking-banner-top";
import ContactInfo from "@/components/ui/contact-info";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/ui/hero-section";
import MiniGallery from "@/components/ui/mini-gallery";
import Navigation from "@/components/ui/navigation";
import Services from "@/components/ui/services";
import { useTranslation } from "react-i18next";

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
  const [t, i18n] = useTranslation("global");

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="bg-background min-h-screen selection:bg-primary selection:text-primary-foreground">
      <Navigation
        langHandler={handleLanguageChange}
        company={t("nav.company")}
        phone={t("nav.phone")}
      />

      <HeroSection
        address={t("heroSection.address")}
        company={t("heroSection.company")}
      />

      {/* Booking Banner — Near Top */}

      <About
        fadeInUp={fadeInUp}
        header={t("about.header")}
        body={t("about.body")}
      />

      <Services fadeInUp={fadeInUp} />

      <MiniGallery fadeInUp={fadeInUp} />

      <BookingBannerTop fadeInUp={fadeInUp} />

      <ContactInfo fadeInUp={fadeInUp} />

      <Footer />
    </div>
  );
}
