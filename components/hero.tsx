import Description from "./description";
import Iframe from "./iframe";

export default function Hero() {
  return (
    <section className="flex w-full flex-1 flex-col bg-[#e5e5e5] md:min-h-0 md:overflow-hidden">
      <div className="relative isolate min-h-[24rem] w-full flex-1 md:min-h-0">
        <Iframe />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/35 via-black/5 to-transparent"
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex w-full min-w-0 flex-col items-center px-5 pt-10 text-center sm:pt-14 md:pt-16 lg:pt-12">
          <h1 className="max-w-xs text-balance text-3xl font-semibold leading-tight tracking-tight text-[#171717] min-[480px]:max-w-sm sm:max-w-2xl sm:text-4xl md:max-w-5xl md:text-5xl lg:text-6xl">
            Interactive Pens for Ecommerce
          </h1>

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#555555] min-[480px]:max-w-sm sm:max-w-lg sm:text-base md:text-lg">
            Let customers explore every detail with real-time 3D, embedded
            directly into your website.
          </p>
        </div>
      </div>

      <div className="relative z-30 w-full shrink-0 border-t border-black/5 bg-white">
        <Description />
      </div>
    </section>
  );
}
