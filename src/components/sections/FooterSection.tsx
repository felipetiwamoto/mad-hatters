
import React from 'react';
import { BaseSection, BaseSectionProps } from '@/components/BaseSection';
import { getColorStyle, getTextColorStyle } from '@/utils/colorUtils';
import logo from "./../../../public/we_offer_transparent.png"

export const FooterSection: React.FC<BaseSectionProps> = ({ color = '#8cb964' }) => {
  return (
    <section
      className='w-full py-12 md:py-10 py-16 bg-slate-100 dark:bg-slate-900'
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div></div>
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:opacity-80">Início</a></li>
              <li><a href="#nossos-servicos" className="hover:opacity-80">Nossos serviços</a></li>
              <li><a href="#sobre-nos" className="hover:opacity-80">Sobre nós</a></li>
              <li><a href="#nossos-clientes" className="hover:opacity-80">Nossos clientes</a></li>
            </ul>
          </div>
          <div className="hidden">
            <h3 className="font-bold text-lg mb-4 ">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:opacity-80">Page Builder</a></li>
              <li><a href="#" className="hover:opacity-80">CMS</a></li>
              <li><a href="#" className="hover:opacity-80">E-commerce</a></li>
              <li><a href="#" className="hover:opacity-80">Analytics</a></li>
              <li><a href="#" className="hover:opacity-80">Hosting</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Nossos contatos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:opacity-80">Telefone: (11) 98491-2267</a></li>
              <li><a href="#" className="hover:opacity-80">E-mail: cainagnr@hotmail.com</a></li>
            </ul>
          </div>
          <div className='hidden'>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-l-md px-4 py-2 w-full outline-none border border-border focus:border-primary"
              />
              <button
                className="rounded-r-md px-4 py-2 text-white"
                style={getColorStyle(color)}
              >
                Subscribe
              </button>
            </div>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="hidden border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src={logo} alt="We offer logo" className='h-[20px]' />
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 YourCompany. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li><a href="#" className="hover:opacity-80">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-80">Terms of Service</a></li>
              <li><a href="#" className="hover:opacity-80">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
