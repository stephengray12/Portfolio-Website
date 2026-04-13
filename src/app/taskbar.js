"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Taskbar() {
  const [open, setOpen] = useState(false);

  const items = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-black/80 backdrop-blur-md border-b border-white/10 text-white fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Stephen Gray
        </Link>

        {/* Mobile toggle */}
        <button onClick={() => setOpen((v) => !v)} className="md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {item.name}
            </Link>
          ))}

          {/* Resume button */}
          <a
            href="/Stephen_Gray_Resume.pdf"
            className="px-4 py-1 bg-blue-600 rounded hover:bg-blue-700 text-sm"
          >
            Resume
          </a>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-4 bg-black/90 p-4 rounded-lg">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <a href="/Stephen_Gray_Resume.pdf">Resume</a>
          </nav>
        </div>
      )}
    </header>
  );
}
