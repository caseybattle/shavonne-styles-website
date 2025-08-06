'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariants, staggerContainerVariants, viewportConfig } from '@/hooks/useAnimations';

export const Footer = () => {

  return (
    <motion.footer 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black flex items-center"
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
        <motion.div 
          className="relative bg-gradient-to-br from-pink-400 to-pink-500 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 shadow-pink-300/50 p-8 md:p-12 overflow-hidden" 
          style={{boxShadow: '0 25px 50px -12px rgba(236, 72, 153, 0.25), 0 0 20px rgba(236, 72, 153, 0.4)'}}
          variants={fadeInUpVariants}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 via-gray-500/10 to-slate-600/10 animate-pulse"></div>
          
          {/* Floating orbs for decoration */}
          <div className="absolute top-5 right-5 w-24 h-24 bg-gradient-to-br from-slate-400/20 to-gray-400/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-5 left-5 w-20 h-20 bg-gradient-to-br from-gray-400/20 to-slate-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          
          <div className="relative z-10">
            <motion.div 
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              variants={fadeInUpVariants}
            >
              <div className="text-white text-sm font-medium">
                © 2024 Shavonne Styles. All rights reserved.
              </div>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-white/80 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};