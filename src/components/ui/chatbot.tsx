'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { MessageCircle, Send, X, Bot, User, Mail, Phone, UserIcon, Minimize2 } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

const predefinedResponses = {
  greeting: [
    "Hi there! I'm here to help you with any questions about Shavonne Styles. What would you like to know?",
    "Hello! Welcome to Shavonne Styles. How can I assist you today?",
    "Hey! Thanks for reaching out. What can I help you with?"
  ],
  services: [
    "Shavonne specializes in natural hair care, protective styles, silk presses, and custom color treatments. Would you like to know more about any specific service?",
    "We offer a wide range of services including braids, locs, silk presses, and hair treatments. What type of service are you interested in?"
  ],
  booking: [
    "To book an appointment, you can call us at 470-424-8584 or visit our contact page. We'll get back to you within 24 hours!",
    "I'd love to help you schedule an appointment! Please call 470-424-8584 or send us a message through our contact form."
  ],
  location: [
    "We're located at 3064 Old Norcross Rd NW Suite 130, Duluth, GA 30096. Easy to find with plenty of parking!",
    "You can find us in Duluth, GA at 3064 Old Norcross Rd NW Suite 130. We're in Suite 130!"
  ],
  hours: [
    "Our hours vary by appointment. Please call 470-424-8584 to check availability and schedule your visit!",
    "We work by appointment to give you our full attention. Call us at 470-424-8584 to find a time that works for you!"
  ],
  pricing: [
    "Pricing varies depending on the service and your hair's needs. For accurate pricing, please call 470-424-8584 or book a consultation!",
    "Each service is customized to your hair, so pricing varies. I recommend calling 470-424-8584 for a personalized quote!"
  ],
  default: [
    "That's a great question! For the most accurate information, please call us at 470-424-8584 or email Shavonnecstyles@gmail.com.",
    "I want to make sure you get the best answer! Please reach out directly at 470-424-8584 or Shavonnecstyles@gmail.com.",
    "Let me connect you with Shavonne directly for the best help. Call 470-424-8584 or email Shavonnecstyles@gmail.com!"
  ]
};

function getBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)];
  }
  
  if (message.includes('service') || message.includes('hair') || message.includes('style')) {
    return predefinedResponses.services[Math.floor(Math.random() * predefinedResponses.services.length)];
  }
  
  if (message.includes('book') || message.includes('appointment') || message.includes('schedule')) {
    return predefinedResponses.booking[Math.floor(Math.random() * predefinedResponses.booking.length)];
  }
  
  if (message.includes('location') || message.includes('address') || message.includes('where')) {
    return predefinedResponses.location[Math.floor(Math.random() * predefinedResponses.location.length)];
  }
  
  if (message.includes('hours') || message.includes('open') || message.includes('time')) {
    return predefinedResponses.hours[Math.floor(Math.random() * predefinedResponses.hours.length)];
  }
  
  if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
    return predefinedResponses.pricing[Math.floor(Math.random() * predefinedResponses.pricing.length)];
  }
  
  return predefinedResponses.default[Math.floor(Math.random() * predefinedResponses.default.length)];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showContactForm, setShowContactForm] = useState(true);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({ name: '', email: '', phone: '' });
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! Welcome to Shavonne Styles! I\'m here to help answer questions about our services. How can I assist you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const handleContactSubmit = () => {
    if (contactInfo.name && contactInfo.email) {
      setShowContactForm(false);
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: `Thanks ${contactInfo.name}! I have your contact information. How can I help you today?`,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, welcomeMessage]);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isSending) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const messageToSend = inputValue;
    setInputValue('');
    setIsTyping(true);
    setIsSending(true);

    try {
      // Send message via API
       const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactInfo.name,
          email: contactInfo.email,
          phone: contactInfo.phone,
          message: messageToSend,
          subject: 'Chatbot Inquiry from Website'
        }),
      });

      if (response.ok) {
        // Show bot response
        setTimeout(() => {
          const botResponse: Message = {
            id: (Date.now() + 1).toString(),
            text: getBotResponse(messageToSend) + " Your message has also been sent to Shavonne directly!",
            sender: 'bot',
            timestamp: new Date()
          };
          
          setMessages(prev => [...prev, botResponse]);
          setIsTyping(false);
          setIsSending(false);
        }, 1000 + Math.random() * 1000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Show bot response even if email fails
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(messageToSend),
          sender: 'bot',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
        setIsSending(false);
      }, 1000 + Math.random() * 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        </Button>
      </motion.div>

      {/* Chat Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md h-[600px] p-0 gap-0 overflow-hidden">
          <DialogHeader className="p-4 pb-2 border-b bg-gradient-to-r from-pink-500 to-purple-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-white text-pink-600 text-sm font-semibold">
                    SS
                  </AvatarFallback>
                </Avatar>
                <div>
                  <DialogTitle className="text-white text-lg font-semibold">
                    Shavonne Styles Assistant
                  </DialogTitle>
                  <p className="text-pink-100 text-xs">
                    {isTyping ? 'Typing...' : 'Online'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="h-8 w-8 text-white hover:bg-white/20"
                >
                  <Minimize2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </DialogHeader>

          <AnimatePresence>
            {!isMinimized && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col flex-1"
              >
                {/* Contact Form */}
                {showContactForm && (
                  <div className="p-4 border-b bg-gray-50 dark:bg-gray-900">
                    <h3 className="text-sm font-semibold mb-3 text-gray-900 dark:text-gray-100">
                      Let's get started! Please share your contact information:
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="name" className="text-xs text-gray-600 dark:text-gray-400">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          value={contactInfo.name}
                          onChange={(e) => setContactInfo(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Your name"
                          className="h-8 text-sm"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-xs text-gray-600 dark:text-gray-400">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={contactInfo.email}
                          onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="your.email@example.com"
                          className="h-8 text-sm"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-xs text-gray-600 dark:text-gray-400">
                          Phone (optional)
                        </Label>
                        <Input
                          id="phone"
                          value={contactInfo.phone}
                          onChange={(e) => setContactInfo(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="(555) 123-4567"
                          className="h-8 text-sm"
                        />
                      </div>
                      <Button
                        onClick={handleContactSubmit}
                        disabled={!contactInfo.name || !contactInfo.email}
                        className="w-full h-8 text-sm bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                      >
                        Start Chatting
                      </Button>
                    </div>
                  </div>
                )}

                {/* Messages Area */}
                <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-3 py-2 ${
                            message.sender === 'user'
                              ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-pink-100' : 'text-gray-500 dark:text-gray-400'
                          }`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                    
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </ScrollArea>

                {/* Input Area */}
                {!showContactForm && (
                  <div className="p-4 border-t bg-gray-50 dark:bg-gray-900">
                    <div className="flex space-x-2">
                      <Input
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1"
                        disabled={isTyping || isSending}
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isTyping || isSending}
                        className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                        size="icon"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                      {isSending ? 'Sending your message...' : 'Your messages are sent directly to Shavonne'}
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
}