import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { Star, Award, Users, Clock, Shield, Sparkles } from 'lucide-react';

export const FeatureDetail = () => {
  const features = [
    {
      icon: Star,
      title: "Expert Stylists",
      description: "Our certified professionals have years of experience in natural hair care and styling.",
      highlight: "5+ Years Experience"
    },
    {
      icon: Shield,
      title: "Hair Health First",
      description: "We prioritize the health of your hair with gentle techniques and quality products.",
      highlight: "Damage-Free Methods"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Every client receives customized care tailored to their unique hair type and goals.",
      highlight: "Individual Attention"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Convenient appointment times that work with your busy lifestyle.",
      highlight: "7 Days a Week"
    },
    {
      icon: Award,
      title: "Quality Products",
      description: "We use only premium, professional-grade products for the best results.",
      highlight: "Top Brands Only"
    },
    {
      icon: Sparkles,
      title: "Latest Techniques",
      description: "Stay current with the newest trends and styling methods in hair care.",
      highlight: "Modern Styles"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-900 mb-4">
            Why Choose Shavonne Styles?
          </h2>
          <p className="text-xl text-rose-700 max-w-3xl mx-auto">
            We're committed to providing exceptional hair care services that enhance your natural beauty 
            while maintaining the health and integrity of your hair.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImagePlaceholder
              title="Hair Styling"
              subtitle="Professional Showcase"
              className="rounded-lg shadow-lg"
              aspectRatio="landscape"
              variant="gallery"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-rose-900 mb-4">
              Professional Excellence in Every Service
            </h3>
            <p className="text-rose-700 mb-6">
              With over 5 years of experience and 500+ satisfied clients, we've built our reputation 
              on delivering exceptional results while prioritizing hair health and client satisfaction.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-rose-900">500+</div>
                <div className="text-rose-700">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-rose-900">4.9★</div>
                <div className="text-rose-700">Average Rating</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow border-rose-100">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-rose-600" />
                    </div>
                    <Badge variant="secondary" className="bg-rose-100 text-rose-700">
                      {feature.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="text-rose-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-rose-700">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};