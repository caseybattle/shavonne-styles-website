import { Eye, Camera, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImagePlaceholderProps {
  title: string;
  subtitle?: string;
  className?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
  variant?: 'portfolio' | 'hero' | 'gallery';
}

export function ImagePlaceholder({ 
  title, 
  subtitle, 
  className, 
  aspectRatio = 'portrait',
  variant = 'portfolio'
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[4/5]',
    landscape: 'aspect-[16/9]'
  };

  const variantStyles = {
    portfolio: 'bg-gradient-to-br from-rose-200 to-pink-300',
    hero: 'bg-gradient-to-br from-rose-100 to-pink-200',
    gallery: 'bg-gradient-to-br from-rose-150 to-pink-250'
  };

  const iconSize = {
    portfolio: 'h-12 w-12',
    hero: 'h-16 w-16',
    gallery: 'h-10 w-10'
  };

  return (
    <div className={cn(
      aspectClasses[aspectRatio],
      variantStyles[variant],
      'flex items-center justify-center relative overflow-hidden rounded-lg',
      className
    )}>
      <div className="text-center text-rose-700 p-4">
        <div className="flex justify-center mb-3">
          {variant === 'portfolio' && <Eye className={cn(iconSize[variant], 'opacity-60')} />}
          {variant === 'hero' && <Camera className={cn(iconSize[variant], 'opacity-60')} />}
          {variant === 'gallery' && <ImageIcon className={cn(iconSize[variant], 'opacity-60')} />}
        </div>
        <p className="text-sm font-medium mb-1">{title}</p>
        {subtitle && <p className="text-xs opacity-75">{subtitle}</p>}
      </div>
      

    </div>
  );
}