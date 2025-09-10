// components/Publications.tsx
"use client";

import { useState } from "react";
import { Calendar, FileText, ExternalLink } from "lucide-react";

interface Publication {
  id: number;
  year: string;
  type: "journal" | "conference";
  title: string;
  authors: string;
  venue: string;
  link: string;
}

const publicationsData: Publication[] = [
  {
    id: 1,
    year: "2024",
    type: "conference",
    title:
      "AI-powered Corn Disease classification using Deep Transfer Learning",
    authors: "Moussa Mahamat Boukar, Assia Aboubakar Mahamat, Hassane Hamdan",
    venue:
      "EAI International Conference on Innovations and Interdisciplinary Solutions for Underserved Areas",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-86493-3_28",
  },
  {
    id: 2,
    year: "2024",
    type: "conference",
    title:
      "Improving the Accuracy of Animal Species Classification in Camera Trap Images Using Transfer Learning ",
    authors:
      "Moussa Mahamat Boukar; Assia Aboubakar Mahamat; Oumar Hassan Djibrine",
    venue:
      "2024 International Conference on Artificial Intelligence, Computer, Data Sciences and Applications (ACDSA)  ",
    link: "https://ieeexplore.ieee.org/document/10467777",
  },
  {
    id: 3,
    year: "2024",
    type: "journal",
    title:
      "Human Age Estimation from Face Images with Deep Convolutional Neural Networks Using Transfer Learning ",
    authors: "Gilbert George, Chandrashekhar Uppin",
    venue: "preprint",
    link: "https://drive.google.com/file/d/1tsAZALfBdUeB48w3OlIDuuYIU26YJr9E/view",
  },
  {
    id: 4,
    year: "2023",
    type: "journal",
    title:
      "Enhancing Viral Pneumonia Diagnosis Accuracy Using Transfer Learning and Ensemble Technique from Chest X-ray Images",
    authors: "Chandrashekhar Uppin",
    venue: "International Journal of Computer Science and Security (IJCSS)",
    link: "https://www.cscjournals.org/library/manuscriptinfo.php?mc=IJCSS-1700",
  },
  {
    id: 5,
    year: "2023",
    type: "journal",
    title:
      "Deep Learning for Osteoporosis Classification Using Convolutional Neural Network on Knee Radiograph Dataset to Compare Classification Accuracy between RGB Images and Grayscale Images",
    authors: "Moussa Mahamat Boukar, Steve Adeshina & Senol Dane",
    venue: "Journal of Research in Medical and Dental Science (JRMDS)",
    link: "https://www.jrmds.in/articles/deep-learning-for-osteoporosis-classification-using-convolutional-neural-network-on-knee-radiograph-dataset-to-compare-c.pdf",
  },
  {
    id: 6,
    year: "2023",
    type: "journal",
    title:
      "Baze University Computer Science Students’ Perspectives on Pen and Paper Exams for Programming, and Database Management ",
    authors: "Florence Peter",
    venue: "Open Journal of Educational Development (OJED)",
    link: "https://www.openjournalsnigeria.org.ng/journals/index.php/ojed/article/view/456",
  },
  {
    id: 7,
    year: "2023",
    type: "journal",
    title:
      "Transfer Learning for Animal Species Identification from CCTV Image: Case Study Zakouma National Park ",
    authors:
      "Oumar Hassan Djibrine, Daouda Ahmat, Moussa Mahamat Boukar & Azza Youssouf Ali",
    venue:
      "International Journal of Intelligent Systems and Applications in Engineering (IJISAE) ",
    link: "https://ijisae.org/index.php/IJISAE/article/view/3673",
  },
  {
    id: 8,
    year: "2022",
    type: "journal",
    title:
      "Evaluation Of Classification Algorithms on Locky Ransomware Using Weka Tool ",
    authors: "Florence Peter, Khadijah Mohammed, Gilbert George",
    venue: "Open Journal of Physical Science (OJPS)",
    link: "https://www.openjournalsnigeria.org.ng/journals/index.php/ojps/article/view/382",
  },
  {
    id: 9,
    year: "2022",
    type: "journal",
    title:
      "Evaluation of Parameter Fine-Tuning with Transfer Learning for Osteoporosis Classification in Knee Radiograph ",
    authors: "Moussa Mahamat Boukar & Steve Adeshina",
    venue:
      "International Journal of Advanced Computer Science and Applications (IJACSA) ",
    link: "https://thesai.org/Publications/ViewPaper?Volume=13&Issue=8&Code=IJACSA&SerialNo=29",
  },
  {
    id: 10,
    year: "2022",
    type: "conference",
    title:
      "Comparison of Transfer Learning Model Accuracy for Osteoporosis Classification on Knee Radiograph",
    authors: "Moussa Mahamat Boukar & Steve Adeshina",
    venue:
      "2nd International Conference on Computing and Machine Intelligence (ICMI)",
    link: "https://ieeexplore.ieee.org/document/9873731",
  },
  {
    id: 11,
    year: "2022",
    type: "journal",
    title:
      "Computer Studies Secondary School Students' Academic Performance in Zaria Local Government Area of Kaduna State: Effect of Socio-Economic Background",
    authors: "Haruna Muhammad Jumare",
    venue: "Zaria Journal of Empirical Studies in Education (ZAJESE)",
    link: "https://drive.google.com/file/d/1TbKJnDcTA4yD2NGiyp6lsGaiyU2p-_pU/view",
  },
  {
    id: 12,
    year: "2022",
    type: "journal",
    title:
      "Transfer Learning Model Training Time Comparison for Osteoporosis Classification on Knee Radiograph of RGB and Grayscale Images ",
    authors: "Moussa Mahamat Boukar, Steve Adeshina & Senol Dane",
    venue: "WSEAS Transactions on Electronics ",
    link: "https://drive.google.com/file/d/1nbZtocf3BInjwwsVsdWPl2Gq5dEyAxLR/view",
  },
  {
    id: 13,
    year: "2022",
    type: "journal",
    title:
      "Review of Swarm Fuzzy classifier and a Convolutional Neural Network with VGG-16 Pre-Trained Model on Dental Panoramic Radiograph for Osteoporosis classification ",
    authors: "Moussa Mahamat Boukar & Senol Dane",
    venue: "Journal of Research in Medical and Dental Science (JRMDS)",
    link: "https://www.jrmds.in/articles/review-of-swarm-fuzzy-classifier-and-a-convolutional-neural-network-with-vgg16-pretrained-model-on-dental-panoramic-radiograph-for-89100.html",
  },
  {
    id: 14,
    year: "2021",
    type: "journal",
    title:
      "Natural Language Processing Approach To Determine The Polarity and Subjectivity of iPhone12 Twitter Feeds Using TextBlob",
    authors: "Chandrashekhar Uppin",
    venue: "Open Journal of Physical Science (OJPS) ",
    link: "https://www.openjournalsnigeria.org.ng/journals/index.php/ojps/article/view/276",
  },
  {
    id: 15,
    year: "2025",
    type: "journal",
    title:
      "Enhancing Movie Recommendations with Hybribd Collaborative and Content FIltering Algorithms",
    authors: "Orji Chimdi & Chandrashekhar Uppin",
    venue: "Qualitative and Quantitative Research Review, (QQR)",
    link: "https://drive.google.com/file/d/1LUdkF1I3IEorjq9gJp0N8wfMoBGngDq0/view",
  },
  {
    id: 16,
    year: "2025",
    type: "journal",
    title:
      "A Survey on Software Defect Prediction:Techniques, Chalenges & Future Directions",
    authors: "Muhammad Haruna Jumare & Chandrashekhar Uppin",
    venue: "Qualitative and Quantitative Research Review, (QQR)",
    link: "https://drive.google.com/file/d/15wXrrVsdpYc-hFqIyp7_Kpx9YzOUks7i/view?usp=sharing",
  },
  {
    id: 17,
    year: "2025",
    type: "journal",
    title:
      "Using Android Platform Features to Improve the Use of Mobile Devices in Assisted Learning for Children Below the Ages of Ten",
    authors: "Muhammad Haruna Jumare, Gilbert George & Abubakar Abba",
    venue: "Zaria Journal of Educational Studies",
    link: "https://drive.google.com/file/d/1UOYvLL-pAIQ5Gb0_Awb5NIYk5K_dtxYR/view?usp=sharing",
  },

  {
    id: 18,
    year: "2025",
    type: "conference",
    title:
      "Using Android Mobile Features to Support Interactive Learning for Young Children",
    authors: "Muhammad Haruna Jumare & Chandrashekhar Uppin",
    venue: "19th International Conference on Technology and Computing",
    link: "#",
  },
];

