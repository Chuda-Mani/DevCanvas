import Image, { StaticImageData } from 'next/image';
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import FreshifyImage from "@/assets/images/pro2.png"

type Project = {
  label: string;
  year: string;
  title: string;
  results: { title: string }[];
  stack: string[];
  link?: { href: string; text: string };
  image?: StaticImageData;
};

const portfolioProjects: Project[] = [
  {
    label: "Hackathon Winner",
    year: "2024",
    title: "Blogging Management System",
    results: [
      { title: "Won the JFSD hackathon at KL University leading a team of 3" },
      { title: "Spring Boot REST API for creating, editing and managing posts" },
      { title: "Secure authentication and optimized queries for 30% faster data access" },
    ],
    stack: ["Java", "Spring Boot", "REST API", "MySQL"],
  },
  {
    label: "DevOps",
    year: "2025",
    title: "Dockerized Portfolio with Nginx",
    results: [
      { title: "Containerized a static site on a lightweight nginx:alpine image" },
      { title: "One-command local run with Docker Compose and auto-restart" },
      { title: "Reproducible builds that run identically on any machine" },
    ],
    stack: ["Docker", "Docker Compose", "Nginx", "HTML/CSS/JS"],
    link: { href: "https://github.com/Chuda-Mani/Dockerized-Portfolio", text: "View on GitHub" },
  },
  {
    label: "Web App",
    year: "2024",
    title: "Freshify: Fresh Produce Store",
    results: [
      { title: "Streamlined product browsing for quick purchases" },
      { title: "Enhanced customer engagement with an intuitive interface" },
      { title: "Integrated features for boosting sales and expanding market reach" },
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    link: { href: "https://chuda-mani.github.io/Freshify/", text: "Visit Live Site" },
    image: FreshifyImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader title={"Featured Projects"} eyebrow={"Real-World Results"} description={"See how I transformed concepts into engaging digital experiences."}/>

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" style={{
              top: `calc(64px + ${projectIndex * 40}px)`,
            }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Text Section */}
                <Reveal className="pb-8 lg:pb-16">
                  <div className="gradient-text inline-flex gap-2 font-bold uppercase tracking-widest text-sm">
                    <span>{project.label}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50 transition-colors duration-300 hover:text-white/80">
                        <CheckCircleIcon className="size-5 md:size-6 flex-none text-emerald-300" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  {project.link && (
                    <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="btn-primary w-full md:w-auto mt-8">
                      <span>{project.link.text}</span>
                      <ArrowUpRightIcon className="size-4 icon-up-right" />
                    </a>
                  )}
                </Reveal>

                {/* Image Section, or a tech-stack panel when there is no screenshot */}
                <div className="relative lg:flex lg:items-center">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      width={500}
                      height={300}
                      className="rounded-lg object-cover -mb-4 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none transition duration-700 ease-out group-hover:scale-105 group-hover:-rotate-1"
                    />
                  ) : (
                    <div className="mb-8 lg:mb-16 w-full rounded-2xl bg-gray-900/60 outline outline-2 outline-white/10 p-6 md:p-8 transition duration-500 group-hover:outline-emerald-300/30">
                      <p className="gradient-text uppercase font-semibold tracking-widest text-sm">Tech Stack</p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        {project.stack.map((tech) => (
                          <span key={tech} className="chip transition duration-300 hover:outline-emerald-300/50 hover:text-white hover:-translate-y-0.5">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
