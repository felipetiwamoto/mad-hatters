
import React from 'react';
import { BaseSection, BaseSectionProps } from '@/components/BaseSection';
import { getColorStyle, getTextColorStyle } from '@/utils/colorUtils';
import { Card, CardContent } from '@/components/ui/card';

export const OurServicesSection: React.FC<BaseSectionProps> = ({ color = '#473198' }) => {
  const services = [
    {
      title: "Criação de Sites e Sistemas Web",
      description: "Desenvolvemos sites modernos, rápidos e responsivos, focados em performance, usabilidade e crescimento do seu negócio."
    },
    {
      title: "Suporte, Manutenção e Otimização",
      description: "Corrigimos erros, melhoramos velocidade e mantemos seu site seguro, atualizado e com performance máxima."
    },
    {
      title: "Consultoria Estratégica e Mentoria Técnica",
      description: "Ajudamos você a tomar decisões certas em tecnologia, com orientação personalizada e foco em resultados."
    }
  ];

  return (
    <BaseSection color={color} className="py-20"  id="nossos-servicos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos serviços</h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Oferecemos soluções completas para sua presença digital: do desenvolvimento sob medida à otimização contínua e orientação estratégica para alcançar resultados reais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border border-border hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={getColorStyle(color)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="opacity-80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </BaseSection>
  );
};
