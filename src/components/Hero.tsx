import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-electronics.jpg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-charcoal">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium used electronics collection"
          className="h-full w-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="container mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center rounded-full bg-gold/10 px-4 py-2 text-sm font-medium text-gold ring-1 ring-gold/20 animate-fade-in">
              <Sparkles className="mr-2 h-4 w-4" />
              Premium Quality Guaranteed
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-surface sm:text-6xl animate-fade-in">
              <span className="text-gradient-gold">Spin Your Cash</span>
              <br />
              into Value
            </h1>

            {/* Subheading */}
            <p className="mb-8 text-xl text-surface/90 sm:text-2xl animate-fade-in">
              Buy Smart, Buy Used. Premium pre-owned electronics with guaranteed quality and unbeatable prices.
            </p>

            {/* Features */}
            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3 animate-fade-in">
              <div className="flex items-center text-surface/80">
                <ShieldCheck className="mr-3 h-5 w-5 text-gold" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center text-surface/80">
                <Zap className="mr-3 h-5 w-5 text-gold" />
                <span>Fast Shipping</span>
              </div>
              <div className="flex items-center text-surface/80">
                <Sparkles className="mr-3 h-5 w-5 text-gold" />
                <span>Expert Tested</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row animate-fade-in">
              <Link to="/products">
                <Button variant="gold" size="xl" className="group w-full sm:w-auto">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/sell">
                <Button variant="gold-outline" size="xl" className="w-full sm:w-auto">
                  Sell Your Device
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-8 text-surface/60 animate-fade-in">
              <div className="text-sm">
                <div className="text-2xl font-bold text-gold">10K+</div>
                <div>Happy Customers</div>
              </div>
              <div className="text-sm">
                <div className="text-2xl font-bold text-gold">99%</div>
                <div>Satisfaction Rate</div>
              </div>
              <div className="text-sm">
                <div className="text-2xl font-bold text-gold">5★</div>
                <div>Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
};

export default Hero;