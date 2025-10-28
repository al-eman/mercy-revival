import { Youtube, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
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
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Al Eman Institute. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
