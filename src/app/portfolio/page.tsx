"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { Navigation, Footer } from '@/components/ui/navigation';
import { Calendar, Heart, Eye, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Elegant Box Braids",
    category: "Protective Styles",
    description: "Beautiful long box braids with a natural finish, perfect for low-maintenance styling.",
    image: "/api/placeholder/400/500",
    duration: "6 hours",
    client: "Sarah M.",
    tags: ["Box Braids", "Protective", "Long-lasting"]
  },
  {
    id: 2,
    title: "Natural Twist Out",
    category: "Natural Hair Care",
    description: "Defined twist out on natural 4C hair with moisture-rich products for healthy shine.",
    image: "/api/placeholder/400/500",
    duration: "2 hours",
    client: "Maya J.",
    tags: ["Twist Out", "Natural", "4C Hair"]
  },
  {
    id: 3,
    title: "Goddess Locs",
    category: "Protective Styles",
    description: "Stunning goddess locs with curly ends, combining protection with glamorous style.",
    image: "/api/placeholder/400/500",
    duration: "8 hours",
    client: "Keisha R.",
    tags: ["Goddess Locs", "Curly", "Glamorous"]
  },
  {
    id: 4,
    title: "Bridal Updo",
    category: "Special Occasion",
    description: "Elegant bridal updo with natural hair, incorporating fresh flowers and accessories.",
    image: "/api/placeholder/400/500",
    duration: "3 hours",
    client: "Jasmine T.",
    tags: ["Bridal", "Updo", "Special Event"]
  },
  {
    id: 5,
    title: "Silk Press",
    category: "Hair Treatments",
    description: "Smooth silk press on natural hair with heat protection and nourishing treatments.",
    image: "/api/placeholder/400/500",
    duration: "4 hours",
    client: "Alicia W.",
    tags: ["Silk Press", "Smooth", "Heat Protection"]
  },
  {
    id: 6,
    title: "Cornrow Crown",
    category: "Protective Styles",
    description: "Intricate cornrow pattern creating a beautiful crown effect with geometric designs.",
    image: "/api/placeholder/400/500",
    duration: "4 hours",
    client: "Zara K.",
    tags: ["Cornrows", "Geometric", "Crown"]
  },
  {
    id: 7,
    title: "Wash & Go",
    category: "Natural Hair Care",
    description: "Perfect wash and go technique for 3C curls with definition and long-lasting hold.",
    image: "/api/placeholder/400/500",
    duration: "1.5 hours",
    client: "Nia P.",
    tags: ["Wash & Go", "3C Curls", "Definition"]
  },
  {
    id: 8,
    title: "Passion Twists",
    category: "Protective Styles",
    description: "Bohemian passion twists with a natural texture, perfect for versatile styling.",
    image: "/api/placeholder/400/500",
    duration: "7 hours",
    client: "Amara L.",
    tags: ["Passion Twists", "Bohemian", "Versatile"]
  },
  {
    id: 9,
    title: "Deep Conditioning Treatment",
    category: "Hair Treatments",
    description: "Intensive deep conditioning treatment for damaged hair with protein and moisture balance.",
    image: "/api/placeholder/400/500",
    duration: "2 hours",
    client: "Tiana S.",
    tags: ["Deep Conditioning", "Repair", "Moisture"]
  }
];

const categories = ["All", "Protective Styles", "Natural Hair Care", "Hair Treatments", "Special Occasion"];

