// components/Footer.tsx
import Link from "next/link";
import { Linkedin, Github, Mail, Twitter, BookOpen } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dr-usman-abubakar/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/usman-bigdaddy/",
    icon: Github,
  },
  {
    name: "Twitter",
    href: "#",
    icon: Twitter,
  },
  {
    name: "Google Scholar",
    href: "https://scholar.google.com/citations?user=JSzOQXcAAAAJ&hl=en&authuser=1",
    icon: BookOpen,
  },
  {
    name: "Email",
    href: "mailto:usmanbeeabubakar@example.com",
    icon: Mail,
  },
];

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "About", href: "#about" },
      { name: "Experience", href: "#experience" },
      { name: "Publications", href: "#publications" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Research Collaboration", href: "#" },
      { name: "Consulting", href: "#" },
      { name: "Technical Review", href: "#" },
      { name: "Mentoring", href: "#" },
      { name: "Speaking Engagements", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Dr. <span className="text-blue-400">Usman</span> Abubakar
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              A dedicated computer science researcher and software engineer with
              a passion for innovation and education.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 text-white p-3 rounded-full transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-blue-500 after:-bottom-2 after:left-0">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Dr. Usman Abubakar. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
