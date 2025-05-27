
import React from 'react';
import { useDragDrop } from './DragDropContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';

const componentCategories = [
  {
    name: 'navbar',
    title: 'Navbar',
    components: Array.from({ length: 7 }, (_, i) => `NavbarSection${String(i + 1).padStart(2, '0')}`),
  },
  {
    name: 'hero',
    title: 'Hero',
    components: Array.from({ length: 7 }, (_, i) => `HeroSection${String(i + 1).padStart(2, '0')}`),
  },
  {
    name: 'footer',
    title: 'Footer',
    components: Array.from({ length: 7 }, (_, i) => `FooterSection${String(i + 1).padStart(2, '0')}`),
  },
  {
    name: 'our_services',
    title: 'OurServices',
    components: Array.from({ length: 7 }, (_, i) => `OurServicesSection${String(i + 1).padStart(2, '0')}`),
  },
  {
    name: 'about_us',
    title: 'AboutUs',
    components: Array.from({ length: 7 }, (_, i) => `AboutUsSection${String(i + 1).padStart(2, '0')}`),
  },
  {
    name: 'call_to_action',
    title: 'CallToAction',
    components: Array.from({ length: 7 }, (_, i) => `CallToActionSection${String(i + 1).padStart(2, '0')}`),
  },
  {
    name: 'testimonial',
    title: 'Testimonial',
    components: Array.from({ length: 7 }, (_, i) => `TestimonialSection${String(i + 1).padStart(2, '0')}`),
  },
  {
    name: 'contact',
    title: 'Contact',
    components: Array.from({ length: 7 }, (_, i) => `ContactSection${String(i + 1).padStart(2, '0')}`),
  },
  {
    name: 'partner',
    title: 'Partner',
    components: Array.from({ length: 7 }, (_, i) => `PartnerSection${String(i + 1).padStart(2, '0')}`),
  },
];

export const ComponentList: React.FC = () => {
  const { addItem } = useDragDrop();

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>Components</CardTitle>
          <CardDescription>Drag or click to add components to your page</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="navbar">
            <TabsList className={`flex flex-wrap mb-4 h-[initial]`}>
              {componentCategories.map(category => (
                <TabsTrigger key={category.name} value={category.name}>{category.title}</TabsTrigger>
              ))}
            </TabsList>

            {componentCategories.map(category => (
              <TabsContent key={category.name} value={category.name} className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {category.components.map(componentName => (
                    <Button
                      key={componentName}
                      variant="outline"
                      className="h-20 flex flex-col justify-center items-center gap-2 text-sm hover:border-primary"
                      onClick={() => addItem(componentName)}
                    >
                      <Plus size={16} />
                      <span>{componentName}</span>
                    </Button>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
