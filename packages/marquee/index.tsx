"use client";

import type { HTMLAttributes } from "react";
import type { MarqueeProps as FastMarqueeProps } from "react-fast-marquee";
import FastMarquee from "react-fast-marquee";
import { cn } from "@/lib/utils";

export type MarqueeProps = FastMarqueeProps & {
  fade?: boolean;
};

export const Marquee = ({
  className,
  fade = false,
  loop = 0,
  autoFill = true,
  pauseOnHover = true,
  ...props
}: MarqueeProps) => (
  <FastMarquee
    autoFill={autoFill}
    className={cn(fade && "mask-x-from-70% mask-x-to-100%", className)}
    loop={loop}
    pauseOnHover={pauseOnHover}
    {...props}
  />
);

export type MarqueeItemProps = HTMLAttributes<HTMLDivElement>;

export const MarqueeItem = ({ className, ...props }: MarqueeItemProps) => (
  <div className={cn("mx-2 flex-shrink-0 object-contain", className)} {...props} />
);
