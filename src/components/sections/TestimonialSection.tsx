
import React from 'react';
import { BaseSection, BaseSectionProps } from '@/components/BaseSection';
import { getColorStyle, getTextColorStyle } from '@/utils/colorUtils';
import { Card, CardContent } from '@/components/ui/card';

export const TestimonialSection: React.FC<BaseSectionProps> = ({ color = '#8cb964' }) => {
  const testimonials = [
    {
      quote: "Working with this team was an absolute pleasure. They delivered a website that exceeded our expectations and has significantly improved our online presence.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc."
    },
  ];

  return (
    <BaseSection color={color} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6" style={getTextColorStyle(color)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.37 2c0 3.6-2.38 6.7-6 8.2v.9c4.3-.5 7.7 3.3 7.7 7.9v3h7.3V21c0-4.6-2-8.3-5.5-10.3 2.4-1.1 4-3.3 4-6.7H11.4V2z"></path>
                  </svg>
                </div>
                <p className="mb-6 flex-grow italic">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm opacity-70">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </BaseSection>
  );
};
