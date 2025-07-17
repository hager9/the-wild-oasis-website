import Link from "next/link";
import { auth } from "../_lib/auth";
import MobileNav from "./MobileNav";

export default async function Navigation() {
  const session = await auth();

  return (
    <div className="flex items-center gap-4 z-10 ">
      {/* Desktop navigation */}
      <nav className="hidden md:block text-lg">
        <ul className="flex gap-12 items-center">
          <li>
            <Link
              href="/cabins"
              className="hover:text-accent-400 transition-colors"
            >
              Cabins
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-accent-400 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            {session?.user?.image ? (
              <Link href="/account">
                <img
                  className="h-8 rounded-full"
                  src={session.user.image}
                  alt={session.user.name}
                  referrerPolicy="no-referrer"
                />
              </Link>
            ) : (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors"
              >
                Guest area
              </Link>
            )}
          </li>
        </ul>
      </nav>

      {/* Mobile navigation */}
      <MobileNav session={session} />
    </div>
  );
}
