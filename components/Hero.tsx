// components/Hero.tsx
"use client";

import Image from "next/image";
import { Mail, Download, Award } from "lucide-react";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Dr. Usman Abubakar
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 font-bold mb-6">
              PhD in Computer Science
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl">
              Researcher and Software Engineer specializing in Machine Learning,
              Distributed Systems, and Web Technologies. Passionate about
              solving complex problems through innovative technological
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => scrollToSection("#contact")}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </button>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1staHI3bDmTZCB8Q8ozdCn3D-qx8pUm_A/view?usp=sharing"
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-gray-700">Publications</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-600">6+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-gray-700">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative inline-block">
              <Image
                src="/img/dr_usman_abubakar.jpg"
                alt="Dr. Usman Abubakar"
                width={400}
                height={400}
                className="rounded-full border-8 border-white shadow-xl"
              />
              <div className="absolute -top-2 -right-2 bg-white px-5 py-3 rounded-full shadow-lg flex items-center">
                <Award className="text-red-600 mr-2" size={20} />
                <span className="font-semibold text-gray-900">
                  Available for Consulting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
