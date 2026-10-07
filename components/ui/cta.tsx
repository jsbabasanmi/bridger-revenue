import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTAProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  className?: string;
}

export function CTA({
  href,
  children,
  variant = 'primary',
  size = 'md',
  showArrow = true,
  className,
}: CTAProps) {
  return (
    <Button variant={variant} size={size} className={className}>
      <Link href={href} className="flex items-center gap-2 group">
        {children}
        {showArrow && (
          <ArrowRight
            className={cn(
              'transition-transform group-hover:translate-x-1',
              size === 'sm' && 'w-4 h-4',
              size === 'md' && 'w-5 h-5',
              size === 'lg' && 'w-6 h-6'
            )}
          />
        )}
      </Link>
    </Button>
  );
}
