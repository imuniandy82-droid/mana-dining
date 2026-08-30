import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { SignatureDishes } from "@/components/SignatureDishes";
import { ExperienceSection } from "@/components/ExperienceSection";
import { StorySection } from "@/components/StorySection";
import { GallerySection } from "@/components/GallerySection";
import { MenuSection } from "@/components/MenuSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { LocationSection } from "@/components/LocationSection";
import { ReservationSection } from "@/components/ReservationSection";
import { Footer } from "@/components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <IntroSection />
        <SignatureDishes />
        <ExperienceSection />
        <StorySection />
        <GallerySection />
        <MenuSection />
        <ReviewsSection />
        <LocationSection />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  );
}