export default function Publications() {
  const [filter, setFilter] = useState<"all" | "journal" | "conference">("all");

  const filteredPublications =
    filter === "all"
      ? publicationsData
      : publicationsData.filter((pub) => pub.type === filter);

  // Calculate counts per year
  const getYearlyCounts = () => {
    const counts: Record<string, number> = {};
    publicationsData.forEach((pub) => {
      counts[pub.year] = (counts[pub.year] || 0) + 1;
    });
    return counts;
  };

  const yearlyCounts = getYearlyCounts();

  // Group publications by year
  const publicationsByYear = filteredPublications.reduce(
    (acc: Record<string, Publication[]>, pub) => {
      if (!acc[pub.year]) {
        acc[pub.year] = [];
      }
      acc[pub.year].push(pub);
      return acc;
    },
    {}
  );

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-gray-900 text-3xl font-bold text-center mb-16 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-600 after:mx-auto after:mt-4">
          Research Publications
        </h2>

        <div className="flex justify-center mb-12 flex-wrap gap-3">
          <button
            className={`px-5 py-2 rounded-full font-semibold transition-colors ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
            onClick={() => setFilter("all")}
          >
            All Publications ({publicationsData.length})
          </button>
          <button
            className={`px-5 py-2 rounded-full font-semibold transition-colors ${
              filter === "journal"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
            onClick={() => setFilter("journal")}
          >
            Journal Articles (
            {publicationsData.filter((p) => p.type === "journal").length})
          </button>
          <button
            className={`px-5 py-2 rounded-full font-semibold transition-colors ${
              filter === "conference"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
            onClick={() => setFilter("conference")}
          >
            Conference Papers (
            {publicationsData.filter((p) => p.type === "conference").length})
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          {Object.keys(publicationsByYear)
            .sort((a, b) => parseInt(b) - parseInt(a))
            .map((year) => (
              <div key={year} className="mb-12">
                <div className="flex items-center justify-between mb-8 border-b-2 border-blue-600 pb-3">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                    <Calendar className="mr-3 text-blue-600" size={24} />
                    {year}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {publicationsByYear[year].length} publication
                    {publicationsByYear[year].length !== 1 ? "s" : ""}
                    {yearlyCounts[year] !== publicationsByYear[year].length &&
                      ` (${publicationsByYear[year].length} of ${yearlyCounts[year]} shown)`}
                  </span>
                </div>

                {publicationsByYear[year].map((pub) => (
                  <div
                    key={pub.id}
                    className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-blue-600 transition-all hover:shadow-md"
                  >
                    <span
                      className={`inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold mr-3 ${
                        pub.type === "journal"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-pink-100 text-pink-800"
                      }`}
                    >
                      <FileText size={14} className="mr-1" />
                      {pub.type === "journal"
                        ? "Journal Article"
                        : "Conference Paper"}
                    </span>
                    <h4 className="text-gray-900 text-xl font-bold mt-4 mb-2">
                      {pub.title}
                    </h4>
                    <p className="text-gray-600 italic mb-3">
                      Co-author(s){pub.authors}
                    </p>
                    <p className="text-gray-800 font-semibold mb-4">
                      {pub.venue}
                    </p>
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-800 transition-colors"
                    >
                      View Publication
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
