"use client"; // Mark this as a client component

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import { FaJava, FaAws } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { RiRobot2Line, RiPlugLine, RiVoiceprintLine, RiSearchEyeLine, RiFlowChart } from "react-icons/ri";
import {
  SiFastapi, SiPython, SiLangchain, SiOpenai, SiAnthropic, SiTypescript,
  SiSpringboot, SiJavascript,
  SiDocker, SiKubernetes, SiJenkins, SiGithub, SiMysql, SiPostgresql, SiMongodb,
} from "react-icons/si";
import mapImage from "@/assets/images/map2.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from 'framer-motion';
import { useRef } from "react";

// Current focus (highlighted) first, then AI stack from Emscale work, then core languages
const developmentTools = [
  { title: 'Generative AI', iconType: HiSparkles, highlight: true },
  { title: 'FastAPI', iconType: SiFastapi, highlight: true },
  { title: 'AWS Bedrock', iconType: FaAws, highlight: true },
  { title: 'Python', iconType: SiPython },
  { title: 'LangChain', iconType: SiLangchain },
  { title: 'LangGraph', iconType: RiFlowChart },
  { title: 'AI Agents', iconType: RiRobot2Line },
  { title: 'MCP', iconType: RiPlugLine },
  { title: 'Sarvam AI', iconType: RiVoiceprintLine },
  { title: 'OpenAI', iconType: SiOpenai },
  { title: 'Claude API', iconType: SiAnthropic },
  { title: 'SEO', iconType: RiSearchEyeLine },
  { title: 'TypeScript', iconType: SiTypescript },
  { title: 'Java', iconType: FaJava },
  { title: 'Spring Boot', iconType: SiSpringboot },
  { title: 'JavaScript', iconType: SiJavascript },
];

const devOpsTools = [
  { title: 'Docker', iconType: SiDocker },
  { title: 'Kubernetes', iconType: SiKubernetes },
  { title: 'Jenkins', iconType: SiJenkins },
  { title: 'GitHub', iconType: SiGithub },
  { title: 'AWS', iconType: FaAws },
  { title: 'MySQL', iconType: SiMysql },
  { title: 'PostgreSQL', iconType: SiPostgresql },
  { title: 'MongoDB', iconType: SiMongodb },
];

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '📷',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Hiking',
    emoji: '🚵',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Fitness',
    emoji: '🏋',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Reading',
    emoji: '📖',
    left: '45%',
    top: '70%',
  },

]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          title={"A Glimpse Into My World"}
          eyebrow={"About Me"}
          description={"Learn more about who I am, what I do, and what inspires me."}
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title={"My Reads"} description={"Explore the books shaping my perspectives."} />

              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title={"My Toolbox"}
                description={"Explore the technologies and tools I use to craft exceptional digital experiences."}
                className=""
              />


              <ToolboxItems items={developmentTools} itemsWrapperClassName="animate-move-left [animation-duration:50s]" />
              <ToolboxItems items={devOpsTools} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:30s]" />

            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title={"Beyond the Code"} description={"Explore my interests and hobbies beyond the digital realm"} className="px-6 py-6" />

              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div
                    key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-grab shadow-lg" style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95, cursor: "grabbing" }}
                    dragConstraints = {constraintRef}
                    >
                      
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="Map showing where I'm based" className="h-full w-full object-cover object-center" />


              <div
                className="absolute rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] 
               after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 
               after:rounded-full after:outline-gray-950/30 animate-ping [animation-duration:2s]"
                style={{ top: '65%', left: '25%', width: '80px', height: '80px' }}
              >
                <div className="absolute rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 animate-ping"></div>

                <Image src={smileMemoji} alt="smiling memoji" className="w-16 h-16 absolute top-2 left-2" />
              </div>
            </Card>


          </div>




        </div>
      </div>
    </section >
  );
};
