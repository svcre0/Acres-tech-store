import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-surface">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center group-hover:animate-spin-slow transition-all duration-300">
                <span className="text-charcoal font-bold text-sm">ꋬ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-surface">ꋬꉔꋪꏂꇙ</span>
                <span className="text-xs text-surface/70">Premium Electronics</span>
              </div>
            </Link>
            <p className="text-surface/80 mb-4 leading-relaxed">
              Your trusted partner for premium pre-owned electronics. Quality guaranteed, 
              prices unmatched, service exceptional.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-surface/70 hover:text-gold hover:bg-gold/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-surface/70 hover:text-gold hover:bg-gold/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-surface/70 hover:text-gold hover:bg-gold/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-surface mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Shop All', href: '/products' },
                { name: 'Smartphones', href: '/products?category=phones' },
                { name: 'Audio & Speakers', href: '/products?category=speakers' },
                { name: 'Gaming', href: '/products?category=gaming' },
                { name: 'TVs & Displays', href: '/products?category=tvs' },
                { name: 'Sell Your Device', href: '/sell' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-surface/70 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-surface mb-4">Customer Service</h3>
            <ul className="space-y-3">
              {[
                { name: 'Contact Us', href: '/contact' },
                { name: 'FAQ', href: '/faq' },
                { name: 'Shipping Info', href: '/shipping' },
                { name: 'Returns', href: '/returns' },
                { name: 'Warranty', href: '/warranty' },
                { name: 'Track Order', href: '/track' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-surface/70 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-surface mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                <div className="text-sm text-surface/70">
                  <p>123 Lyndhurst Boulevard</p>
                  <p>Tech District, TD 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-surface/70 hover:text-gold transition-colors"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@cashspinner.com"
                  className="text-sm text-surface/70 hover:text-gold transition-colors"
                >
                  info@acres.com
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-surface mb-2">Get Updates</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-charcoal-light border border-surface/20 rounded-l-md text-sm text-surface placeholder:text-surface/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
                <Button variant="gold" size="sm" className="rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-surface/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-surface/60">
              © 2024 Acres . All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-surface/60 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-surface/60 hover:text-gold transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-surface/60 hover:text-gold transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;