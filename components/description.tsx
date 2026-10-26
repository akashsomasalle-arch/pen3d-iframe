import { Fragment } from "react";
import {
  Eye,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Mail,
} from "lucide-react";
import { FaLinkedin  } from "react-icons/fa";

const items = [
  {
    icon: Eye,
    title: "HIGHER ENGAGEMENT",
    description: "Keep customers on your page longer",
  },
  {
    icon: ShieldCheck,
    title: "BUILDS CONFIDENCE",
    description: "Let them see the real quality",
  },
  {
    icon: TrendingUp,
    title: "INCREASES CONVERSIONS",
    description: "Fewer doubts, more purchases",
  },
  {
    icon: Sparkles,
    title: "PREMIUM BRAND EXPERIENCE",
    description: "Modern. Interactive. Unforgettable.",
  },
];

export default function Description() {
  return (
    <div className="relative flex w-full flex-col items-center border-b border-gray-300">
      {/* Keep the four feature sections centered */}
      <ul className="grid w-full min-w-0 max-w-5xl grid-cols-2 items-center gap-4 px-5 py-4 md:flex md:justify-between">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <Fragment key={item.title}>
              <li className="flex min-w-0 items-center gap-3 md:w-auto md:shrink-0">
                <Icon
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-[#d4af37]"
                />
                <div className="min-w-0 md:min-w-fit">
                  <p className="text-[11px] font-semibold leading-tight tracking-wide text-black md:text-xs md:tracking-wider md:whitespace-nowrap">
                    {item.title}
                  </p>
                  <p className="text-xs leading-snug text-gray-500 md:whitespace-nowrap">
                    {item.description}
                  </p>
                </div>
              </li>

              {index < items.length - 1 && (
                <li
                  aria-hidden="true"
                  className="hidden h-8 w-px shrink-0 bg-gray-300 md:block"
                />
              )}
            </Fragment>
          );
        })}
      </ul>

      {/* Social icons pinned to the right */}
      <div className="flex w-full items-center justify-end gap-3 px-5 pb-3 md:absolute md:right-6 md:top-1/2 md:w-auto md:-translate-y-1/2 md:p-0">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=akashsomasalle@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact via Gmail"
          className="group relative inline-flex text-[#000] hover:text-[#555]"
        >
          <Mail className="h-5 w-5" />
          <span className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-10 -translate-x-1/2 rounded-[2px] bg-[#e8e8e8] px-2 py-1 font-sans text-[11px] leading-[1.2] tracking-[0.01em] whitespace-nowrap text-[#555] opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
            Gmail
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/akash-n-somasalle-908485415"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
          className="group relative inline-flex text-[#000] hover:text-[#555]"
        >
          <FaLinkedin className="h-5 w-5" />
          <span className="pointer-events-none absolute bottom-[calc(100%+10px)] right-0 z-10 rounded-[2px] bg-[#e8e8e8] px-2 py-1 font-sans text-[11px] leading-[1.2] tracking-[0.01em] whitespace-nowrap text-[#555] opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
            LinkedIn
          </span>
        </a>
      </div>
    </div>
  );
}