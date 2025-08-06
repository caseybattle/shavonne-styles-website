"use client"

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

// Add custom diamond sparkle animation styles
const sparkleStyles = `
  @keyframes diamondSparkle {
    0% {
      opacity: 0;
      transform: rotate(45deg) scale(0.3);
      filter: brightness(0.5);
    }
    25% {
      opacity: 0.8;
      transform: rotate(45deg) scale(0.6);
      filter: brightness(1.5);
    }
    50% {
      opacity: 1;
      transform: rotate(45deg) scale(0.4);
      filter: brightness(2);
    }
    75% {
      opacity: 0.6;
      transform: rotate(45deg) scale(0.8);
      filter: brightness(1.2);
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) scale(0.3);
      filter: brightness(0.5);
    }
  }
  
  @keyframes diamondTwinkle {
    0%, 100% {
      opacity: 0;
      transform: rotate(0deg) scale(0);
    }
    50% {
      opacity: 1;
      transform: rotate(180deg) scale(1);
    }
  }
`

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

const SparklingBackground: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = []
      const sparkleCount = 80 // Number of sparkles

      for (let i = 0; i < sparkleCount; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1, // Much smaller sparkles
          delay: Math.random() * 8, // Delay between 0-8s
          duration: Math.random() * 4 + 3, // Duration between 3-7s
        })
      }
      setSparkles(newSparkles)
    }

    generateSparkles()
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <>
      {/* Inject custom styles */}
      <style dangerouslySetInnerHTML={{ __html: sparkleStyles }} />
      
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* Base background */}
      <div 
        className={`absolute inset-0 transition-colors duration-500 ${
          isDark ? 'bg-black' : 'bg-white'
        }`}
      />
      
      {/* Navigation line extension */}
      <div 
        className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-32 ${
          isDark ? 'bg-gradient-to-b from-white/50 to-transparent' : 'bg-gradient-to-b from-gray-800/50 to-transparent'
        }`}
        style={{
          background: isDark 
            ? 'linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)'
            : 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
        }}
      />
      
      {/* Diamond Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size * 2}px`,
            height: `${sparkle.size * 2}px`,
            animationDelay: `${sparkle.delay}s`,
            animation: `diamondSparkle ${sparkle.duration}s ease-in-out infinite`,
          }}
        >
          {/* Diamond core */}
          <div
            className={`absolute inset-0 transform rotate-45 ${
              isDark ? 'bg-white' : 'bg-gray-800'
            }`}
            style={{
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%) rotate(45deg)',
              boxShadow: `0 0 ${sparkle.size * 4}px ${isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'}`,
            }}
          />
          {/* Horizontal sparkle line */}
          <div
            className={`absolute ${
              isDark ? 'bg-white' : 'bg-gray-800'
            }`}
            style={{
              width: `${sparkle.size * 3}px`,
              height: '1px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: `0 0 ${sparkle.size * 2}px ${isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)'}`,
              animation: `diamondTwinkle ${sparkle.duration * 0.7}s ease-in-out infinite`,
              animationDelay: `${sparkle.delay + 0.5}s`,
            }}
          />
          {/* Vertical sparkle line */}
          <div
            className={`absolute ${
              isDark ? 'bg-white' : 'bg-gray-800'
            }`}
            style={{
              width: '1px',
              height: `${sparkle.size * 3}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: `0 0 ${sparkle.size * 2}px ${isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)'}`,
              animation: `diamondTwinkle ${sparkle.duration * 0.7}s ease-in-out infinite`,
              animationDelay: `${sparkle.delay + 0.3}s`,
            }}
          />
        </div>
      ))}
      
      {/* Additional twinkling effect - All diamond sparkles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => {
          // All dots now use diamond-style sparkles with varied sizes and timings
          const size = Math.random() * 1.2 + 0.3; // Smaller, more subtle sparkles
          const delay = Math.random() * 8;
          const duration = Math.random() * 4 + 3;
          
          return (
            <div
              key={`diamond-twinkle-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size * 2}px`,
                height: `${size * 2}px`,
                animationDelay: `${delay}s`,
                animation: `diamondSparkle ${duration}s ease-in-out infinite`,
              }}
            >
              {/* Diamond core */}
              <div
                className={`absolute inset-0 transform rotate-45 ${
                  isDark ? 'bg-white' : 'bg-gray-800'
                }`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%) rotate(45deg)',
                  boxShadow: `0 0 ${size * 4}px ${isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)'}`,
                }}
              />
              {/* Horizontal sparkle line */}
              <div
                className={`absolute ${
                  isDark ? 'bg-white' : 'bg-gray-800'
                }`}
                style={{
                  width: `${size * 3}px`,
                  height: '1px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: `0 0 ${size * 2}px ${isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'}`,
                  animation: `diamondTwinkle ${duration * 0.7}s ease-in-out infinite`,
                  animationDelay: `${delay + 0.5}s`,
                }}
              />
              {/* Vertical sparkle line */}
              <div
                className={`absolute ${
                  isDark ? 'bg-white' : 'bg-gray-800'
                }`}
                style={{
                  width: '1px',
                  height: `${size * 3}px`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: `0 0 ${size * 2}px ${isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'}`,
                  animation: `diamondTwinkle ${duration * 0.7}s ease-in-out infinite`,
                  animationDelay: `${delay + 0.3}s`,
                }}
              />
            </div>
          );
        })}
      </div>
      
      {/* Gradient overlay for depth */}
      <div 
        className={`absolute inset-0 opacity-30 ${
          isDark 
            ? 'bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20'
            : 'bg-gradient-to-br from-purple-100/30 via-transparent to-blue-100/30'
        }`}
      />    </div>
    </>
  )
}

export default SparklingBackground