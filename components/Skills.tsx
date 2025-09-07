// components/Skills.tsx
import {
  Code,
  Cpu,
  Database,
  Cloud,
  Shield,
  Brain,
  GitBranch,
  Server,
} from "lucide-react";

interface SkillCategory {
  id: number;
  title: string;
  icon: React.ComponentType<any>;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    id: 1,
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "JavaScript/TypeScript", "C++", "Rust", "PHP"],
  },
  {
    id: 2,
    title: "Frameworks & Libraries",
    icon: Cpu,
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "TensorFlow",
      "PyTorch",
      "Laravel",
      "Express.js",
    ],
  },
  {
    id: 3,
    title: "Tools & Technologies",
    icon: Database,
    skills: [
      "Docker",
      "AWS",
      "Git",
      "SQL/NoSQL",
      "Kubernetes",
      "Firebase",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    id: 4,
    title: "Research Expertise",
    icon: Brain,
    skills: [
      "Machine Learning",
      "Distributed Systems",
      "Cloud Computing",
      "Data Privacy",
      "Data Analysis",
      "Federated Learning",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-gray-900 text-3xl font-bold text-center mb-16 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-600 after:mx-auto after:mt-4">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category) => (
            <div
              key={category.id}
              className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <category.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-white px-4 py-2 rounded-full text-sm font-medium text-blue-600 border border-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
