'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Navigation, Footer } from '@/components/ui/navigation';
import { CreditCard, Shield, Clock, CheckCircle, DollarSign, Calendar, Info } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const services = [
  { name: "Weaves & Extensions", price: 150, duration: "3-5 hours" },
  { name: "Protective Styles", price: 80, duration: "2-4 hours" },
  { name: "Kids Styles", price: 40, duration: "1-2 hours" },
  { name: "Natural Hair Care", price: 60, duration: "1-2 hours" },
  { name: "Relaxers & Chemical Services", price: 75, duration: "2-3 hours" },
  { name: "Special Occasion Styling", price: 100, duration: "2-3 hours" },
];

export default function PaymentPage() {
  const [selectedService, setSelectedService] = useState('');
  const [paymentType, setPaymentType] = useState('deposit'); // 'deposit' or 'full'
  const [appointmentDate, setAppointmentDate] = useState('');
  
  const selectedServiceData = services.find(s => s.name === selectedService);
  const depositAmount = selectedServiceData ? Math.round(selectedServiceData.price * 0.3) : 0;
  const fullAmount = selectedServiceData ? selectedServiceData.price : 0;
  const remainingAmount = fullAmount - depositAmount;

  return (
    <div className="min-h-screen bg-black">
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Secure Payment
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Complete your appointment booking with our secure payment system.
          </p>
        </div>
      </section>

      {/* Payment Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Selection & Payment Options */}
            <div className="space-y-6">
              {/* Service Selection */}
              <Card className="shadow-xl bg-white/90 border-white/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Calendar className="mr-3 h-6 w-6 text-pink-600" />
                    Select Your Service
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Choose the service you'd like to book and pay for.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-gray-900">Service</Label>
                    <select 
                      id="service" 
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white text-gray-900"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.name} value={service.name}>
                          {service.name} - Starting at ${service.price} ({service.duration})
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-white">Preferred Appointment Date</Label>
                    <Input 
                      id="date" 
                      type="date" 
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      className="border-gray-600 focus:border-pink-500 bg-gray-700 text-white" 
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Type Selection */}
              {selectedService && (
                <Card className="shadow-xl bg-white/90 border-white/30">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center">
                      <DollarSign className="mr-3 h-6 w-6 text-pink-600" />
                      Payment Options
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Choose how you'd like to pay for your appointment.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Deposit Option */}
                    <div 
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        paymentType === 'deposit' 
                          ? 'border-pink-500 bg-gray-700' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      onClick={() => setPaymentType('deposit')}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input 
                            type="radio" 
                            name="paymentType" 
                            value="deposit" 
                            checked={paymentType === 'deposit'}
                            onChange={() => setPaymentType('deposit')}
                            className="mr-3 text-pink-600"
                          />
                          <div>
                            <div className="font-semibold text-white">30% Deposit</div>
                            <div className="text-sm text-gray-300">Pay ${depositAmount} now, ${remainingAmount} at appointment</div>
                          </div>
                        </div>
                        <Badge className="bg-pink-600 text-white">Recommended</Badge>
                      </div>
                    </div>

                    {/* Full Payment Option */}
                    <div 
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        paymentType === 'full' 
                          ? 'border-pink-500 bg-gray-700' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      onClick={() => setPaymentType('full')}
                    >
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          name="paymentType" 
                          value="full" 
                          checked={paymentType === 'full'}
                          onChange={() => setPaymentType('full')}
                          className="mr-3 text-pink-600"
                        />
                        <div>
                          <div className="font-semibold text-white">Full Payment</div>
                          <div className="text-sm text-gray-300">Pay ${fullAmount} now, nothing at appointment</div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Info */}
                    <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-gray-300">
                          <p className="font-semibold mb-1 text-white">Payment Information:</p>
                          <ul className="space-y-1 text-xs">
                            <li>• Deposits secure your appointment slot</li>
                            <li>• Full payments receive a 5% discount</li>
                            <li>• All payments are secure and encrypted</li>
                            <li>• Cancellations require 24-hour notice</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Payment Form */}
            <div className="space-y-6">
              {selectedService && (
                <>
                  {/* Order Summary */}
                  <Card className="shadow-xl bg-white/90 border-white/30">
                    <CardHeader>
                      <CardTitle className="text-2xl text-gray-900">Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-300">
                        <span className="text-gray-600">Service:</span>
                        <span className="font-semibold text-gray-900">{selectedService}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-300">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold text-gray-900">{selectedServiceData?.duration}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-300">
                        <span className="text-gray-600">Total Service Cost:</span>
                        <span className="font-semibold text-gray-900">${fullAmount}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-300">
                        <span className="text-gray-600">Payment Type:</span>
                        <span className="font-semibold text-gray-900">
                          {paymentType === 'deposit' ? '30% Deposit' : 'Full Payment'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-3 bg-pink-600/20 px-4 rounded-lg border border-pink-600/30">
                        <span className="text-lg font-semibold text-gray-900">Amount Due Today:</span>
                        <span className="text-2xl font-bold text-pink-600">
                          ${paymentType === 'deposit' ? depositAmount : fullAmount}
                        </span>
                      </div>
                      {paymentType === 'deposit' && (
                        <div className="text-sm text-gray-400 text-center">
                          Remaining ${remainingAmount} due at appointment
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Payment Form */}
                  <Card className="shadow-xl bg-white/90 border-white/30">
                    <CardHeader>
                      <CardTitle className="text-2xl text-gray-900 flex items-center">
                        <CreditCard className="mr-3 h-6 w-6 text-pink-600" />
                        Payment Details
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        Enter your payment information securely.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber" className="text-gray-100">Card Number</Label>
                        <Input 
                          id="cardNumber" 
                          placeholder="1234 5678 9012 3456" 
                          className="bg-gray-800 border-gray-700 text-gray-100 focus:border-pink-500 focus:ring-pink-500" 
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry" className="text-gray-100">Expiry Date</Label>
                          <Input 
                            id="expiry" 
                            placeholder="MM/YY" 
                            className="bg-gray-800 border-gray-700 text-gray-100 focus:border-pink-500 focus:ring-pink-500" 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv" className="text-gray-100">CVV</Label>
                          <Input 
                            id="cvv" 
                            placeholder="123" 
                            className="bg-gray-800 border-gray-700 text-gray-100 focus:border-pink-500 focus:ring-pink-500" 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cardName" className="text-gray-100">Cardholder Name</Label>
                        <Input 
                          id="cardName" 
                          placeholder="John Doe" 
                          className="bg-gray-800 border-gray-700 text-gray-100 focus:border-pink-500 focus:ring-pink-500" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-100">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="john@example.com" 
                          className="bg-gray-800 border-gray-700 text-gray-100 focus:border-pink-500 focus:ring-pink-500" 
                        />
                      </div>

                      {/* Security Notice */}
                      <div className="flex items-center space-x-2 text-sm text-gray-300 bg-gray-800 p-3 rounded-lg border border-gray-700">
                        <Shield className="h-4 w-4 text-pink-400" />
                        <span>Your payment information is encrypted and secure</span>
                      </div>
                      
                      <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg">
                        <CreditCard className="mr-2 h-5 w-5" />
                        Complete Payment - ${paymentType === 'deposit' ? depositAmount : fullAmount}
                      </Button>
                      
                      <p className="text-xs text-gray-400 text-center">
                        By completing this payment, you agree to our terms of service and cancellation policy.
                      </p>
                    </CardContent>
                  </Card>
                </>
              )}

              {!selectedService && (
                <Card className="shadow-xl bg-white/90 border-white/30">
                  <CardContent className="py-12 text-center">
                    <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Select a Service to Continue
                    </h3>
                    <p className="text-gray-600">
                      Please choose a service from the options above to proceed with payment.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}