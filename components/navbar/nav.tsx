// "use client";
// import Link from "next/link";

// import {Menu, Pen, X} from "lucide-react";
// import {Button} from "@/components/ui/button";
// import React from "react";
// import {cn} from "@/lib/utils";
// import {useScroll} from "motion/react";
// import {AnimatedThemeToggler} from "../ui/animated-theme-toggler";
// import {SearchBox} from "./searchbox";
// import {Inter} from "next/font/google";
// import {usePathname} from "next/navigation";
// import {sans} from "@/lib/fonts";

// const menuItems = [
//   {name: "Projects", href: "/projects"},
//   {name: "Blogs", href: "/blogs"},
//   {name: "My Story", href: "/my-story"},
// ];

// export const Navbar = () => {
//   const [menuState, setMenuState] = React.useState(false);
//   const [scrolled, setScrolled] = React.useState(false);
//   const pathname = usePathname();
//   const {scrollYProgress} = useScroll();

//   React.useEffect(() => {
//     const unsubscribe = scrollYProgress.on("change", (latest) => {
//       setScrolled(latest > 0.05);
//     });
//     return () => unsubscribe();
//   }, [scrollYProgress]);

//   return (
//     <header>
//       <nav
//         data-state={menuState && "active"}
//         className={cn(
//           "fixed inset-x-0 top-0 z-20 transition-colors duration-150 pl-3.5 pr-4 md:pl-0 md:pr-0 md:mx-0",
//           scrolled && "bg-background/40 backdrop-blur-3xl",
//         )}
//       >
        
//         <div className="mx-auto w-full md:max-w-2xl transition-all duration-300">
//           <div className="relative flex items-center justify-between gap-3 py-3 lg:py-4">
//             <div className="flex w-full items-center gap-4.5 md:gap-12 lg:w-auto">
//               <Link
//                 href="/"
//                 aria-label="home"
//                 className="flex items-center space-x-2 grayscale-0 md:grayscale-50"
//               >
//                 ᨒ
//               </Link>

//               {/* <button
//                 onClick={() => setMenuState(!menuState)}
//                 aria-label={menuState == true ? "Close Menu" : "Open Menu"}
//                 className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
//               >
//                 <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
//                 <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
//               </button> */}

//               <div className="">
//                 <ul className="flex gap-3 md:gap-8 text-sm">
//                   {/* {menuItems.map((item, index) => (
//                     <li key={index}>
//                       <Link
//                         href={item.href}
//                         className={cn(
//                           `text-muted-foreground hover:text-accent-foreground block duration-150 ${sans.className}`,
//                         )}
//                       >
//                         <span>{item.name}</span>
//                       </Link>
//                     </li>
//                   ))} */}
//                   {menuItems.map((item, index) => {
//                     const isActive = pathname === item.href;

//                     return (
//                       <li key={index} className="relative">
//                         <Link
//                           href={item.href}
//                           className={cn(
//                             "relative block text-sm transition-colors duration-150",
//                             sans.className,
//                             isActive
//                               ? "text-foreground"
//                               : "text-muted-foreground hover:text-accent-foreground",
//                           )}
//                         >
//                           <span>{item.name}</span>

//                           {/* underline */}
//                           <span
//                             className={cn(
//                               "absolute left-0 -bottom-0.5 h-[0.5px] w-full origin-left scale-x-0 bg-foreground transition-transform duration-300",
//                               isActive && "scale-x-100",
//                             )}
//                           />
//                         </Link>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </div>
//             </div>

//             <div
//               className="flex items-center justify-end gap-2 sm:gap-3 w-fit"
//             >
//               {/* <div className="lg:hidden">
//                 <ul className="space-y-6 text-base">
//                   {menuItems.map((item, index) => (
//                     <li key={index}>
//                       <Link
//                         href={item.href}
//                         className="text-muted-foreground hover:text-accent-foreground block duration-150"
//                       >
//                         <span>{item.name}</span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div> */}
//               <div className="flex w-full flex-row gap-2 sm:gap-3 md:w-fit">
//                 <SearchBox />
//                 <AnimatedThemeToggler />
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };


"use client";

import Link from "next/link";
import React from "react";
import {cn} from "@/lib/utils";
import {useScroll} from "motion/react";
import {usePathname} from "next/navigation";
import {AnimatedThemeToggler} from "../ui/animated-theme-toggler";
import {SearchBox} from "./searchbox";
import {sans} from "@/lib/fonts";

const menuItems = [
  {name: "Projects", href: "/projects"},
  {name: "Blogs", href: "/blogs"},
  {name: "My Story", href: "/my-story"},
];

export const Navbar = () => {
  const pathname = usePathname();
  const {scrollYProgress} = useScroll();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <header>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-200 ",
          scrolled && "bg-background/40 backdrop-blur-3xl"
        )}
      >
        {/* FULL-WIDTH SHELL (IMPORTANT) */}
        <div className="w-full px-3.5 md:px-0">
          {/* CENTERED CONTENT COLUMN */}
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center justify-between gap-3 py-3 lg:py-4">
              {/* LEFT SIDE */}
              <div className="flex items-center gap-4 md:gap-12">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center grayscale-0 md:grayscale-50 scale-x-70 md:scale-x-100"
                >
                  ᨒ
                </Link>

                <ul className="flex gap-3 md:gap-8 text-[12.5px] md:text-sm">
                  {menuItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <li key={item.href} className="relative">
                        <Link
                          href={item.href}
                          className={cn(
                            "relative block transition-colors duration-150",
                            sans.className,
                            isActive
                              ? "text-foreground"
                              : "text-muted-foreground hover:text-accent-foreground"
                          )}
                        >
                          <span>{item.name}</span>

                          {/* underline */}
                          <span
                            className={cn(
                              "absolute left-0 -bottom-0.5 h-[0.5px] w-full origin-left scale-x-0 bg-foreground transition-transform duration-300",
                              isActive && "scale-x-100"
                            )}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-2 sm:gap-3">
                <SearchBox />
                <AnimatedThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
