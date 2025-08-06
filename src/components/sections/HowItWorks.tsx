'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Scissors, Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUpVariants, staggerContainerVariants, viewportConfig } from '@/hooks/useAnimations';

export const HowItWorks = () => {

  const steps = [
    {
      icon: Calendar,
      title: "Book Consultation",
      description: "Schedule a personalized consultation to discuss your hair goals, lifestyle, and preferences."
    },
    {
      icon: Scissors,
      title: "Expert Analysis",
      description: "Our professional stylist analyzes your hair type, condition, and recommends the best treatments."
    },
    {
      icon: Sparkles,
      title: "Transform & Style",
      description: "Experience our premium services with high-quality products and expert techniques."
    },
    {
      icon: Heart,
      title: "Ongoing Care",
      description: "Receive personalized aftercare instructions and maintenance tips for lasting results."
    }
  ];

  return (
    <motion.section 
      id="how-it-works" 
      className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={staggerContainerVariants}
    >
      {/* Floating container with glass morphism */}
      <motion.div 
        className="w-full max-w-7xl mx-auto"
        variants={fadeInUpVariants}
      >
        {/* Main floating card */}
        <div className="relative bg-gradient-to-br from-pink-400 to-pink-500 rounded-3xl shadow-2xl border border-white/30 p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-pink-400/10 to-pink-600/10 animate-pulse"></div>
          
          {/* Floating orbs for decoration */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-pink-500/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-pink-300/20 to-pink-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          
          <div className="relative z-10">
            <motion.div className="text-center mb-16" variants={fadeInUpVariants}>
              <motion.h2 
                className="text-4xl md:text-5xl font-alex-brush font-bold text-white mb-6"
                variants={fadeInUpVariants}
              >
                How It Works
              </motion.h2>
              <motion.p 
                className="text-xl text-white/90 max-w-2xl mx-auto"
                variants={fadeInUpVariants}
              >
                Our proven process ensures you get the perfect style that suits your personality and lifestyle.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainerVariants}
            >
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUpVariants}
                  >
                    <Card className="relative group text-center bg-white/90 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 ease-out p-6 rounded-2xl overflow-hidden transform hover:scale-[1.02] hover:-translate-y-1 h-full flex flex-col">
                      {/* Card glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 via-purple-200/30 to-rose-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
                      
                      {/* Floating icon container */}
                      <CardHeader className="relative">
                        <div className="flex justify-center mb-4">
                          <div className="relative w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-3 transition-transform duration-300 ease-out">
                            <IconComponent className="h-10 w-10 text-white" />
                            {/* Icon glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300 ease-out -z-10"></div>
                          </div>
                        </div>
                        <CardTitle className="text-gray-900 text-xl font-bold">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow flex items-center">
                        <p className="text-gray-700 leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};