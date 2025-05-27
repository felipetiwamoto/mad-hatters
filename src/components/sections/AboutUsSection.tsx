
import React from 'react';
import { BaseSection, BaseSectionProps } from '@/components/BaseSection';
import { getColorStyle, getTextColorStyle, getBorderColorStyle } from '@/utils/colorUtils';
import aboutUsImage from './../../../public/about_us_image.svg';

export const AboutUsSection: React.FC<BaseSectionProps> = ({ color = '#8cb964' }) => {
  return (
    <BaseSection color={color} className="py-20" id="sobre-nos">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 hidden md:block">
            <div className="rounded-lg overflow-hidden">
              <div className="rounded-lg flex items-center justify-center h-[400px] ml-auto mr-[50px]">
                <img src={aboutUsImage} alt="Sobre nós" className="object-contain w-full h-full rounded-2xl" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre nós</h2>
            <div className="w-20 h-1 mb-6" style={getColorStyle(color)}></div>
            <p className="mb-6">
              A We offer nasceu com o propósito de oferecer soluções tecnológicas e também transformar ideias em experiências digitais que geram valor real para pessoas e negócios.
            </p>
            <p className="mb-6">
              Unimos estratégia, design e tecnologia para entregar projetos únicos, com foco em performance, inovação e resultados duradouros.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8 hidden">
              <div className="flex flex-col">
                <span className="text-3xl font-bold" style={getTextColorStyle(color)}>250+</span>
                <span className="text-sm opacity-70">Clients Worldwide</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold" style={getTextColorStyle(color)}>15+</span>
                <span className="text-sm opacity-70">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold" style={getTextColorStyle(color)}>500+</span>
                <span className="text-sm opacity-70">Projects Completed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold" style={getTextColorStyle(color)}>24/7</span>
                <span className="text-sm opacity-70">Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  );
};
