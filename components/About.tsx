// components/About.tsx
"use client";

import { GraduationCap, Briefcase, MapPin, Award } from "lucide-react";

interface InfoItem {
  icon: React.ComponentType<any>;
  title: string;
  content: string;
}

const infoItems: InfoItem[] = [
  {
    icon: GraduationCap,
    title: "Education",
    content: "PhD in Computer Science, Nile University of Nigeria",
  },
  {
    icon: Briefcase,
    title: "Experience",
    content: "6+ Years in Computing Research & Software Development",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Abuja, Nigeria",
  },
  {
    icon: Award,
    title: "Achievements",
    content: "2+ International Awards",
  },
];

export default function About() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-600 after:mx-auto after:mt-4 text-gray-900">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-6 text-lg text-gray-800 text-justify">
              <p>
                I am a Computer Science researcher and professional with a PhD
                specializing in Deep Learning and Artificial Intelligence in
                Healthcare. My research explores how advanced AI models can be
                applied to improve medical diagnostics, decision support
                systems, and large-scale healthcare data analysis. With over 8
                years of experience across academia and industry, I have
                contributed to impactful research projects and developed
                practical AI-driven applications. My work has been published in
                reputable journals and international conferences, showcasing
                both theoretical advances and real-world implementations. As an
                educator, I have taught courses in Databases, Programming,
                Systems Design, Software Engineering, and Research Methodology.
                I am also deeply engaged in mentoring students, peer-reviewing
                academic work, and contributing to open-source projects. I am
                passionate about leveraging technology to improve healthcare
                outcomes and create positive societal impact, while bridging the
                gap between research and practical deployment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={() => scrollToSection("#publications")}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                View Publications
              </button>
              <button
                onClick={() => scrollToSection("#projects")}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
              >
                View Projects
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="space-y-8">
              {infoItems.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
