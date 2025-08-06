"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { Navigation, Footer } from '@/components/ui/navigation';
import { Star, Quote, Calendar, Heart, Users, Award } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    service: "Box Braids",
    rating: 5,
    date: "2 weeks ago",
    review: "Shavonne is absolutely amazing! My box braids came out perfect and lasted for months. She's so professional and really listens to what you want. The salon is clean and comfortable, and I felt pampered the entire time. I've already booked my next appointment!",
    avatar: "SJ",
    verified: true
  },
  {
    id: 2,
    name: "Maya Thompson",
    service: "Natural Hair Care",
    rating: 5,
    date: "1 month ago",
    review: "I've been struggling with my natural hair for years, but Shavonne completely transformed my hair care routine. She taught me how to properly care for my 4C hair and the results are incredible. My hair is healthier and more manageable than ever!",
    avatar: "MT",
    verified: true
  },
  {
    id: 3,
    name: "Keisha Williams",
    service: "Goddess Locs",
    rating: 5,
    date: "3 weeks ago",
    review: "The goddess locs Shavonne created for me are absolutely stunning! I get compliments everywhere I go. She's an artist with hair and really knows how to bring your vision to life. Worth every penny and every hour spent in the chair.",
    avatar: "KW",
    verified: true
  },
  {
    id: 4,
    name: "Jasmine Davis",
    service: "Bridal Styling",
    rating: 5,
    date: "2 months ago",
    review: "Shavonne did my hair for my wedding day and it was absolutely perfect! She understood exactly what I wanted and executed it flawlessly. My hair looked amazing in all the photos and stayed perfect throughout the entire day. She made me feel like a queen!",
    avatar: "JD",
    verified: true
  },
  {
    id: 5,
    name: "Alicia Brown",
    service: "Silk Press",
    rating: 5,
    date: "1 week ago",
    review: "Best silk press I've ever had! My hair was so smooth and bouncy, and it lasted for weeks. Shavonne really knows how to work with natural hair and uses the best products. I'll definitely be coming back regularly.",
    avatar: "AB",
    verified: true
  },
  {
    id: 6,
    name: "Zara Mitchell",
    service: "Cornrows",
    rating: 5,
    date: "3 weeks ago",
    review: "The cornrow design Shavonne created was absolutely intricate and beautiful. She has such steady hands and an eye for detail. The style lasted for weeks and I received so many compliments. She's truly gifted!",
    avatar: "ZM",
    verified: true
  },
  {
    id: 7,
    name: "Nia Parker",
    service: "Wash & Go",
    rating: 5,
    date: "2 weeks ago",
    review: "Finally found someone who can do a proper wash and go on my 3C curls! Shavonne's technique is amazing and my curls have never looked better. She taught me how to maintain the style at home too. Highly recommend!",
    avatar: "NP",
    verified: true
  },
  {
    id: 8,
    name: "Amara Lewis",
    service: "Passion Twists",
    rating: 5,
    date: "1 month ago",
    review: "My passion twists are everything I wanted and more! Shavonne's attention to detail is incredible and she made sure I was comfortable throughout the entire process. The style is so versatile and I love how natural they look.",
    avatar: "AL",
    verified: true
  },
  {
    id: 9,
    name: "Tiana Scott",
    service: "Deep Conditioning",
    rating: 5,
    date: "2 weeks ago",
    review: "My hair was severely damaged from years of heat styling, but Shavonne's deep conditioning treatments have completely restored it. She created a personalized treatment plan and my hair is now stronger and healthier than it's been in years!",
    avatar: "TS",
    verified: true
  }
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Award, value: "98%", label: "Satisfaction Rate" },
  { icon: Heart, value: "1000+", label: "5-Star Reviews" }
];

