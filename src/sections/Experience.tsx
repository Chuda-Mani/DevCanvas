import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import Image, { StaticImageData } from "next/image";
import emscaleLogo from "@/assets/images/logos/emscale.png";
import nullclassLogo from "@/assets/images/logos/nullclass.png";

type Experience = {
  company: string;
  period: string;
  role: string;
  current?: boolean;
  // Company logo and the tile colour behind it; falls back to the first letter
  logo?: StaticImageData;
  logoBg?: string;
  // Logo already has its own square background, so show it edge to edge
  logoFill?: boolean;
  points: string[];
};

const experiences: Experience[] = [
  {
    company: "Emscale",
    period: "Present",
    logo: emscaleLogo,
    logoBg: "bg-white",
    role: "AI Intern",
    current: true,
    points: [
      "Working on AI-driven software as part of the Emscale team",
    ],
  },
  {
    company: "CoderOne",
    period: "Jun 2024 – Aug 2024",
    role: "Web Development Intern",
    points: [
      "Built a React feedback management system that cut manual effort by 40%",
      "Integrated real-time data handling, improving efficiency by 30%",
      "Presented data-driven insights to the company and was recognized for process improvement",
    ],
  },
  {
    company: "NullClass",
    period: "Apr 2024 – Jul 2024 · Remote",
    logo: nullclassLogo,
    logoFill: true,
    role: "Web Development Intern",
    points: [
      "Built a YouTube clone in React with dynamic video rendering and user authentication",
      "Improved user experience by 25% and optimized content recommendations",
      "Commended for innovative design and functionality",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've Worked"
          description="From internships to engineering at Emscale, here's what I've been building."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {experiences.map((exp, expIndex) => (
            <Card
              key={exp.company}
              className="p-8 md:p-10 lg:px-16 lg:py-14 sticky"
              style={{ top: `calc(64px + ${expIndex * 40}px)` }}
            >
              <span className="absolute right-6 top-4 md:right-10 md:top-6 font-serif text-6xl md:text-8xl text-white/5 transition-colors duration-500 group-hover:text-emerald-300/10 select-none">
                {String(expIndex + 1).padStart(2, "0")}
              </span>

              <Reveal className="lg:grid lg:grid-cols-[2fr_3fr] lg:gap-16">
                <div>
                  <div className="flex items-center gap-4">
                    <div className={`size-14 rounded-2xl inline-flex items-center justify-center flex-none overflow-hidden shadow-lg ring-2 ring-white/10 transition duration-500 group-hover:-rotate-6 group-hover:scale-110 ${exp.logo ? exp.logoBg ?? "bg-white" : "bg-gradient-to-br from-emerald-300 to-sky-400"}`}>
                      {exp.logo ? (
                        <Image src={exp.logo} alt={`${exp.company} logo`} className={exp.logoFill ? "size-full object-cover" : "size-full object-contain p-2"} />
                      ) : (
                        <span className="text-gray-900 font-serif text-2xl">{exp.company[0]}</span>
                      )}
                    </div>
                    <div>
                      <div className="gradient-text font-bold uppercase tracking-widest text-sm">{exp.company}</div>
                      <div className="text-sm text-white/50 mt-1">{exp.period}</div>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl mt-6">{exp.role}</h3>
                  {exp.current && (
                    <div className="mt-4 bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-lg">
                      <span className="bg-green-500 size-2.5 rounded-full relative">
                        <span className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></span>
                      </span>
                      <span className="text-sm font-semibold">Current role</span>
                    </div>
                  )}
                </div>

                <div>
                  <hr className="border-t-2 border-white/5 mt-6 lg:hidden" />
                  <ul className="flex flex-col gap-4 mt-6 lg:mt-2">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm md:text-base text-white/50 transition-colors duration-300 hover:text-white/80">
                        <CheckCircleIcon className="size-5 md:size-6 flex-none text-emerald-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
