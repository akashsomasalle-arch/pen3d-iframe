"use client";

import Iframe from "../components/iframe";

import Description from "../components/description";

export default function Hero() {
  return (
    <section className="flex-1 min-h-0 w-full flex flex-col overflow-hidden">
      {/* Container for Iframe + Overlaid Hero Title */}

      <div className="relative flex-1 min-h-0 w-full">
        <Iframe />

        {/* Left & Vertically Centered Overlay */}

        <div className="pointer-events-none absolute inset-0 flex items-center justify-start px-6 md:px-16 lg:px-24 bg-gradient-to-r from-black/50 via-black/20 to-transparent">
          <div className="max-w-xl text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md">
              Integrate 3D Pens to your website
            </h1>

            <p className="mt-4 text-sm md:text-base text-gray-200 drop-shadow">
              Elevate your brand experience with interactive, real-time 3D
              models directly on your page.
            </p>
          </div>
        </div>
      </div>

      <div className="shrink-0 w-full">
        <Description />
      </div>
    </section>
  );
}
