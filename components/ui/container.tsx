import * as React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'narrow' | 'content' | 'full';
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'content', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full mx-auto px-6 md:px-8 lg:px-12',
          {
            'max-w-4xl': size === 'narrow',
            'max-w-content': size === 'content',
            'max-w-none': size === 'full',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  padding?: 'default' | 'sm' | 'lg' | 'none';
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, padding = 'default', ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          {
            'py-16 md:py-24 lg:py-32': padding === 'default',
            'py-12 md:py-16 lg:py-20': padding === 'sm',
            'py-20 md:py-32 lg:py-40': padding === 'lg',
            'py-0': padding === 'none',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Section.displayName = 'Section';
