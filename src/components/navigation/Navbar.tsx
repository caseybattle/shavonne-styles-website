// import { motion } from "framer-motion";
// import { fadeInUpVariants } from "@/hooks/useAnimations";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { BorderBeam } from "@/components/ui/border-beam";

export const Navbar = () => {
  return (
    <>
    <nav
      className="w-full flex justify-between items-center px-6 py-4 bg-background/80 backdrop-blur-sm relative"
    >
      <div className="flex items-center">
        <Link href="/" className="text-white text-4xl font-alex-brush hover:text-pink-200 transition-colors drop-shadow-lg">
          Shavonne Styles
        </Link>
      </div>
      
      <div className="flex items-center space-x-4">
        <Link 
          href="/book" 
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
        
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            href="/testimonials" 
            className="text-white/90 hover:text-white transition-colors duration-200 drop-shadow-md font-medium"
          >
            Testimonials
          </Link>
          <Link 
            href="/about" 
            className="text-white/90 hover:text-white transition-colors duration-200 drop-shadow-md font-medium"
          >
            About
          </Link>
          <Link 
            href="/portfolio" 
            className="text-white/90 hover:text-white transition-colors duration-200 drop-shadow-md font-medium"
          >
            Portfolio
          </Link>
          <Link 
            href="/contact" 
            className="text-white/90 hover:text-white transition-colors duration-200 drop-shadow-md font-medium"
          >
            Contact
          </Link>
        </div>
        
        <ThemeToggle />
      </div>
    </nav>
    </>
  );
}