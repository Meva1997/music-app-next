"use client";

import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt, FaComments, FaHome } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoLogOut } from "react-icons/io5";
import { motion } from "framer-motion"; // Import framer-motion for animations
import MenuHamburger from "./MenuHamburger";

type MainHeaderProps = {
  title: string;
};

const navLinks = [
  {
    label: "Main Page",
    href: "/",
    icon: <FaHome className="w-6 h-6" />,
  },
  {
    label: "Comments",
    href: "/comments",
    icon: <FaComments className="w-6 h-6" />,
  },
  {
    label: "Log Out",
    href: "/profile",
    icon: <IoLogOut className="w-6 h-6" />,
  },
];

export default function MainHeader({ title }: MainHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state the ! sign makes this condition become the opposite of what it is which currently is false
  };

  return (
    <header className="flex items-center max-w-6xl mx-auto my-8 justify-evenly ">
      <div className="relative z-20">
        {" "}
        {/* Contenedor relativo para posicionar el menú */}
        <button onClick={toggleMenu}>
          <motion.div
            key={isOpen ? "close-icon" : "menu-icon"} // Unique keys for Framer Motion
            initial={{ opacity: 1, scale: 0.8 }} // Initial state
            animate={{ opacity: 1, scale: 1 }} // Final state
            exit={{ opacity: 1, scale: 0.8 }} // Exit state
            transition={{ duration: 0.3 }} // Smooth transition
          >
            {isOpen ? (
              <RxCross2 className="z-10 w-10 h-10 text-green-500 transition-transform cursor-pointer hover:scale-110" />
            ) : (
              <GiHamburgerMenu className="z-10 w-10 h-10 text-green-500 transition-transform cursor-pointer hover:scale-110" />
            )}
          </motion.div>
        </button>
        {isOpen && (
          <MenuHamburger links={navLinks} onClose={() => setIsOpen(false)} />
        )}
      </div>
      <h1 className="text-4xl font-bold text-center text-orange-400">
        {title}
      </h1>
      <Link href={"/profile"}>
        <FaUserAlt className="z-10 w-8 h-8 text-green-500 transition-transform cursor-pointer hover:scale-110" />
      </Link>
    </header>
  );
}
