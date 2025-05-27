
import React from 'react';
import { useColor } from '@/context/ColorContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const ColorPicker: React.FC = () => {
  const { color, setColor } = useColor();

  return (
    <div className="flex flex-col gap-2 p-4 border rounded-md bg-card">
      <Label htmlFor="color-input">Theme Color</Label>
      <div className="flex items-center gap-3">
        <div
          className="h-8 w-8 rounded-md border"
          style={{ backgroundColor: color }}
        />
        <Input
          id="color-input"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#8cb964"
          className="w-32"
        />
        <Input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-12 h-8 p-0 cursor-pointer"
        />
      </div>
      <p className="text-xs text-muted-foreground mt-1">This color will be applied to all components</p>
    </div>
  );
};
