import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import VideosSection from "@/components/VideosSection";
import QuestionSection from "@/components/QuestionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ManifestoSection />
        <VideosSection />
        <QuestionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
