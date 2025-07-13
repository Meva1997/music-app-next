"use client";

import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt, FaComments, FaHome } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion"; // Import framer-motion for animations
import MenuHamburger from "./MenuHamburger";

type MainHeaderProps = {
  title: string;
};

const navLinks = [
  {
    label: "Main Page",
    href: "/",
    icon: <FaHome className="h-6 w-6" />,
  },
  {
    label: "Comments",
    href: "/comments",
    icon: <FaComments className="h-6 w-6" />,
  },
];

export default function MainHeader({ title }: MainHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state the ! sign makes this condition become the opposite of what it is which currently is false
  };

  return (
    <header className="flex justify-evenly items-center my-8">
      <button onClick={toggleMenu} className="relative z-20">
        <motion.div
          key={isOpen ? "close-icon" : "menu-icon"} // Unique keys for Framer Motion
          initial={{ opacity: 1, scale: 0.8 }} // Initial state
          animate={{ opacity: 1, scale: 1 }} // Final state
          exit={{ opacity: 1, scale: 0.8 }} // Exit state
          transition={{ duration: 0.3 }} // Smooth transition
        >
          {isOpen ? (
            <RxCross2 className="h-10 w-10 text-green-500 hover:scale-110 transition-transform cursor-pointer z-10" />
          ) : (
            <GiHamburgerMenu className="h-10 w-10 text-green-500 hover:scale-110 transition-transform cursor-pointer z-10" />
          )}
        </motion.div>
      </button>

      {isOpen && (
        <MenuHamburger links={navLinks} onClose={() => setIsOpen(false)} />
      )}
      <h1 className="text-center text-4xl text-orange-400 font-bold">
        {title}
      </h1>
      <Link href={"/profile"}>
        <FaUserAlt className="h-8 w-8 text-green-500 hover:scale-110 transition-transform cursor-pointer z-10" />
      </Link>
    </header>
  );
}
