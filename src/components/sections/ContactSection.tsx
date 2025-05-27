
import React from 'react';
import { BaseSection, BaseSectionProps } from '@/components/BaseSection';
import { getColorStyle, getTextColorStyle } from '@/utils/colorUtils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import contactIllustration from './../../../public/contact_illustration.svg';

export const ContactSection: React.FC<BaseSectionProps> = ({ color = '#8cb964' }) => {
  return (
    <BaseSection color={color} className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className='hidden md:block'>
            <div className="rounded-lg overflow-hidden">
              <div className="rounded-lg flex items-center justify-center h-[400px] ml-auto mr-[50px]">
                <img src={contactIllustration} alt="Sobre nós" className="object-contain w-full h-full rounded-2xl" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Entre em contato</h2>
            <div className="w-20 h-1 mb-6" style={getColorStyle(color)}></div>
            <p className="text-lg mb-8 opacity-80">
              Tem alguma dúvida, sugestão ou quer iniciar um projeto com a gente? Estamos prontos para ouvir você. Preencha o formulário abaixo ou escolha o canal de sua preferência — será um prazer conversar com você!
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={getColorStyle(color)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Telefone</h3>
                  <p className="opacity-80">(11) 98491-2267</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={getColorStyle(color)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">E-mail</h3>
                  <p className="opacity-80">cainagnr@hotmail.com</p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </BaseSection>
  );
};









// import React from 'react';
// import { BaseSection, BaseSectionProps } from '@/components/BaseSection';
// import { getColorStyle, getTextColorStyle } from '@/utils/colorUtils';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Card, CardContent } from '@/components/ui/card';
// import aboutUsImage from './../../../public/about_us_image.jpeg';
// import contactIllustration from './../../../public/contact_illustration.svg';

// export const ContactSection: React.FC<BaseSectionProps> = ({ color = '#8cb964' }) => {
//   return (
//     <BaseSection color={color} className="py-20">
//       <div className="container mx-auto px-4 text-right">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">Entre em contato</h2>
//             <div className="w-20 h-1 mb-6 ml-auto" style={getColorStyle(color)}></div>
//             <p className="text-lg mb-8 opacity-80">
//               Tem alguma dúvida, sugestão ou quer iniciar um projeto com a gente? Estamos prontos para ouvir você. Preencha o formulário abaixo ou escolha o canal de sua preferência — será um prazer conversar com você!
//             </p>

//             <div className="space-y-6">
//               <div className="flex items-start justify-end">
//                 <div>
//                   <h3 className="font-bold mb-1">Telefone</h3>
//                   <p className="opacity-80">(11) 98491-2267</p>
//                 </div>
//                 <div className="w-12 h-12 rounded-full flex items-center justify-center ml-4" style={getColorStyle(color)}>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
//                   </svg>
//                 </div>
//               </div>

//               <div className="flex items-start justify-end">
//                 <div>
//                   <h3 className="font-bold mb-1">E-mail</h3>
//                   <p className="opacity-80">cainagnr@hotmail.com</p>
//                 </div>
//                 <div className="w-12 h-12 rounded-full flex items-center justify-center ml-4" style={getColorStyle(color)}>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
//                     <polyline points="22,6 12,13 2,6"></polyline>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className='hidden md:block'>
//             <div className="rounded-lg overflow-hidden">
//               <div className="rounded-lg flex items-center justify-center h-[400px] ml-auto mr-[50px]">
//                 <img src={contactIllustration} alt="Sobre nós" className="object-contain w-full h-full rounded-2xl" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </BaseSection>
//   );
// };
