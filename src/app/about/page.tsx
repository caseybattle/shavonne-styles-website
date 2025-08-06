"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { Navigation, Footer } from '@/components/ui/navigation';
import { Heart, Award, Users, Clock, Star, Sparkles, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-black' 
        : 'bg-gradient-to-br from-rose-50 to-pink-100'
    }`}>
      <Navigation />
      
      {/* Custom Sparkle Elements */}
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

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-6xl md:text-7xl font-alex-brush font-bold mb-6 ${
            theme === 'dark' ? 'text-pink-400' : 'text-pink-600'
          }`}>
            About Shavonne
          </h1>
          <p className="text-xl mb-8 text-white">
            Passionate hair stylist dedicated to enhancing your natural beauty and promoting healthy hair growth.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Cards Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            {/* About Text */}
            <Card className={`shadow-xl h-full ${
              theme === 'dark' 
                ? 'bg-white/90 border-white/30' 
                : 'bg-white/80 border-pink-300/50'
            }`}>
              <CardHeader>
                <CardTitle className={`text-2xl flex items-center ${
                  theme === 'dark' ? 'text-pink-400' : 'text-pink-600'
                }`}>
                  <Heart className={`mr-3 h-6 w-6 ${
                    theme === 'dark' ? 'text-pink-500' : 'text-pink-600'
                  }`} />
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed text-gray-700">
                  Welcome to Shavonne Styles! I'm Shavonne, a passionate hair stylist with over 10 years of experience 
                  in the beauty industry. My journey began with a simple love for making people feel beautiful and confident 
                  in their own skin.
                </p>
                <p className="leading-relaxed text-gray-700">
                  I specialize in natural hair care, protective styling, and helping clients achieve their hair goals 
                  while maintaining the health and integrity of their hair. Every client who sits in my chair receives 
                  personalized attention and care tailored to their unique hair type and lifestyle.
                </p>
                <p className="leading-relaxed text-gray-700">
                  My mission is to create a welcoming space where you can relax, unwind, and leave feeling absolutely 
                  gorgeous. I believe that healthy hair is beautiful hair, and I'm here to guide you on your hair journey 
                  every step of the way.
                </p>
              </CardContent>
            </Card>

            {/* Owner Image */}
            <Card className={`shadow-xl overflow-hidden h-full ${
              theme === 'dark' 
                ? 'bg-white/90 border-white/30' 
                : 'bg-white/80 border-pink-300/50'
            }`}>
              <div className="aspect-[3/4] relative">
                {/* Placeholder for owner's image */}
                <div className={`w-full h-full flex items-center justify-center ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-700 to-gray-800' 
                    : 'bg-gradient-to-br from-pink-50 to-rose-100'
                }`}>
                  <div className="text-center space-y-4">
                    <div className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center border-2 ${
                      theme === 'dark' 
                        ? 'bg-pink-500/20 border-pink-500' 
                        : 'bg-pink-100 border-pink-400'
                    }`}>
                      <Heart className={`h-12 w-12 ${
                        theme === 'dark' ? 'text-pink-400' : 'text-pink-600'
                      }`} />
                    </div>
                    <div className="text-gray-700">
                      <p className="font-semibold text-lg text-pink-600">Shavonne's Photo</p>
                      <p className="text-sm">Professional headshot placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Expertise Section */}
          <div className="mb-12">
            <Card className={`shadow-xl ${
              theme === 'dark' 
                ? 'bg-white/90 border-white/30' 
                : 'bg-white/80 border-pink-300/50'
            }`}>
              <CardHeader>
                <CardTitle className={`text-2xl flex items-center ${
                  theme === 'dark' ? 'text-pink-400' : 'text-pink-600'
                }`}>
                  <Sparkles className={`mr-3 h-6 w-6 ${
                    theme === 'dark' ? 'text-pink-500' : 'text-pink-600'
                  }`} />
                  My Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <Star className="h-4 w-4 mr-2 text-pink-600" />
                      Natural Hair Specialist
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Star className="h-4 w-4 mr-2 text-pink-600" />
                      Protective Styling Expert
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Star className="h-4 w-4 mr-2 text-pink-600" />
                      Chemical Services
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <Star className="h-4 w-4 mr-2 text-pink-600" />
                      Bridal & Event Styling
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Star className="h-4 w-4 mr-2 text-pink-600" />
                      Hair Health Consultation
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Star className="h-4 w-4 mr-2 text-pink-600" />
                      Kids Hair Care
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className={`shadow-lg text-center p-6 ${
              theme === 'dark' 
                ? 'bg-white/90 border-white/30' 
                : 'bg-white/80 border-pink-300/50'
            }`}>
              <div className="text-3xl font-bold mb-2 text-pink-600">10+</div>
              <div className="text-sm text-gray-700">Years Experience</div>
            </Card>
            <Card className={`shadow-lg text-center p-6 ${
              theme === 'dark' 
                ? 'bg-white/90 border-white/30' 
                : 'bg-white/80 border-pink-300/50'
            }`}>
              <div className="text-3xl font-bold mb-2 text-pink-600">500+</div>
              <div className="text-sm text-gray-700">Happy Clients</div>
            </Card>
            <Card className={`shadow-lg text-center p-6 ${
              theme === 'dark' 
                ? 'bg-white/90 border-white/30' 
                : 'bg-white/80 border-pink-300/50'
            }`}>
              <div className="text-3xl font-bold mb-2 text-pink-600">98%</div>
              <div className="text-sm text-gray-700">Satisfaction Rate</div>
            </Card>
            <Card className={`shadow-lg text-center p-6 ${
              theme === 'dark' 
                ? 'bg-white/90 border-white/30' 
                : 'bg-white/80 border-pink-300/50'
            }`}>
              <div className="text-3xl font-bold mb-2 text-pink-600">24/7</div>
              <div className="text-sm text-gray-700">Support Available</div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className={`shadow-xl border-pink-400 ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-pink-600 to-pink-500 text-white' 
                : 'bg-gradient-to-r from-pink-500 to-rose-400 text-white'
            }`}>
              <CardContent className="py-12">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Transform Your Hair?
                </h3>
                <p className={`mb-6 max-w-2xl mx-auto ${
                  theme === 'dark' ? 'text-pink-100' : 'text-pink-50'
                }`}>
                  Book your consultation today and let's create the perfect look for you. 
                  I can't wait to help you achieve your hair goals!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary" 
                    className="bg-white text-pink-600 hover:bg-pink-50"
                    asChild
                  >
                    <Link href="/contact">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Consultation
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-pink-600"
                    asChild
                  >
                    <Link href="/#services">
                      View Services
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}