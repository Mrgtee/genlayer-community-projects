import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-neutral-200 bg-[#ffffff]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        <div className="text-lg font-semibold tracking-tight">
          GenLayer
        </div>

        <nav className="hidden gap-8 text-sm text-neutral-700 md:flex">
          <Link href="#">Home</Link>
          <Link href="#">How it Works</Link>
          <Link href="#">Build</Link>
          <Link href="#">Ecosystem</Link>
          <Link href="#">Resources</Link>
          <Link href="#">About</Link>
        </nav>

        <button className="border border-black px-4 py-2 text-sm font-medium hover:bg-black hover:text-white">
          Try the Studio
        </button>

      </div>
    </header>
  );
}