"use client";

import { Marquee, MarqueeItem } from "@repo/marquee";

const Example = () => (
  <div className="flex size-full items-center justify-center bg-background">
    <Marquee fade>
      {new Array(10).fill(null).map((_, index) => (
        <MarqueeItem className="-mx-2 h-16 w-16" key={index}>
          <img
            alt={`Placeholder ${index}`}
            className="overflow-hidden rounded-full ring-2 ring-background"
            src={`https://placehold.co/64x64?random=${index}`}
          />
        </MarqueeItem>
      ))}
    </Marquee>
  </div>
);

export default Example;
