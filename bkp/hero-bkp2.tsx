"use client";

import Iframe from "../components/iframe";
import Description from "../components/description";

export default function Hero() {
  return (
    <section className="flex-1 min-h-0 w-full flex flex-col overflow-hidden">
      {/* Container for Iframe + Overlaid Hero Title */}
      <div className="relative flex-1 min-h-0 w-full">
        <Iframe />

        {/* Text Overlay */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-start pt-12 md:pt-20 text-center px-4 bg-gradient-to-b from-black/40 via-transparent to-transparent">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md">
            Integrate 3D Pens to your website
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-200 max-w-xl drop-shadow">
            Elevate your brand experience with interactive, real-time 3D models directly on your page.
          </p>
        </div>
      </div>

      <div className="shrink-0 w-full">
        <Description />
      </div>
    </section>
  );
}