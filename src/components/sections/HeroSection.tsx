
import React from 'react';
import { BaseSection, BaseSectionProps } from '@/components/BaseSection';
import { getColorStyle, getTextColorStyle, getGradientStyle } from '@/utils/colorUtils';
import { Button } from '@/components/ui/button';

export const HeroSection: React.FC<BaseSectionProps> = ({ color = '#473198' }) => {
  return (
    <BaseSection color={color} className="py-20 md:py-32"  id="inicio" style={getGradientStyle(color, 0.05, 0.1)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
              Sua presença digital do jeito certo
            </h1>
            <p className="text-lg mb-8 opacity-80 text-center">
              Na <strong>We offer</strong>, o seu projeto ganha vida com inovação, <br />
              velocidade e design inteligente.
            </p>
            {/* <div className="flex flex-col sm:flex-row justify-center gap-4 text-center">
              <Button size="lg" style={getColorStyle(color)} className="text-white">
                Solicite seu orçamento agora
              </Button>
              <Button size="lg" variant="outline">
                Saiba mais
              </Button>
            </div> */}
          </div>
          {/* <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
            <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
              <span className="text-slate-400">Hero Image</span>
            </div>
          </div> */}
        </div>
      </div>
    </BaseSection>
  );
};
