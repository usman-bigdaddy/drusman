// components/Projects.tsx
"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Exclusive Shelters",
    description:
      "A premium real estate platform connecting buyers with luxury properties, featuring advanced search filters and virtual property tours.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1673&q=80",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Node.js"],
    demoLink: "https://www.exclusiveshelters.com/",
    githubLink: "#",
  },
  {
    id: 2,
    title: "DrBridge",
    description:
      "A doctor-to-doctor referral platform that streamlines patient referrals between healthcare professionals with secure messaging and records sharing.",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    technologies: ["Next.js", "MongoDB", "WebRTC", "JWT Auth"],
    demoLink: "https://drbridge.co.in/",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Migoo",
    description:
      "An interactive English learning application with quiz functionality, progress tracking, and personalized learning paths for language acquisition.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    technologies: ["React.js", "Python", "PostgreSQL", "Django"],
    demoLink: "https://dashboard.migooai.com/",
    githubLink: "#",
  },
  {
    id: 4,
    title: "IceQueen",
    description:
      "An e-commerce fashion store specializing in women's clothing with intuitive shopping experience, size recommendations, and secure payment processing.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    technologies: ["Next.js", "PostgreSQL", "Stripe API", "Cloudinary"],
    demoLink: "https://icequeenbyice-one.vercel.app/",
    githubLink: "#",
  },
  {
    id: 5,
    title: "Tswako Sport Foundation",
    description:
      "A platform for sports foundation management featuring athlete profiles, event scheduling, donation processing, and community engagement tools.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    technologies: ["Laravel", "MySQL", "Bootstrap", "Payment Gateway"],
    demoLink: "https://www.tswakofoundation.org/",
    githubLink: "#",
  },
  {
    id: 6,
    title: "Abuja Country Club",
    description:
      "A membership portal for an exclusive country club with event booking, facility reservations, member directory, and payment management system.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    technologies: ["Next.js", "MongoDB", "Calendar API", "Role-based Auth"],
    demoLink: "https://abujacountryclub.vercel.app/",
    githubLink: "#",
  },
  {
    id: 7,
    title: "Olivia University",
    description:
      "A comprehensive school management portal for student enrollment, course management, grade tracking, and communication between faculty and students.",
    image: "/img/olivia-university.jpg",
    technologies: ["React.js", "Express.js", "MySQL", "Redux"],
    demoLink: "https://oliviauniversity.edu.bi/",
    githubLink: "#",
  },
];

export default function Projects() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-gray-900 text-3xl font-bold text-center mb-16 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-600 after:mx-auto after:mt-4">
          Recent Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 flex flex-col h-full"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.demoLink}
                    className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-1" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => scrollToSection("#contact")}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
}
