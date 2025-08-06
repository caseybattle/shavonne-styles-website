import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeroButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const HeroButton = ({ children, onClick, className }: HeroButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-8 py-4 rounded-full",
        "bg-hero-button-bg/70 backdrop-blur-hero",
        "border border-hero-button-border/25",
        "shadow-glass",
        "text-hero-button-text text-sm font-rubik font-semibold leading-5",
        "transition-all duration-300 ease-out",
        "hover:bg-hero-button-bg/80 hover:border-hero-button-border/40",
        "hover:shadow-lg hover:scale-105",
        "active:scale-95",
        "focus:outline-none focus:ring-2 focus:ring-hero-button-border/50",
        className
      )}
    >
      {children}
    </button>
  );
};