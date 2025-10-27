import { Youtube, Instagram, Facebook } from "lucide-react";

const HeroSection = () => {
  const socialLinks = [
    { icon: Youtube, url: "https://youtube.com", label: "YouTube" },
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(var(--hero-gradient-start)) 0%, hsl(var(--hero-gradient-end)) 100%)",
      }}
    >
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        {/* Logo */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-2">
            Al-Iman Institute
          </h2>
        </div>

        {/* English Slogan */}
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in">
          Connecting Hearts to Allah
        </h1>
        <h2 className="text-white/90 text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-12 animate-fade-in">
          Reviving the Mercy of the Prophet ﷺ
        </h2>

        {/* Urdu Slogan */}
        <div className="mb-12 animate-fade-in" dir="rtl">
          <p className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold leading-relaxed">
            دلوں کو اللہ سے جوڑنا — نبی ﷺ کی رحمت کو زندہ کرنا
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-16 animate-fade-in">
          A movement to reconnect the Ummah and spread mercy worldwide
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 animate-fade-in">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 text-white" />
            </a>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
