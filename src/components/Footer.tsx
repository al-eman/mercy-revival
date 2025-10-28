import { Youtube, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const socialLinks = [
    {
      icon: Youtube,
      url: "https://www.youtube.com/@Al-Eman-Institute",
      label: "YouTube",
      color: "text-[#FF0000]",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/alemaninstitute/",
      label: "Instagram",
      color: "text-[#E1306C]",
    },
    {
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=61582602227867",
      label: "Facebook",
      color: "text-[#1877F2]",
    },
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
                className="bg-white text-black hover:bg-white/90 p-2 rounded-full transition-colors"
                aria-label={social.label}
              >
                <social.icon className={`w-5 h-5 ${social.color}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
