import { IconType } from "react-icons";
import { SiRedhat, SiSalesforce, SiTcs, SiOracle } from "react-icons/si";
import { FaAws, FaUniversity, FaTrophy, FaGraduationCap, FaLeaf, FaPenNib } from "react-icons/fa";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { Reveal } from "@/components/Reveal";

type Certification = {
  name: string;
  issuer: string;
  date?: string;
  logo: IconType;
  logoColor: string;
  // Add the public credential URL here to make the tile clickable
  link?: { href: string; label: string };
};

const certifications: Certification[] = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Architect Associate",
    issuer: "Oracle",
    date: "2025",
    logo: SiOracle,
    logoColor: "#C74634",
    link: { href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=65AEE14F8B5079E82DADE207767737137710D4E3645FCD97C96072EAECDC093C", label: "View credential" },
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    logo: FaAws,
    logoColor: "#FF9900",
    link: { href: "https://www.credly.com/badges/c2c40e1b-bcb2-4f18-84bf-198372a3a3ec", label: "View credential" },
  },
  {
    name: "Red Hat EX183",
    issuer: "Red Hat",
    date: "Oct 2024",
    logo: SiRedhat,
    logoColor: "#EE0000",
    link: { href: "https://www.credly.com/badges/331b5f40-23cc-4197-b070-f8a31bb09086", label: "View badge" },
  },
  {
    name: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    date: "Oct 2024",
    logo: SiSalesforce,
    logoColor: "#00A1E0",
  },
  {
    name: "TCS iON Career Edge",
    issuer: "TCS iON",
    date: "Apr 2023",
    logo: SiTcs,
    logoColor: "#1D3E8F",
  },
  {
    name: "Business English Certificate (BEC)",
    issuer: "Cambridge Assessment English",
    date: "Nov 2022",
    logo: FaUniversity,
    logoColor: "#A3001B",
  },
];

const achievements = [
  { title: "Hackathon Winner", detail: "JFSD Blogging Management Hackathon, KL University · Nov 2024", icon: FaTrophy },
  { title: "B.Tech CSE · CGPA 9.39", detail: "Koneru Lakshmaiah Educational Foundation", icon: FaGraduationCap },
  { title: "Team Lead, River Cleanup", detail: "Led a 30-member team to restore riverbanks · 2023", icon: FaLeaf },
  { title: "1st Place, National Essay Competition", detail: "VGR Diabetes Speciality Hospitals · Oct 2019", icon: FaPenNib },
];

const CertificationTile = ({ cert }: { cert: Certification }) => {
  const Logo = cert.logo;
  const content = (
    <>
      <div className="logo-tile bg-white">
        <Logo className="size-8" color={cert.logoColor} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold leading-snug transition-colors duration-300 group-hover/item:text-emerald-300">{cert.name}</div>
        <div className="text-sm text-white/50 mt-1">
          {cert.issuer}
          {cert.date && <> &bull; {cert.date}</>}
        </div>
        {cert.link && (
          <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-emerald-300 opacity-80 transition duration-300 group-hover/item:opacity-100">
            {cert.link.label}
            <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
          </span>
        )}
      </div>
    </>
  );

  return cert.link ? (
    <a
      href={cert.link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${cert.name}: ${cert.link.label} (opens in a new tab)`}
      className="group/item tile active:scale-[0.98] active:translate-y-0"
    >
      {content}
    </a>
  ) : (
    <div className="group/item tile">{content}</div>
  );
};

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications & Achievements"
          description="Industry certifications and milestones that back up the work."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-12">
          <Card>
            <CardHeader title="Certifications" description="Verified skills across cloud, enterprise Java and AI." />
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-6 md:px-10 md:pb-10">
              {certifications.map((cert, index) => (
                <li key={cert.name} className="flex">
                  <Reveal delay={(index % 2) * 0.1} y={20} className="flex w-full">
                    <CertificationTile cert={cert} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <CardHeader title="Achievements" description="Wins in academics, leadership and competitions." />
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-6 md:px-10 md:pb-10">
              {achievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="flex">
                    <Reveal delay={(index % 2) * 0.1} y={20} className="flex w-full">
                      <div className="group/item tile">
                        <div className="logo-tile bg-gradient-to-br from-emerald-300 to-sky-400">
                          <Icon className="size-7 text-gray-900" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold leading-snug transition-colors duration-300 group-hover/item:text-emerald-300">{item.title}</div>
                          <div className="text-sm text-white/50 mt-1">{item.detail}</div>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
