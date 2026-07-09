import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Container({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8", className)} {...props}>{children}</div>;
}

export function Section({ spacing = "default", className, children, ...props }: { spacing?: "none" | "small" | "default" | "large" } & React.HTMLAttributes<HTMLElement>) {
  const paddingMap = {
    none: "py-0",
    small: "py-8",
    default: "py-16 md:py-24",
    large: "py-24 md:py-32",
  };
  return <section className={cn(paddingMap[spacing], className)} {...props}>{children}</section>;
}

export function Stack({ space = "4", className, children, ...props }: { space?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(`flex flex-col gap-${space}`, className)} {...props}>{children}</div>;
}

export function Spacer({ size = "4", className, ...props }: { size?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(`h-${size}`, className)} {...props} />;
}
