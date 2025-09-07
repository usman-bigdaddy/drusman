// components/Experience.tsx
import { Calendar } from "lucide-react";

interface ExperienceItem {
  id: number;
  date: string;
  title: string;
  company: string;
  responsibilities: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    date: "2018 - Present",
    title: "Lecturer",
    company: "Baze University, Department of Computer Science",
    responsibilities: [
      "Teach undergraduate and graduate courses in computer science",
      "Supervise student research projects and theses",
      "Develop curriculum and course materials for software engineering programs",
      "Mentor students in academic and career development",
    ],
  },
  {
    id: 2,
    date: "2025 - Present",
    title: "Full Stack Developer",
    company: "Decapital Development",
    responsibilities: [
      "Develop and maintain web applications using modern frameworks",
      "Implement responsive UI designs and optimize user experience",
      "Design and manage database architecture and API integrations",
      "Collaborate with cross-functional teams on product development",
    ],
  },
  {
    id: 3,
    date: "2022 - 2023",
    title: "Senior Clinical Programmer II",
    company: "ClinFocus",
    responsibilities: [
      "Developed clinical data management systems and programming solutions",
      "Created and validated clinical databases and electronic data capture systems",
      "Generated clinical study reports and data listings for regulatory submissions",
      "Implemented quality control procedures for clinical data management",
    ],
  },
  {
    id: 4,
    date: "2017 - 2018",
    title: "Senior Full Stack Developer & Database Administrator",
    company: "Anchor Dataware Solutions",
    responsibilities: [
      "Designed and implemented full-stack web applications",
      "Managed database administration and optimization",
      "Led development teams and coordinated project timelines",
      "Implemented security protocols and data protection measures",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-gray-900 text-3xl font-bold text-center mb-16 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-600 after:mx-auto after:mt-4">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((item, index) => (
            <div
              key={item.id}
              className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-6 before:h-6 before:bg-blue-600 before:rounded-full"
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center text-blue-600 font-semibold mb-2">
                  <Calendar className="mr-2" size={18} />
                  {item.date}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-4">{item.company}</p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  {item.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
