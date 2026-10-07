import * as React from 'react';
import { cn } from '@/lib/utils';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: 'display-xl' | 'display-lg' | 'display-md' | 'display-sm' | '3xl' | '2xl' | 'xl' | 'lg';
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Tag = 'h2', size, className, ...props }, ref) => {
    const sizeClasses = {
      'display-xl': 'text-display-xl',
      'display-lg': 'text-display-lg',
      'display-md': 'text-display-md',
      'display-sm': 'text-display-sm',
      '3xl': 'text-3xl',
      '2xl': 'text-2xl',
      xl: 'text-xl',
      lg: 'text-lg',
    };

    const defaultSizes: Record<HeadingLevel, keyof typeof sizeClasses> = {
      h1: 'display-lg',
      h2: 'display-md',
      h3: 'display-sm',
      h4: 'xl',
      h5: 'lg',
      h6: 'lg',
    };

    const appliedSize = size || defaultSizes[Tag];

    return (
      <Tag
        ref={ref}
        className={cn(
          'font-serif font-semibold text-primary-900 text-balance',
          sizeClasses[appliedSize],
          className
        )}
        {...props}
      />
    );
  }
);

Heading.displayName = 'Heading';
