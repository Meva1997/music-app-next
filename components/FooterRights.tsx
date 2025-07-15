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
    href: "https://meva1997.github.io/alex-portfolio/",
    label: "Personal Website",
    icon: <FaExternalLinkAlt className="mr-2" />,
  },
  {
    href: "https://www.linkedin.com/in/alejandro-medina-web-developer/",
    label: "LinkedIn",
    icon: <FaLinkedin className="mr-2" />,
  },
];

export default function FooterRights() {
  return (
    <footer className="h-auto py-4 mt-auto text-center text-white bg-gray-900">
      {" "}
      {/* mt-auto asegura que el footer se pegue al final */}
      <section className="grid max-w-5xl mx-auto my-5 space-y-2 md:flex md:justify-evenly md:space-y-0">
        <PersonalLinks links={links} />
      </section>
      <section className="mt-15">
        <p>This is a personal project made by: Alejandro Medina</p>
        <p>© {currentYear()} API Music. All rights reserved.</p>
      </section>
    </footer>
  );
}
