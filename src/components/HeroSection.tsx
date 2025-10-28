import { Youtube, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const socialLinks = [
    {
      icon: Youtube,
      url: "https://www.youtube.com/@Al-Eman-Institute",
      label: "YouTube",
      color: "text-[#FF0000]", // YouTube red
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/alemaninstitute/",
      label: "Instagram",
      color: "text-[#E1306C]", // Instagram magenta
    },
    {
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=61582602227867",
      label: "Facebook",
      color: "text-[#1877F2]", // Facebook blue
    },
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
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-5 animate-fade-in">
          Connecting Hearts to Allah
        </h1>
        <h2 className="text-white/90 text-2xl md:text-3xl lg:text-4xl font-semibold font-italic leading-tight mb-4 md:mb-6 animate-fade-in">
           <i>Spreading the Mercy of the Prophet{" "}</i>
          <span className="text-md md:text-md lg:lg align-baseline">
            ﷺ
          </span>
        </h2>

        {/* Urdu Slogan */}
        <div className="mb-6 md:mb-8 animate-fade-in" dir="rtl" lang="ur">
          <p className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed font-urdu urdu-25">
            دلوں کو اللہ سے جوڑنا — نبی{" "}
            <span className="text-xs md:text-sm lg:text-base align-baseline">
              ﷺ
            </span>{" "}
            کی رحمت کو عام کرنا
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 md:gap-6 animate-fade-in">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 hover:bg-white text-black p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              <social.icon
                className={`w-5 h-5 md:w-6 md:h-6 ${social.color}`}
              />
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
