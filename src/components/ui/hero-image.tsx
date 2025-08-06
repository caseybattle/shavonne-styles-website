'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function HeroImage({ src, alt, className, priority = false }: HeroImageProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

export function ProfileImage({ src, alt, className }: HeroImageProps) {
  return (
    <div className={cn("relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}