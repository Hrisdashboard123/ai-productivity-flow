import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Twitter, Youtube, Github } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", path: "/features" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Pricing", path: "#" },
    { name: "API", path: "#" },
  ],
  company: [
    { name: "About", path: "/about" },
    { name: "Careers", path: "#" },
    { name: "Blog", path: "#" },
    { name: "Press", path: "#" },
  ],
  support: [
    { name: "Contact", path: "/contact" },
    { name: "Help Center", path: "#" },
    { name: "Privacy Policy", path: "#" },
    { name: "Terms of Service", path: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Github, href: "#", label: "GitHub" },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/30 bg-gradient-to-b from-transparent to-muted/20">
      <div className="container-narrow px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal via-pink to-purple flex items-center justify-center">
                <span className="text-xl font-bold text-white">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                SphereStech
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              AI-powered productivity assistant that helps you manage tasks, 
              schedules, and workflows with intelligent automation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-teal/20 hover:text-teal transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-teal transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-teal transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-teal transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SphereStech. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Mail size={14} />
              hello@spherestech.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
