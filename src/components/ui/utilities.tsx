import React from "react";
import Image, { ImageProps } from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ImageWrapper({ className, imageClassName, alt, ...props }: { imageClassName?: string } & ImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image alt={alt || "Image"} className={cn("object-cover", imageClassName)} {...props} />
    </div>
  );
}

export function Reveal({ delay = 0, duration = 0.5, direction = "up", className, children, ...props }: { delay?: number, duration?: number, direction?: "up" | "down" | "left" | "right", className?: string, children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  // A simple reveal fallback without framer-motion since we don't know if it's installed.
  return <div className={cn("transition-all", className)} {...props}>{children}</div>;
}
