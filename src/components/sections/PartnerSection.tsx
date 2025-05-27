
import React from 'react';
import { BaseSection, BaseSectionProps } from '@/components/BaseSection';
import { getColorStyle, getTextColorStyle } from '@/utils/colorUtils';

export const PartnerSection: React.FC<BaseSectionProps> = ({ color = '#8cb964' }) => {
  const partners = Array(8).fill('Partner Logo');

  return (
    <BaseSection color={color} className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Trusted Partners</h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            We collaborate with leading companies across various industries to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-6 bg-card rounded-lg">
              <div className="text-center opacity-60 hover:opacity-100 transition-opacity">
                <div className="h-12 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">{partner}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseSection>
  );
};
