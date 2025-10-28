import { Youtube, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const socialLinks = [
    {
      icon: Youtube,
      url: "https://www.youtube.com/watch?v=f-wtTRKLydc&list=PLCM7MOK2Juq5NPwX-79-FJR-p-zoSsf6g&index=17",
      label: "YouTube",
    },
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
  ];

  return (
    <section
      id="home"
      className="min-h-[100dvh] flex items-center justify-center pt-20 pb-8 relative overflow-hidden hero-bg bg-cover bg-center"
    >
      {/* Thin black overlay for readability */}
      <div className="absolute inset-0 bg-black/25" />

      <div className="container mx-auto px-4 py-8 text-center relative z-10 flex flex-col justify-center">
        {/* English Slogan */}
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-5 animate-fade-in">
          Connecting Hearts to Allah
        </h1>
        <h2 className="text-white/90 text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-5 md:mb-7 animate-fade-in">
          Reviving the Mercy of the Prophet{" "}
          <span className="text-xs md:text-sm lg:text-base align-baseline">
            ﷺ
          </span>
        </h2>

        {/* Urdu Slogan */}
        <div className="mb-6 md:mb-8 animate-fade-in" dir="rtl" lang="ur">
          <p className="text-white text-lg md:text-3xl lg:text-4xl font-semibold leading-relaxed font-urdu urdu-25">
            دلوں کو اللہ سے جوڑنا — نبی{" "}
            <span className="text-xs md:text-sm lg:text-base align-baseline">
              ﷺ
            </span>{" "}
            کی رحمت کو زندہ کرنا
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-white/90 text-base md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 md:mb-12 animate-fade-in">
          A movement to reconnect the Ummah and spread mercy worldwide
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 md:gap-6 animate-fade-in">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </a>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-12 -right-12 md:-top-24 md:-right-24 w-48 h-48 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 md:-bottom-24 md:-left-24 w-48 h-48 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
