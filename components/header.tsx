import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="flex h-16 w-full shrink-0 justify-center border-b border-gray-300 text-xl">
      <div className="flex w-full max-w-5xl items-center justify-between px-5 py-3">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 font-semibold"
        >
          <Image src="/penguin-logo.webp" width={25} height={25} alt="PEN3D" />
          <span>PEN3D</span>
        </Link>

        <a
          href="https://calendly.com/akashsomasalle/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white shadow-lg transition duration-200 ease-out hover:scale-105 hover:bg-[#282828] hover:shadow-xl active:scale-95"
        >
          Book a call
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </nav>
  );
}
