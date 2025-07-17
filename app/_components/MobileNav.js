"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileNav({ session }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const firstName = session?.user?.name.split(" ").at(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="relative md:hidden">
      <button
        className="text-primary-100 z-20"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <nav className="absolute top-12 right-0 bg-primary-900 text-primary-100 w-48 py-4 px-6 rounded shadow-md z-10">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                className="hover:text-accent-400"
                href="/cabins"
                onClick={() => setIsOpen(false)}
              >
                Cabins
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent-400"
                href="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link href="/account" onClick={() => setIsOpen(false)}>
                {session?.user?.image ? (
                  <div className="flex justify-between items-center">
                    <span>{firstName}</span>

                    <img
                      className="h-8 rounded-full"
                      src={session.user.image}
                      alt={session.user.name}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  "Guest area"
                )}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