export default function TestimonialsPage() {
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

      {/* Diamond sparkle background elements */}
      <div className="absolute top-[2%] left-[10%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '0s'}}></div>
      </div>
      
      <div className="absolute top-[5%] left-[25%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '0.3s'}}></div>
      </div>
      
      <div className="absolute top-[8%] left-[40%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '0.6s'}}></div>
      </div>
      
      <div className="absolute top-[3%] left-[55%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '0.9s'}}></div>
      </div>
      
      <div className="absolute top-[7%] left-[70%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '1.2s'}}></div>
      </div>
      
      <div className="absolute top-[4%] left-[85%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="absolute top-[12%] left-[15%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '1.8s'}}></div>
      </div>
      
      <div className="absolute top-[15%] left-[30%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '2.1s'}}></div>
      </div>
      
      <div className="absolute top-[10%] left-[45%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '2.4s'}}></div>
      </div>
      
      <div className="absolute top-[13%] left-[60%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '2.7s'}}></div>
      </div>
      
      <div className="absolute top-[9%] left-[75%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="absolute top-[16%] left-[90%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '3.3s'}}></div>
      </div>
      
      <div className="absolute top-[20%] left-[5%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '3.6s'}}></div>
      </div>
      
      <div className="absolute top-[18%] left-[20%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '3.9s'}}></div>
      </div>
      
      <div className="absolute top-[22%] left-[35%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '4.2s'}}></div>
      </div>
      
      <div className="absolute top-[19%] left-[50%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '4.5s'}}></div>
      </div>
      
      <div className="absolute top-[25%] left-[65%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '4.8s'}}></div>
      </div>
      
      <div className="absolute top-[21%] left-[80%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '5.1s'}}></div>
      </div>
      
      <div className="absolute top-[28%] left-[12%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '5.4s'}}></div>
      </div>
      
      <div className="absolute top-[30%] left-[27%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '5.7s'}}></div>
      </div>
      
      <div className="absolute top-[26%] left-[42%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '6s'}}></div>
      </div>
      
      <div className="absolute top-[32%] left-[57%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '6.3s'}}></div>
      </div>
      
      <div className="absolute top-[29%] left-[72%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '6.6s'}}></div>
      </div>
      
      <div className="absolute top-[35%] left-[87%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '6.9s'}}></div>
      </div>
      
      <div className="absolute top-[38%] left-[8%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '7.2s'}}></div>
      </div>
      
      <div className="absolute top-[36%] left-[23%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '7.5s'}}></div>
      </div>
      
      <div className="absolute top-[40%] left-[38%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '7.8s'}}></div>
      </div>
      
      <div className="absolute top-[37%] left-[53%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '8.1s'}}></div>
      </div>
      
      <div className="absolute top-[42%] left-[68%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '8.4s'}}></div>
      </div>
      
      <div className="absolute top-[39%] left-[83%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '8.7s'}}></div>
      </div>
      
      <div className="absolute top-[45%] left-[18%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '9s'}}></div>
      </div>
      
      <div className="absolute top-[48%] left-[33%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '9.3s'}}></div>
      </div>
      
      <div className="absolute top-[46%] left-[48%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '9.6s'}}></div>
      </div>
      
      <div className="absolute top-[50%] left-[63%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '9.9s'}}></div>
      </div>
      
      <div className="absolute top-[47%] left-[78%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '10.2s'}}></div>
      </div>
      
      <div className="absolute top-[52%] left-[93%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '10.5s'}}></div>
      </div>
      
      <div className="absolute top-[55%] left-[6%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '10.8s'}}></div>
      </div>
      
      <div className="absolute top-[53%] left-[21%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '11.1s'}}></div>
      </div>
      
      <div className="absolute top-[58%] left-[36%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '11.4s'}}></div>
      </div>
      
      <div className="absolute top-[56%] left-[51%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '11.7s'}}></div>
      </div>
      
      <div className="absolute top-[60%] left-[66%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '12s'}}></div>
      </div>
      
      <div className="absolute top-[57%] left-[81%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '12.3s'}}></div>
      </div>
      
      <div className="absolute top-[62%] left-[14%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '12.6s'}}></div>
      </div>
      
      <div className="absolute top-[65%] left-[29%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '12.9s'}}></div>
      </div>
      
      <div className="absolute top-[63%] left-[44%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '13.2s'}}></div>
      </div>
      
      <div className="absolute top-[68%] left-[59%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '13.5s'}}></div>
      </div>
      
      <div className="absolute top-[66%] left-[74%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '13.8s'}}></div>
      </div>
      
      <div className="absolute top-[70%] left-[89%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '14.1s'}}></div>
      </div>
      
      <div className="absolute top-[72%] left-[11%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '14.4s'}}></div>
      </div>
      
      <div className="absolute top-[75%] left-[26%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '14.7s'}}></div>
      </div>
      
      <div className="absolute top-[73%] left-[41%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '15s'}}></div>
      </div>
      
      <div className="absolute top-[78%] left-[56%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '15.3s'}}></div>
      </div>
      
      <div className="absolute top-[76%] left-[71%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '15.6s'}}></div>
      </div>
      
      <div className="absolute top-[80%] left-[86%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '15.9s'}}></div>
      </div>
      
      <div className="absolute top-[82%] left-[16%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '16.2s'}}></div>
      </div>
      
      <div className="absolute top-[85%] left-[31%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '16.5s'}}></div>
      </div>
      
      <div className="absolute top-[83%] left-[46%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '16.8s'}}></div>
      </div>
      
      <div className="absolute top-[88%] left-[61%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '17.1s'}}></div>
      </div>
      
      <div className="absolute top-[86%] left-[76%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '17.4s'}}></div>
      </div>
      
      <div className="absolute top-[90%] left-[91%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '17.7s'}}></div>
      </div>
      
      <div className="absolute top-[92%] left-[9%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '18s'}}></div>
      </div>
      
      <div className="absolute top-[95%] left-[24%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '18.3s'}}></div>
      </div>
      
      <div className="absolute top-[93%] left-[39%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '18.6s'}}></div>
      </div>
      
      <div className="absolute top-[98%] left-[54%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-glow" style={{animationDelay: '18.9s'}}></div>
      </div>
      
      <div className="absolute top-[96%] left-[69%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-twinkle" style={{animationDelay: '19.2s'}}></div>
      </div>
      
      <div className="absolute top-[99%] left-[84%] w-1 h-1">
        <div className="w-full h-full bg-white diamond-flash" style={{animationDelay: '19.5s'}}></div>
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
            Client Testimonials
          </h1>
          <p className="text-xl mb-8 text-white">
            Don't just take our word for it. Hear what our amazing clients have to say about their experience with Shavonne Styles.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className={`text-center shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 border-pink-400/60 hover:border-pink-400/80 hover:shadow-pink-400/20' 
                    : 'bg-white/90 border-pink-300/80 hover:border-pink-400 hover:shadow-pink-200/30'
                }`}>
                  <CardContent className="p-6">
                    <IconComponent className={`h-12 w-12 mx-auto mb-4 ${
                      theme === 'dark' ? 'text-pink-400' : 'text-pink-600'
                    }`} />
                    <div className={`text-3xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{stat.value}</div>
                    <div className={`font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className={`shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                theme === 'dark' 
                  ? 'bg-white/90 border-white/30' 
                  : 'bg-white/90 border-pink-200'
              }`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                        theme === 'dark' ? 'bg-pink-600 text-white' : 'bg-pink-500 text-white'
                      }`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs border-pink-300 text-pink-600">
                            {testimonial.service}
                          </Badge>
                          {testimonial.verified && (
                            <Badge className="text-xs bg-green-100 text-green-700 border-green-300">
                              Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <Quote className="h-6 w-6 text-pink-600" />
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-1 text-gray-600" />
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="leading-relaxed italic text-gray-700">
                    "{testimonial.review}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Review Summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">
            What Our Clients Love Most
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Heart className="h-12 w-12 mb-4 text-pink-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">Personalized Care</h3>
              <p className="text-gray-300">Every client receives individualized attention and customized hair care solutions.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 mb-4 text-pink-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">Expert Technique</h3>
              <p className="text-gray-300">Years of experience and continuous education ensure the highest quality results.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 mb-4 text-pink-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">Comfortable Environment</h3>
              <p className="text-gray-300">A welcoming, clean, and relaxing atmosphere where you can truly unwind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Shavonne Styles Difference?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Join hundreds of satisfied clients who trust us with their hair care needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 font-semibold px-8 py-3">
              Book Your Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600 font-semibold px-8 py-3">
              View Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Leave a Review Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Share Your Experience
          </h2>
          <p className="mb-8 text-gray-700">
            Had a great experience with Shavonne Styles? We'd love to hear from you!
          </p>
          <Button size="lg" className="bg-pink-600 text-white hover:bg-pink-700 font-semibold px-8 py-3">
            Leave a Review
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}