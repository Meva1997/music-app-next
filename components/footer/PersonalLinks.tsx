import React from "react";
import Link from "next/link";

type LinkItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

type PersonalLinksProps = LinkItem[];

export default function PersonalLinks({
  links,
}: {
  links: PersonalLinksProps;
}) {
  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-orange-400 hover:text-orange-600 transition-colors duration-300 text-2xl"
        >
          {link.icon}
          {link.label}
        </Link>
      ))}
    </>
  );
}
