
import React from 'react';
import { BaseSection, BaseSectionProps } from '@/components/BaseSection';
import { getTextColorStyle, getBorderColorStyle } from '@/utils/colorUtils';
import { Button } from '@/components/ui/button';
import logo from "./../../../public/we_offer_transparent.png"

export const NavbarSection: React.FC<BaseSectionProps> = ({ color = '#8cb964' }) => {
  return (
    <section className='w-full py-12 md:py-10 py-4'>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="We offer logo" className='h-[35px]' />
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="font-medium hover:opacity-80">Início</a>
          <a href="#nossos-servicos" className="font-medium hover:opacity-80">Nossos serviços</a>
          <a href="#sobre-nos" className="font-medium hover:opacity-80">Sobre nós</a>
          <a href="#nossos-clientes" className="font-medium hover:opacity-80">Nossos clientes</a>
        </nav>
        
        <div className="hidden md:block">
          {/* <Button variant="outline" className="border" style={getBorderColorStyle(color)}>
            Get Started
          </Button> */}
        </div>
        
        <div className="hidden">
          <Button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};
