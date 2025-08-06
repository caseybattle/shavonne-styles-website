// import { motion } from 'framer-motion';
// import { fadeInUpVariants, viewportConfig } from '@/hooks/useAnimations';
import { Navbar } from '../navigation/Navbar';
import { BorderBeam } from '@/components/ui/border-beam';

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Beautiful Hair,
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Beautiful You
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your look with expert hair care, protective styles, and personalized attention. 
            Experience the art of beautiful hair styling.
          </p>
          
          <div>
            <button className="group relative px-8 py-4 text-lg font-semibold text-white rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
              {/* Border Beam Animation */}
              <BorderBeam className="opacity-100" duration={8} delay={0.5} />
              
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
              <span className="relative z-10 drop-shadow-sm">Get Started</span>
              
              {/* Inner glow */}
              <div className="absolute inset-1 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-50"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};