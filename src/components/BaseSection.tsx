
import React from 'react';
import { cn } from '@/lib/utils';
import { ColorProps, getColorStyle, getTextColorStyle, getBorderColorStyle } from '@/utils/colorUtils';

export type BaseSectionProps = ColorProps & {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
};

export const BaseSection: React.FC<BaseSectionProps> = ({ 
  color = '#8cb964', 
  className, 
  children,
  id,
  style
}) => {
  return (
    <section 
      id={id}
      className={cn('w-full py-12 md:py-20', className)}
      style={style}
    >
      {children}
    </section>
  );
};
