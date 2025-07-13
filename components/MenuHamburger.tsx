import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

type MenuHamburgerProps = {
  links: {
    label: string;
    href: string;
    icon: React.ReactNode;
  }[];
  onClose: () => void; // Function to close the menu
};

export default function MenuHamburger({ links, onClose }: MenuHamburgerProps) {
  const menuRef = useRef<HTMLDivElement>(null); // Reference to the menu element

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose(); // Close the menu if clicked outside
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup event listener
    };
  }, [onClose]); // Effect runs when onClose changes

  return (
    <>
      <motion.nav
        ref={menuRef}
        className="absolute top-18 left-10 bg-gray-600 shadow-lg p-4 rounded-2xl w-auto h-auto text-center"
        initial={{ opacity: 0, y: -10 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }} // Animation to apply when the menu opens
        exit={{ opacity: 0, y: -10 }} // Animation to apply when the menu closes
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        <ul className="list-none space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="flex gap-2 text-white hover:text-orange-400 transition-colors text-xl font-bold"
                onClick={() => {
                  window.scrollTo(0, 0);
                  onClose();
                }} // Scroll to top on link click
              >
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
}
