/** @format */
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { usePathname } from "next/navigation";

// icons
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { BsFillBellFill, BsBell } from "react-icons/bs";
import { TbMailFilled, TbMail } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";
import { BiSolidUser, BiUser } from "react-icons/bi";
import { PiNotepadFill, PiNotepad } from "react-icons/pi";

type Props = {};

interface SideNavItemType {
  icon?: {
    icon: React.ReactNode;
    fillIcon: React.ReactNode;
  };
  label: string;
  href: string;
}

const sidebarItmes: SideNavItemType[] = [
  {
    icon: {
      icon: <GoHome />,
      fillIcon: <GoHomeFill />
    },
    label: "Home",
    href: "/"
  },
  {
    icon: {
      icon: <CiSearch />,
      fillIcon: <FiSearch />
    },
    label: "Explore",
    href: "/explore"
  },
  {
    icon: {
      icon: <BsBell />,
      fillIcon: <BsFillBellFill />
    },
    label: "Notifications",
    href: "/notifications"
  },
  {
    icon: {
      icon: <TbMail />,
      fillIcon: <TbMailFilled />
    },
    label: "Messages",
    href: "/messages"
  },
  {
    icon: {
      icon: <PiNotepad />,
      fillIcon: <PiNotepadFill />
    },
    label: "Lists",
    href: "/lists"
  },

  {
    icon: {
      icon: <HiOutlineUsers />,
      fillIcon: <HiUsers />
    },
    label: "Communities",
    href: "/communities"
  },

  {
    icon: {
      icon: <BiUser />,
      fillIcon: <BiSolidUser />
    },
    label: "Profile ",
    href: "/profile"
  }
];
export default function Sidebar({}: Props) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className={cn(
        "w-fit  pt-2 flex flex-col  border-r-[1px]",
        isSidebarOpen && "md:w-[300px]"
      )}
    >
      {/* logo */}
      {/* <HoverContainer>
        <Link href={"/"}>
          <FaXTwitter className="text-5xl" />
        </Link>
      </HoverContainer> */}

      {/* sidenavitems */}
       {/* toggle button  */}
       <section
        className={cn(
          "hidden md:flex w-full  justify-end",
          !isSidebarOpen && "justify-start"
        )}
      >
        <HoverContainer>
          <GiHamburgerMenu
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className={cn(
              "text-gray-600 transition-all float-right mr-4 text-xl",
              !isSidebarOpen && "rotate-180"
            )}
          />
        </HoverContainer>
      </section>

      {sidebarItmes.map((d, i) => (
        <HoverContainer key={i}>
          <SideNavItem
            icon={d.icon}
            href={d.href}
            isSidebarOpen={isSidebarOpen}
            label={d.label}
          />
        </HoverContainer>
      ))}

     
    </div>
  );
}

function SideNavItem({
  href,
  isSidebarOpen,
  icon,
  label
}: SideNavItemType & { isSidebarOpen: boolean }) {
  const [animationParent] = useAutoAnimate();
  const pathname = usePathname();
  const isActivePage = pathname == href;
  return (
    <Link
      ref={animationParent}
      href={href}
      className="flex gap-2 items-center cursor-pointer"
    >
      {/* icon */}
      <div className="pr-1 text-xl">
        {/* <FaXTwitter /> */}
        {isActivePage ? icon?.fillIcon : icon?.icon}
      </div>
      {/* label */}
      {isSidebarOpen && (
        <p
          className={cn(
            "hidden md:block pr-4  transition-all ",
            isActivePage && "font-bold"
          )}
        >
          {label}
        </p>
      )}
    </Link>
  );
}

function HoverContainer({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="p-3 pr-1 transition-all  cursor-pointer hover:bg-gray-200 w-fit dark:hover:bg-zinc-900 group-hover:dark:bg-zinc-900 group-hover:bg-gray-200 w-full">
      {children}
    </div>
  );
}
