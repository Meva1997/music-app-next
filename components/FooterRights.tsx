import { currentYear } from "../utils/date";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import PersonalLinks from "./PersonalLinks";

const links = [
  {
    href: "https://github.com/Meva1997",
    label: "GitHub",
    icon: <IoLogoGithub className="mr-2" />,
  },
  {
    href: "https://www.linkedin.com/in/alejandro-medina-web-developer/",
    label: "LinkedIn",
    icon: <FaLinkedin className="mr-2" />,
  },
  {
    href: "https://meva1997.github.io/alex-portfolio/",
    label: "Personal Website",
    icon: <FaExternalLinkAlt className="mr-2" />,
  },
];

export default function FooterRights() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-10">
      <section className="my-5 grid space-y-2">
        <PersonalLinks links={links} />
      </section>
      <section>
        <p>This is a personal project made by: Alejandro Medina</p>
        <p>© {currentYear()} API Music. All rights reserved.</p>
      </section>
    </footer>
  );
}
