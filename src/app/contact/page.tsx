"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { Navigation, Footer } from '@/components/ui/navigation';
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ContactPage() {
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
            Get In Touch
          </h1>
          <p className="text-xl mb-8 text-white">
            Ready to transform your hair? Let's discuss your hair goals and book your appointment.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Quick Actions - Now at the top */}
          <div className="mb-12">
            <Card className={`shadow-xl max-w-2xl mx-auto ${
              theme === 'dark' 
                ? 'bg-white/90 border-white/30' 
                : 'bg-white/80 border-pink-300/50'
            }`}>
              <CardHeader>
                <CardTitle className={`text-2xl text-center ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Quick Actions</CardTitle>
                <CardDescription className={`text-center ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Get started with these popular options.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className={`w-full text-white justify-start ${
                  theme === 'dark' 
                    ? 'bg-pink-600 hover:bg-pink-700' 
                    : 'bg-pink-500 hover:bg-pink-600'
                }`}>
                  <Calendar className="mr-3 h-5 w-5" />
                  Book an Appointment
                </Button>
                
                <Button variant="outline" className={`w-full justify-start ${
                  theme === 'dark' 
                    ? 'border-pink-500 text-pink-400 hover:bg-pink-500/10' 
                    : 'border-pink-400 text-pink-600 hover:bg-pink-50'
                }`}>
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Schedule a Consultation
                </Button>
                
                <Button variant="outline" className={`w-full justify-start ${
                  theme === 'dark' 
                    ? 'border-pink-500 text-pink-400 hover:bg-pink-500/10' 
                    : 'border-pink-400 text-pink-600 hover:bg-pink-50'
                }`}>
                  <Phone className="mr-3 h-5 w-5" />
                  Call Now: 470-424-8584
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-start">
            {/* Contact Form */}
            <Card className={`shadow-xl h-full ${
              theme === 'dark' 
                ? 'bg-white/90 border-white/30' 
                : 'bg-white/80 border-pink-300/50'
            }`}>
              <CardHeader>
                <CardTitle className={`text-2xl ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Send us a Message</CardTitle>
                <CardDescription className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                      First Name
                    </Label>
                    <Input 
                      id="firstName" 
                      placeholder="Your first name" 
                      className={theme === 'dark' 
                        ? 'bg-gray-700 border-pink-500/30 focus:border-pink-500 text-white placeholder:text-gray-400' 
                        : 'bg-white border-pink-300/50 focus:border-pink-500 text-gray-900 placeholder:text-gray-500'
                      } 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                      Last Name
                    </Label>
                    <Input 
                      id="lastName" 
                      placeholder="Your last name" 
                      className={theme === 'dark' 
                        ? 'bg-gray-700 border-pink-500/30 focus:border-pink-500 text-white placeholder:text-gray-400' 
                        : 'bg-white border-pink-300/50 focus:border-pink-500 text-gray-900 placeholder:text-gray-500'
                      } 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                    Email
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className={theme === 'dark' 
                      ? 'bg-gray-700 border-pink-500/30 focus:border-pink-500 text-white placeholder:text-gray-400' 
                      : 'bg-white border-pink-300/50 focus:border-pink-500 text-gray-900 placeholder:text-gray-500'
                    } 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                    Phone Number
                  </Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(555) 123-4567" 
                    className={theme === 'dark' 
                      ? 'bg-gray-700 border-pink-500/30 focus:border-pink-500 text-white placeholder:text-gray-400' 
                      : 'bg-white border-pink-300/50 focus:border-pink-500 text-gray-900 placeholder:text-gray-500'
                    } 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service" className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                    Service Interest
                  </Label>
                  <select 
                    id="service" 
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ${
                      theme === 'dark' 
                        ? 'border-pink-500/30 bg-gray-700 text-white' 
                        : 'border-pink-300/50 bg-white text-gray-900'
                    }`}
                  >
                    <option value="">Select a service</option>
                    <option value="protective-styles">Protective Styles</option>
                    <option value="natural-hair-care">Natural Hair Care</option>
                    <option value="hair-treatments">Hair Treatments</option>
                    <option value="special-occasion">Special Occasion Styling</option>
                    <option value="consultation">Hair Consultation</option>
                    <option value="maintenance">Maintenance & Touch-ups</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                    Message
                  </Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your hair goals, preferred appointment times, or any questions you have..."
                    className={`min-h-[120px] ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-pink-500/30 focus:border-pink-500 text-white placeholder:text-gray-400' 
                        : 'bg-white border-pink-300/50 focus:border-pink-500 text-gray-900 placeholder:text-gray-500'
                    }`}
                  />
                </div>
                
                <Button className={`w-full text-white py-3 ${
                  theme === 'dark' 
                    ? 'bg-pink-600 hover:bg-pink-700' 
                    : 'bg-pink-500 hover:bg-pink-600'
                }`}>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information and FAQ */}
            <div className="space-y-8 h-full flex flex-col">
              {/* Contact Details */}
              <Card className={`shadow-xl flex-1 ${
                theme === 'dark' 
                  ? 'bg-white/90 border-white/30' 
                  : 'bg-white/80 border-pink-300/50'
              }`}>
                <CardHeader>
                  <CardTitle className={`text-2xl ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Contact Information</CardTitle>
                  <CardDescription className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    Reach out to us through any of these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className={`h-6 w-6 mt-1 flex-shrink-0 ${
                      theme === 'dark' ? 'text-pink-400' : 'text-pink-600'
                    }`} />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-700">
                        470-424-8584
                      </p>
                      <p className="text-sm text-pink-600">Call or text for quick questions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 mt-1 flex-shrink-0 text-pink-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-700">
                        Shavonnecstyles@gmail.com
                      </p>
                      <p className="text-sm text-pink-600">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 mt-1 flex-shrink-0 text-pink-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                       <p className="text-gray-700">
                         3064 Old Norcross Rd NW Suite 130<br />Duluth, GA 30096
                       </p>
                       <p className="text-sm text-pink-600">By appointment only</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 mt-1 flex-shrink-0 text-pink-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Hours</h3>
                      <div className="space-y-1 text-gray-700">
                        <p>Monday: Open</p>
                        <p>Tuesday: Open</p>
                        <p>Wednesday: Open</p>
                        <p>Thursday: 10:00am - Open</p>
                        <p>Friday: 11:00am - Open</p>
                        <p>Saturday: Open</p>
                        <p>Sunday: Open</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className={`shadow-xl flex-1 ${
                theme === 'dark' 
                  ? 'bg-white/90 border-white/30' 
                  : 'bg-white/50 border-pink-300/30'
              }`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Frequently Asked</CardTitle>
                  <CardDescription className="text-gray-700">
                    Quick answers to common questions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">How far in advance should I book?</h4>
                    <p className="text-sm text-gray-700">We recommend booking 1-2 weeks in advance, especially for weekend appointments.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Do you offer consultations?</h4>
                    <p className="text-sm text-gray-700">Yes! We offer 30-minute consultations for $30 to discuss your hair goals and create a care plan.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">What's your cancellation policy?</h4>
                    <p className="text-sm text-gray-700">Please give us 24 hours notice for cancellations to avoid a cancellation fee.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}