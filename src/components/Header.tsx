import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/hooks/useRedux';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const cartItemCount = useAppSelector((state) => state.cart.itemCount);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/products' },

    { name: 'Sell Device', href: '/sell' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href.split('?')[0]);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-surface-elevated/95 backdrop-blur supports-[backdrop-filter]:bg-surface-elevated/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center group-hover:animate-spin-slow transition-all duration-300">
              <span className="text-charcoal font-bold text-sm">ꋬ</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">ꋬꉔꋪꏂꇙ</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Premium Electronics</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActiveLink(item.href)
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/login">
  <Button variant="ghost" size="icon">
    <User className="h-5 w-5" />
  </Button>
</Link>

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center animate-scale-in">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button variant="gold" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t bg-surface-elevated">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActiveLink(item.href)
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <Button variant="gold" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;