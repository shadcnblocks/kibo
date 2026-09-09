"use client";

import { Marquee, MarqueeItem } from "@repo/marquee";

const Example = () => (
  <div className="flex size-full items-center justify-center bg-background">
    <Marquee fade>
      {new Array(10).fill(null).map((_, index) => (
        <MarqueeItem className="h-32 w-32" key={index}>
          <img
            alt={`Placeholder ${index}`}
            className="overflow-hidden rounded-full"
            src={`https://placehold.co/128x128?random=${index}`}
          />
        </MarqueeItem>
      ))}
    </Marquee>
  </div>
);

export default Example;
