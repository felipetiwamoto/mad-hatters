
import React, { useState } from 'react';
import { useDragDrop } from './DragDropContext';
import { useColor } from '@/context/ColorContext';
import * as Sections from '@/components/sections';
import { Button } from '@/components/ui/button';
import { Edit, Minimize } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

type SectionComponents = {
  [key: string]: React.ComponentType<any>;
};

export const LivePreview: React.FC = () => {
  const { items } = useDragDrop();
  const { color } = useColor();
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Create a mapping of component names to their actual components
  const sectionComponents: SectionComponents = Sections as unknown as SectionComponents;

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  const previewClasses = isFullscreen ?
    "fixed inset-0 z-50 bg-background overflow-auto" :
    "flex flex-col w-full border rounded-md overflow-hidden bg-background";

  return (
    <div className={previewClasses}>
      <div className="bg-muted p-1 border-b flex justify-between items-center">
        <h3 className="font-medium">Live Preview</h3>
        <ThemeToggle />
        {/* <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleFullscreen}
          title={isFullscreen ? "Minimize preview" : "Fullscreen preview"}
        >
          {isFullscreen ? <Minimize size={18} /> : <Edit size={18} />}
        </Button> */}
      </div>
      <div className={isFullscreen ? "overflow-auto" : "overflow-auto max-h-[600px]"}>
        {items.length === 0 ? (
          <div className="flex items-center justify-center p-20 text-muted-foreground">
            <p>Add components to see the live preview</p>
          </div>
        ) : (
          <div>
            {items.map((item) => {
              const SectionComponent = sectionComponents[item.type];
              return SectionComponent ? (
                <div key={item.id}>
                  <SectionComponent color={color} />
                </div>
              ) : (
                <div key={item.id} className="p-4 text-red-500">
                  Component {item.type} not found
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
