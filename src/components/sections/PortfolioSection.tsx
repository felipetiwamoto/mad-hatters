
import React from 'react';
import { BaseSection, BaseSectionProps } from '@/components/BaseSection';
import { getColorStyle, getTextColorStyle } from '@/utils/colorUtils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import herdeiSistema from './../../../public/herdei-sistema.jpeg';
import herdeiLogo from './../../../public/herdei-logo.svg';

export const PortfolioSection: React.FC<BaseSectionProps> = ({ color = '#8cb964' }) => {
  const projects = [
    { title: "Herdei", category: "" },
  ];

  return (
    <BaseSection color={color} className="py-20"  id="nossos-clientes">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Clientes</h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Parceiros que confiam e crescem com a gente. Conheça quem faz parte da nossa história.
          </p>
        </div>
        
        <div className="flex mb-12 mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group border-none shadow-none w-[250px] mx-auto">
              <CardContent className="p-4">
                <img
                  src={herdeiLogo}
                  alt={project.title}
                  className="mx-auto h-[60px] max-w-none object-contain" />
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center hidden">
          <Button size="lg" style={getColorStyle(color)} className="text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </BaseSection>
  );
};
