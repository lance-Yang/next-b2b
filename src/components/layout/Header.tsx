"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // return (
  //   <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  //     <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
  //       <div className="flex h-16 items-center justify-between">
  //         {/* Logo */}
  //         <div className="flex items-center">
  //           <Link href="/" className="flex items-center space-x-2">
  //             <span className="text-2xl font-bold text-primary">B2B</span>
  //             <span className="text-xl font-semibold">Solutions</span>
  //           </Link>
  //         </div>

  //         {/* Desktop Navigation */}
  //         <div className="hidden md:flex md:items-center md:space-x-8">
  //           {navigationItems.map((item) => (
  //             <Link
  //               key={item.name}
  //               href={item.href}
  //               className={cn(
  //                 "text-sm font-medium transition-colors hover:text-primary",
  //                 pathname === item.href
  //                   ? "text-primary"
  //                   : "text-muted-foreground"
  //               )}
  //             >
  //               {item.name}
  //             </Link>
  //           ))}
  //         </div>

  //         {/* CTA Button */}
  //         <div className="hidden md:flex md:items-center">
  //           <Link
  //             href="/get-started"
  //             className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
  //           >
  //             Get Started
  //           </Link>
  //         </div>

  //         {/* Mobile menu button */}
  //         <div className="flex md:hidden">
  //           <button
  //             type="button"
  //             className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
  //             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  //           >
  //             <span className="sr-only">Open main menu</span>
  //             {mobileMenuOpen ? (
  //               <X className="h-6 w-6" aria-hidden="true" />
  //             ) : (
  //               <Menu className="h-6 w-6" aria-hidden="true" />
  //             )}
  //           </button>
  //         </div>
  //       </div>

  //       {/* Mobile menu */}
  //       {mobileMenuOpen && (
  //         <div className="md:hidden">
  //           <div className="space-y-1 pb-3 pt-2">
  //             {navigationItems.map((item) => (
  //               <Link
  //                 key={item.name}
  //                 href={item.href}
  //                 className={cn(
  //                   "block px-3 py-2 text-base font-medium rounded-md transition-colors",
  //                   pathname === item.href
  //                     ? "bg-primary/10 text-primary"
  //                     : "text-muted-foreground hover:bg-gray-50 hover:text-gray-900"
  //                 )}
  //                 onClick={() => setMobileMenuOpen(false)}
  //               >
  //                 {item.name}
  //               </Link>
  //             ))}
  //             <Link
  //               href="/get-started"
  //               className="block w-full text-center rounded-md bg-primary px-3 py-2 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
  //               onClick={() => setMobileMenuOpen(false)}
  //             >
  //               Get Started
  //             </Link>
  //           </div>
  //         </div>
  //       )}
  //     </nav>
  //   </header>
  // )
  return (
    <header className="bg-white shadow-sm px-4 lg:px-4 md:px-4">
      <nav
        aria-label="Global"
        className="h-20 mx-auto max-w-7xl flex items-stretch justify-between"
      >
        <div className="flex items-center lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Logo</span>
            {/* <img
              alt="logo"
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/upload/img/${sectionData.basicSite.site_logo}`}
              className="h-12 w-auto"
            /> */}
          </Link>
        </div>

        {/* 客户端导航组件 */}
        {/* <NavBarClient sectionData={sectionData} /> */}
      </nav>
    </header>
  );
}
