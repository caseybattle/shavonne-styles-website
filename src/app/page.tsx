import { HowItWorks } from '@/components/sections/HowItWorks';
import { Pricing } from '@/components/sections/Pricing';
import { Footer } from '@/components/sections/Footer';
import { Navbar } from '@/components/navigation/Navbar';
import { BorderBeam } from '@/components/ui/border-beam';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Sparkle Background Container */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          
          <div className="absolute top-[88%] left-[92%] w-px h-px">
            <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '11.4s'}}></div>
          </div>
          
          <div className="absolute top-[92%] left-[25%] w-px h-px">
            <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '12.0s'}}></div>
          </div>
          
          <div className="absolute top-[95%] left-[55%] w-px h-px">
            <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '12.6s'}}></div>
          </div>
          
          {/* Additional ultra-thin diamond sparkles for density */}
          <div className="absolute top-[5%] left-[38%] w-px h-px">
            <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '0.2s'}}></div>
          </div>
          
          <div className="absolute top-[32%] left-[22%] w-px h-px">
            <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '0.7s'}}></div>
          </div>
          
          <div className="absolute top-[48%] left-[42%] w-px h-px">
            <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '1.2s'}}></div>
          </div>
          
          <div className="absolute top-[55%] left-[65%] w-px h-px">
            <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '1.7s'}}></div>
          </div>
          
          <div className="absolute top-[72%] left-[32%] w-px h-px">
            <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '2.2s'}}></div>
          </div>
          
          <div className="absolute top-[25%] left-[75%] w-px h-px">
            <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '2.7s'}}></div>
          </div>
          
          <div className="absolute top-[88%] left-[45%] w-px h-px">
            <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '3.2s'}}></div>
          </div>
          
          <div className="absolute top-[15%] left-[92%] w-px h-px">
            <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '3.7s'}}></div>
          </div>
          
          <div className="absolute top-[65%] left-[15%] w-px h-px">
            <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '4.2s'}}></div>
          </div>
          
          <div className="absolute top-[35%] left-[95%] w-px h-px">
            <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '4.7s'}}></div>
          </div>
          
          {/* Additional sparkles for full background coverage */}
          <div className="absolute top-[3%] left-[5%] w-px h-px">
            <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          <div className="absolute top-[7%] left-[18%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-twinkle" style={{animationDelay: '1.1s'}}></div>
          </div>
          
          <div className="absolute top-[11%] left-[32%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-glow" style={{animationDelay: '1.7s'}}></div>
          </div>
          
          <div className="absolute top-[9%] left-[47%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-flash" style={{animationDelay: '2.3s'}}></div>
          </div>
          
          <div className="absolute top-[6%] left-[61%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-twinkle" style={{animationDelay: '2.9s'}}></div>
          </div>
          
          <div className="absolute top-[13%] left-[76%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-glow" style={{animationDelay: '3.5s'}}></div>
          </div>
          
          <div className="absolute top-[4%] left-[89%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-flash" style={{animationDelay: '4.1s'}}></div>
          </div>
          
          <div className="absolute top-[19%] left-[8%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-twinkle" style={{animationDelay: '4.7s'}}></div>
          </div>
          
          <div className="absolute top-[24%] left-[29%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-glow" style={{animationDelay: '5.3s'}}></div>
          </div>
          
          <div className="absolute top-[21%] left-[52%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-flash" style={{animationDelay: '5.9s'}}></div>
          </div>
          
          <div className="absolute top-[26%] left-[67%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-twinkle" style={{animationDelay: '6.5s'}}></div>
          </div>
          
          <div className="absolute top-[17%] left-[84%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-glow" style={{animationDelay: '7.1s'}}></div>
          </div>
          
          <div className="absolute top-[29%] left-[12%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-flash" style={{animationDelay: '7.7s'}}></div>
          </div>
          
          <div className="absolute top-[33%] left-[41%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-twinkle" style={{animationDelay: '8.3s'}}></div>
          </div>
          
          <div className="absolute top-[31%] left-[59%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-glow" style={{animationDelay: '8.9s'}}></div>
          </div>
          
          <div className="absolute top-[27%] left-[81%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-flash" style={{animationDelay: '9.5s'}}></div>
          </div>
          
          <div className="absolute top-[36%] left-[6%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-twinkle" style={{animationDelay: '10.1s'}}></div>
          </div>
          
          <div className="absolute top-[39%] left-[26%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-glow" style={{animationDelay: '10.7s'}}></div>
          </div>
          
          <div className="absolute top-[41%] left-[51%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-flash" style={{animationDelay: '11.3s'}}></div>
          </div>
          
          <div className="absolute top-[37%] left-[73%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-twinkle" style={{animationDelay: '11.9s'}}></div>
          </div>
          
          <div className="absolute top-[43%] left-[91%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-glow" style={{animationDelay: '12.5s'}}></div>
          </div>
          
          <div className="absolute top-[46%] left-[14%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-flash" style={{animationDelay: '13.1s'}}></div>
          </div>
          
          <div className="absolute top-[49%] left-[33%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-twinkle" style={{animationDelay: '13.7s'}}></div>
          </div>
          
          <div className="absolute top-[51%] left-[56%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-glow" style={{animationDelay: '14.3s'}}></div>
          </div>
          
          <div className="absolute top-[47%] left-[79%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-flash" style={{animationDelay: '14.9s'}}></div>
          </div>
          
          <div className="absolute top-[53%] left-[21%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-twinkle" style={{animationDelay: '15.5s'}}></div>
          </div>
          
          <div className="absolute top-[56%] left-[44%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-glow" style={{animationDelay: '16.1s'}}></div>
          </div>
          
          <div className="absolute top-[59%] left-[69%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-flash" style={{animationDelay: '16.7s'}}></div>
          </div>
          
          <div className="absolute top-[54%] left-[87%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-twinkle" style={{animationDelay: '17.3s'}}></div>
          </div>
          
          <div className="absolute top-[61%] left-[11%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-glow" style={{animationDelay: '17.9s'}}></div>
          </div>
          
          <div className="absolute top-[64%] left-[36%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-flash" style={{animationDelay: '18.5s'}}></div>
          </div>
          
          <div className="absolute top-[67%] left-[54%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-twinkle" style={{animationDelay: '19.1s'}}></div>
          </div>
          
          <div className="absolute top-[63%] left-[77%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-glow" style={{animationDelay: '19.7s'}}></div>
          </div>
          
          <div className="absolute top-[69%] left-[93%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-flash" style={{animationDelay: '20.3s'}}></div>
          </div>
          
          <div className="absolute top-[71%] left-[17%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-twinkle" style={{animationDelay: '20.9s'}}></div>
          </div>
          
          <div className="absolute top-[74%] left-[39%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-glow" style={{animationDelay: '21.5s'}}></div>
          </div>
          
          <div className="absolute top-[76%] left-[61%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-flash" style={{animationDelay: '22.1s'}}></div>
          </div>
          
          <div className="absolute top-[73%] left-[83%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-twinkle" style={{animationDelay: '22.7s'}}></div>
          </div>
          
          <div className="absolute top-[79%] left-[9%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-glow" style={{animationDelay: '23.3s'}}></div>
          </div>
          
          <div className="absolute top-[81%] left-[31%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-flash" style={{animationDelay: '23.9s'}}></div>
          </div>
          
          <div className="absolute top-[84%] left-[53%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-twinkle" style={{animationDelay: '24.5s'}}></div>
          </div>
          
          <div className="absolute top-[86%] left-[74%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-glow" style={{animationDelay: '25.1s'}}></div>
          </div>
          
          <div className="absolute top-[83%] left-[89%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-flash" style={{animationDelay: '25.7s'}}></div>
          </div>
          
          <div className="absolute top-[89%] left-[13%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-twinkle" style={{animationDelay: '26.3s'}}></div>
          </div>
          
          <div className="absolute top-[91%] left-[37%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-glow" style={{animationDelay: '26.9s'}}></div>
          </div>
          
          <div className="absolute top-[93%] left-[59%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-flash" style={{animationDelay: '27.5s'}}></div>
          </div>
          
          <div className="absolute top-[96%] left-[81%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-twinkle" style={{animationDelay: '28.1s'}}></div>
          </div>
          
          <div className="absolute top-[98%] left-[23%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-glow" style={{animationDelay: '28.7s'}}></div>
          </div>
          
          <div className="absolute top-[94%] left-[67%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-flash" style={{animationDelay: '29.3s'}}></div>
          </div>
          
          <div className="absolute top-[97%] left-[45%] w-0.5 h-0.5">
            <div className="w-full h-full bg-white rounded-full sparkle-twinkle" style={{animationDelay: '29.9s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Content */}
      <section className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Beautiful Hair,
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Beautiful You
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
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
            </button>
          </div>
        </div>
      </section>
      
      {/* Floating Card Sections */}
      <div className="relative z-10">
        <HowItWorks />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}