export default function PortfolioPage() {
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
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-alex-brush font-bold mb-4 sm:mb-6 leading-tight ${
            theme === 'dark' ? 'text-pink-400' : 'text-rose-900'
          }`}>
            Our Portfolio
          </h1>
          <p className={`text-lg sm:text-xl mb-6 sm:mb-8 px-2 sm:px-0 leading-relaxed ${
            theme === 'dark' ? 'text-white' : 'text-white'
          }`}>
            Discover the artistry and skill behind every hairstyle. Each creation tells a unique story of beauty, confidence, and self-expression.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={`text-sm sm:text-base px-3 sm:px-4 py-2 ${category === "All" 
                  ? `${theme === 'dark' ? 'bg-pink-600 hover:bg-pink-700' : 'bg-rose-600 hover:bg-rose-700'} text-white`
                  : `${theme === 'dark' ? 'border-pink-500/80 text-pink-400 hover:bg-pink-600/10 hover:border-pink-400' : 'border-rose-600/80 text-rose-600 hover:bg-rose-50 hover:border-rose-700'} border-2`
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className={`group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                theme === 'dark' ? 'bg-white/90 border-white/30' : 'bg-white border-gray-200'
              }`}>
                <div className="relative overflow-hidden">
                  <ImagePlaceholder 
                    title="Portfolio Image"
                    subtitle={item.title}
                    variant="portfolio"
                    aspectRatio="portrait"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button className={`bg-white hover:bg-opacity-90 ${
                      theme === 'dark' ? 'text-pink-600' : 'text-rose-900'
                    }`}>
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                  <Badge className={`absolute top-4 left-4 text-white ${
                    theme === 'dark' ? 'bg-pink-600' : 'bg-rose-600'
                  }`}>
                    {item.category}
                  </Badge>
                </div>
                
                <CardContent className="p-4 sm:p-6">
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-rose-900'
                  }`}>{item.title}</h3>
                  <p className={`mb-3 sm:mb-4 text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-rose-700'
                  }`}>{item.description}</p>
                  
                  <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 text-xs sm:text-sm gap-2 sm:gap-0 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-rose-600'
                  }`}>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span>{item.client}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className={`text-xs px-2 py-1 ${
                        theme === 'dark' ? 'border-pink-500/30 text-pink-400' : 'border-rose-300 text-rose-700'
                      }`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button size="sm" className={`w-full text-white group text-sm sm:text-base ${
                    theme === 'dark' ? 'bg-pink-600 hover:bg-pink-700' : 'bg-rose-600 hover:bg-rose-700'
                  }`}>
                    Book Similar Style
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-rose-900'
          }`}>Portfolio Impact</h2>
          <p className={`mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0 ${
            theme === 'dark' ? 'text-gray-300' : 'text-rose-700'
          }`}>
            Every style tells a story. Here's the impact of our creative collaborations.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <div className={`text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 ${
                theme === 'dark' ? 'text-pink-400' : 'text-rose-900'
              }`}>500+</div>
              <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-rose-700'}`}>Happy Clients</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 ${
                theme === 'dark' ? 'text-pink-400' : 'text-rose-900'
              }`}>1000+</div>
              <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-rose-700'}`}>Styles Created</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 ${
                theme === 'dark' ? 'text-pink-400' : 'text-rose-900'
              }`}>5+</div>
              <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-rose-700'}`}>Years Experience</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 ${
                theme === 'dark' ? 'text-pink-400' : 'text-rose-900'
              }`}>98%</div>
              <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-rose-700'}`}>Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 sm:py-20 bg-gradient-to-r ${
        theme === 'dark' ? 'from-pink-600 to-purple-600' : 'from-rose-600 to-pink-600'
      }`}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Ready to Create Your Perfect Look?
          </h2>
          <p className={`text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 px-2 sm:px-0 leading-relaxed ${
            theme === 'dark' ? 'text-pink-100' : 'text-rose-100'
          }`}>
            Let's work together to bring your vision to life with a personalized styling experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button size="default" className={`w-full sm:w-auto bg-white hover:bg-opacity-90 text-sm sm:text-base px-6 sm:px-8 py-3 ${
              theme === 'dark' ? 'text-pink-600' : 'text-rose-600'
            }`}>
              Book Consultation
            </Button>
            <Button size="default" variant="outline" className={`w-full sm:w-auto border-white text-white hover:bg-white text-sm sm:text-base px-6 sm:px-8 py-3 ${
              theme === 'dark' ? 'hover:text-pink-600' : 'hover:text-rose-600'
            }`}>
              View Packages
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}