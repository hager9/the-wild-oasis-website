// "use client";
// import Link from "next/link";
// import {
//   CalendarDaysIcon,
//   HomeIcon,
//   UserIcon,
// } from "@heroicons/react/24/solid";
// import SignOutButton from "@/app/_components/SignOutButton";
// import { usePathname } from "next/navigation";

// const navLinks = [
//   {
//     name: "Home",
//     href: "/account",
//     icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
//   },
//   {
//     name: "Reservations",
//     href: "/account/reservations",
//     icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
//   },
//   {
//     name: "Guest profile",
//     href: "/account/profile",
//     icon: <UserIcon className="h-5 w-5 text-primary-600" />,
//   },
// ];

// function SideNavigation() {
//   const pathName = usePathname();

//   return (
//     <nav className="border-r border-primary-900">
//       <ul className="flex flex-col gap-2 h-full text-lg">
//         {navLinks.map((link) => (
//           <li key={link.name}>
//             <Link
//               className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
//                 pathName === link.href ? "bg-primary-900" : ""
//               }`}
//               href={link.href}
//             >
//               {link.icon}
//               <span>{link.name}</span>
//             </Link>
//           </li>
//         ))}

//         <li className="mt-auto">
//           <SignOutButton />
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default SideNavigation;

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import {
//   CalendarDaysIcon,
//   HomeIcon,
//   UserIcon,
//   Bars3Icon,
// } from "@heroicons/react/24/solid";
// import SignOutButton from "./SignOutButton";
// import { usePathname } from "next/navigation";

// const navLinks = [
//   {
//     name: "Home",
//     href: "/account",
//     icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
//   },
//   {
//     name: "Reservations",
//     href: "/account/reservations",
//     icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
//   },
//   {
//     name: "Guest profile",
//     href: "/account/profile",
//     icon: <UserIcon className="h-5 w-5 text-primary-600" />,
//   },
// ];

// function SideNavigation() {
//   const [open, setOpen] = useState(false);
//   const pathName = usePathname();

//   return (
//     <>
//       {/* Mobile top menu button */}
//       <div className="md:hidden pb-4 border-b border-primary-800">
//         <button
//           onClick={() => setOpen((prev) => !prev)}
//           className="flex items-center gap-2 bg-primary-800 text-primary-100 px-4 py-2 rounded-md shadow-sm w-full"
//         >
//           <Bars3Icon className="h-5 w-5" />
//           <span>Menu</span>
//         </button>

//         {/* Collapsible nav menu */}
//         {open && (
//           <nav className="mt-4 bg-primary-950 rounded-md border border-primary-800">
//             <ul className="flex flex-col text-lg">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     onClick={() => setOpen(false)}
//                     className={`py-3 px-5 flex items-center gap-4 font-semibold text-primary-200 hover:bg-primary-900 hover:text-primary-100 transition-colors ${
//                       pathName === link.href ? "bg-primary-900" : ""
//                     }`}
//                   >
//                     {link.icon}
//                     <span>{link.name}</span>
//                   </Link>
//                 </li>
//               ))}

//               <li className="border-t border-primary-800">
//                 <SignOutButton />
//               </li>
//             </ul>
//           </nav>
//         )}
//       </div>

//       {/* Desktop sidebar */}
//       <nav className="hidden md:block border-r border-primary-900 h-full">
//         <ul className="flex flex-col gap-2 text-lg h-full">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <Link
//                 href={link.href}
//                 className={`py-3 px-5 flex items-center gap-4 font-semibold text-primary-200 hover:bg-primary-900 hover:text-primary-100 transition-colors ${
//                   pathName === link.href ? "bg-primary-900" : ""
//                 }`}
//               >
//                 {link.icon}
//                 <span>{link.name}</span>
//               </Link>
//             </li>
//           ))}

//           <li className="mt-auto">
//             <SignOutButton />
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default SideNavigation;

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <>
      {/* Mobile top menu button */}
      <div className="lg:hidden pb-4 border-b border-primary-800">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 bg-primary-800 text-primary-100 px-4 py-2 rounded-md shadow-sm w-full"
        >
          <Bars3Icon className="h-5 w-5" />
          <span>Menu</span>
        </button>

        {/* Collapsible nav menu */}
        {open && (
          <nav className="mt-4 bg-primary-950 rounded-md border border-primary-800">
            <ul className="flex flex-col text-lg">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`py-3 px-5 flex items-center gap-4 font-semibold text-primary-200 hover:bg-primary-900 hover:text-primary-100 transition-colors ${
                      pathName === link.href ? "bg-primary-900" : ""
                    }`}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}

              <li className="border-t border-primary-800">
                <SignOutButton />
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop sidebar */}
      <nav className="hidden lg:block border-r border-primary-900 h-full">
        <ul className="flex flex-col gap-2 text-lg h-full">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`py-3 px-5 flex items-center gap-4 font-semibold text-primary-200 hover:bg-primary-900 hover:text-primary-100 transition-colors ${
                  pathName === link.href ? "bg-primary-900" : ""
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}

          <li className="mt-auto">
            <SignOutButton />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideNavigation;
