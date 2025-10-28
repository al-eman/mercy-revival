import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import VideosSection from "@/components/VideosSection";
import QuestionSection from "@/components/QuestionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <main className="overflow-x-hidden">
        <HeroSection />
        <ManifestoSection />
        <VideosSection />
        <QuestionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
