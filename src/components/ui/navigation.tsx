'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Home, MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { BorderBeam } from '@/components/ui/border-beam';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={cn("w-full bg-background/80 backdrop-blur-sm sticky top-0 z-50", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo - Left Side */}
          <div className="flex items-center w-64">
            <Link href="/" className="text-foreground text-4xl font-alex-brush hover:text-primary transition-colors">
              Shavonne Styles
            </Link>
          </div>
          
          {/* Navigation Items - Centered */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-2 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2",
                      isActive
                        ? "text-primary font-semibold bg-primary/20"
                        : "text-foreground/80 hover:text-foreground hover:bg-primary/10"
                    )}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
          
          {/* Theme Toggle and Book Now Button - Right Side */}
          <div className="flex items-center justify-end w-64 gap-4">
            <ThemeToggle />
            <Link 
              href="/contact" 
              className="group relative px-6 py-3 text-white rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
            >
              {/* Border Beam Animation */}
              <BorderBeam className="opacity-100" duration={8} delay={0} />
              
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md border border-white/30 rounded-full"></div>
              
              {/* Liquid glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-rose-500/30 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Animated liquid effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:animate-shimmer"></div>
              </div>
              
              {/* Button text */}
              <span className="relative z-10 drop-shadow-sm">Book Now</span>
              
              {/* Inner glow */}
              <div className="absolute inset-1 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-50"></div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-pink-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-3xl font-alex-brush font-bold mb-4 text-pink-400">Shavonne Styles</h3>
            <p className="text-gray-300 mb-4">
              Professional hair styling services specializing in natural hair care and protective styles.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-pink-400 transition-colors">Home</Link></li>
              <li><Link href="/portfolio" className="hover:text-pink-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/testimonials" className="hover:text-pink-400 transition-colors">Testimonials</Link></li>
              <li><Link href="/about" className="hover:text-pink-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-pink-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Contact Info</h4>
            <div className="text-gray-300 space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p>3064 Old Norcross Rd NW Suite 130</p>
                  <p>Duluth, GA 30096</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <p>470-424-8584</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <p>Shavonnecstyles@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <p>@Shavonnesstyles89</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-pink-500/30 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Shavonne Styles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}