
import React from 'react';
import { BaseSection, BaseSectionProps } from '@/components/BaseSection';
import { getColorStyle, getTextColorStyle, getGradientStyle } from '@/utils/colorUtils';
import { Button } from '@/components/ui/button';

export const CallToActionSection: React.FC<BaseSectionProps> = ({ color = '#8cb964' }) => {
  return (
    <BaseSection color={color} className="py-20" style={getColorStyle(color, 0.1)}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's turn your vision into reality. Our team of experts is ready to help you create a stunning website that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" style={getColorStyle(color)} className="bg-white text-foreground">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </BaseSection>
  );
};
