import { Youtube, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Youtube, url: "https://youtube.com", label: "YouTube" },
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
  ];

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Brand */}
          <h3 className="text-2xl font-bold">Al-Iman Institute</h3>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/70 text-center">
            © {new Date().getFullYear()} Al-Iman Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
