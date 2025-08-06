'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { Check, Star, Sparkles, Clock, Calendar } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUpVariants, staggerContainerVariants, viewportConfig } from '@/hooks/useAnimations';

export const Pricing = () => {

  const services = [
    {
      title: "Weaves & Extensions",
      description: "Professional weave installations, sew-ins, and extension services for length, volume, and versatility.",
      price: "Starting at $150",
      duration: "3-5 hours",
      popular: true,
      features: [
        "Consultation included",
        "Premium hair extensions",
        "Professional installation",
        "Styling & finishing",
        "Aftercare instructions"
      ]
    },
    {
      title: "Protective Styles",
      description: "Beautiful braids, twists, and updos that protect your natural hair while keeping you stylish.",
      price: "Starting at $80",
      duration: "2-4 hours",
      popular: true,
      features: [
        "Hair health assessment",
        "Custom style design",
        "Gentle techniques",
        "Long-lasting results",
        "Maintenance tips"
      ]
    },
    {
      title: "Kids Styles",
      description: "Gentle, age-appropriate styling for children. Fun, protective styles that are comfortable and easy to maintain.",
      price: "Starting at $40",
      duration: "1-2 hours",
      popular: true,
      features: [
        "Child-friendly environment",
        "Gentle products",
        "Quick styling",
        "Fun designs",
        "Parent consultation"
      ]
    },
    {
      title: "Natural Hair Care",
      description: "Deep conditioning treatments, trims, and styling for healthy, vibrant natural hair.",
      price: "Starting at $60",
      duration: "1-2 hours",
      popular: false,
      features: [
        "Deep conditioning",
        "Precision trimming",
        "Natural styling",
        "Product recommendations",
        "Home care routine"
      ]
    },
    {
      title: "Relaxers & Chemical Services",
      description: "Professional relaxer applications and chemical treatments with proper care and conditioning.",
      price: "Starting at $75",
      duration: "2-3 hours",
      popular: false,
      features: [
        "Strand test included",
        "Professional products",
        "Scalp protection",
        "Deep conditioning",
        "Follow-up care"
      ]
    },
    {
      title: "Special Occasion Styling",
      description: "Elegant updos and styles perfect for weddings, proms, and special events.",
      price: "Starting at $100",
      duration: "2-3 hours",
      popular: true,
      features: [
        "Style consultation",
        "Trial run available",
        "Event-day service",
        "Long-lasting hold",
        "Touch-up included"
      ]
    }
  ];

  return (
    <motion.section 
      id="services" 
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
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-pink-500/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-300/20 to-pink-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>
          
          <div className="relative z-10">
            <motion.div className="text-center mb-16" variants={fadeInUpVariants}>
              <motion.h2 
                className="text-4xl md:text-5xl font-alex-brush font-bold text-white mb-6"
                variants={fadeInUpVariants}
              >
                Our Services & Pricing
              </motion.h2>
              <motion.p 
                className="text-xl text-white/90 max-w-2xl mx-auto"
                variants={fadeInUpVariants}
              >
                From protective styles to hair treatments, we offer comprehensive hair care services tailored to your needs.
              </motion.p>
            </motion.div>
        
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
              variants={staggerContainerVariants}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpVariants}
                >
                  <Card className="relative group overflow-visible bg-white/60 backdrop-blur-lg border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl transform hover:scale-105 hover:-translate-y-2 p-0 h-[54rem] flex flex-col pb-6">
                    {/* Card glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-pink-400/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-pink-600 text-white z-10">
                  <Star className="w-3 h-3 mr-1" />
                  Popular
                </Badge>
              )}
              
              <div className="relative h-[36rem] overflow-hidden rounded-2xl">
                {service.title === "Weaves & Extensions" ? (
                  <div className="relative w-full h-full group/image">
                    {/* 3D Card Effect Container */}
                    <div className="relative w-full h-full transform-gpu transition-all duration-500 hover:scale-[1.02] perspective-1000">
                      {/* Main Image */}
                      <div className="relative w-full h-full transform-gpu transition-all duration-500 hover:rotateX-2 hover:rotateY-1 shadow-2xl hover:shadow-3xl">
                        <Image 
                          src="/images/IMG_5761_edited_edited.avif"
                          alt="Professional weave and extension services"
                          fill
                          className="object-cover object-top rounded-2xl"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          quality={95}
                          priority
                        />
                        {/* 3D Fold Effect */}
                        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white/20 to-transparent transform-gpu transition-all duration-500 hover:rotateX-12 origin-top rounded-t-2xl"></div>
                        {/* Enhanced Shadow */}
                        <div className="absolute -bottom-4 -left-2 -right-2 h-4 bg-black/20 blur-lg transform-gpu transition-all duration-500 hover:blur-xl hover:bg-black/30"></div>
                      </div>
                    </div>
                  </div>
                ) : service.title === "Kids Styles" ? (
                  <Image 
                    src="/images/IMG_E3370_JPG.avif"
                    alt="Kids hair styling services"
                    fill
                    className="object-cover object-top rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={95}
                  />
                ) : service.title === "Protective Styles" ? (
                  <Image 
                    src="/images/download (5).png"
                    alt="Protective styles showcase"
                    fill
                    className="object-cover object-top rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
                    priority
                    unoptimized={false}
                  />
                ) : service.title === "Natural Hair Care" ? (
                  <Image 
                    src="/images/download (4).png"
                    alt="Natural hair care services"
                    fill
                    className="object-cover object-top rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
                    priority
                    unoptimized={false}
                  />
                ) : service.title === "Relaxers & Chemical Services" ? (
                  <Image 
                    src="/images/download (4).webp"
                    alt="Professional relaxer and chemical services"
                    fill
                    className="object-cover object-top rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
                    priority
                    unoptimized={false}
                  />
                ) : service.title === "Special Occasion Styling" ? (
                  <Image 
                    src="/images/IMG_4517_JPG.avif"
                    alt="Special occasion styling services"
                    fill
                    className="object-cover object-top rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
                    priority
                    unoptimized={false}
                  />
                ) : (
                  <ImagePlaceholder 
                    title={service.title}
                    subtitle="Service Image"
                    className="w-full h-full"
                    aspectRatio="landscape"
                    variant="portfolio"
                  />
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-700">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <div className="flex items-center text-sm text-gray-700">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 mr-2 text-pink-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
        
            <motion.div 
              className="text-center mt-12"
              variants={fadeInUpVariants}
            >
              <p className="text-white/90 mb-4">
                All services include a consultation and aftercare instructions. Prices may vary based on hair length and complexity.
              </p>
              <Button 
                size="lg" 
                className="bg-pink-600 hover:bg-pink-700 text-white"
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Calendar className="w-4 h-4 mr-2" />
                View All Services Above
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};