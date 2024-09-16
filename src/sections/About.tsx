"use client"; // Mark this as a client component

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScript from "@/assets/icons/square-js.svg"
import HTML5 from "@/assets/icons/html5.svg"
import CSS3 from "@/assets/icons/css3.svg"
import React from "@/assets/icons/react.svg"
import Java from "@/assets/icons/jva.svg"
import Chrome from "@/assets/icons/chrome.svg"
import GitHub from "@/assets/icons/github.svg"
import MySQL from "@/assets/icons/mysql.svg"
import { TechIcon } from "@/components/TechIcons";
import mapImage from "@/assets/images/map2.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from 'framer-motion';
import { useRef } from "react";

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavaScript,
  },
  {
    title: 'HTML5',
    iconType: HTML5,
  },
  {
    title: 'CSS3',
    iconType: CSS3,
  },
  {
    title: 'React.js',
    iconType: React,
  },
  // {
  //   title: 'Next.js',
  //   icon:,
  // },
  // {
  //   title: 'Java',
  //   icon: <Java />,
  // },
  {
    title: 'Chrome',
    iconType: Chrome,
  },
  {
    title: 'GitHub',
    iconType: GitHub,
  },
  // {
  //   title: 'MySQL',
  //   icon: <MySQL />,
  // },
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
    <div className="py-20 lg:py-28">
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


              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems items={toolboxItems} className="mt-6 " itemsWrapperClassName="animate-move-right [animation-duration:30s]" />

            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title={"Beyond the Code"} description={"Explore my interests and bobbies beyond the digital realm"} className="px-6 py-6" />

              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div
                    key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints = {constraintRef}
                    >
                      
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            {/* <Card className="h-[320px] p-0 relative">
            <Image src={mapImage} alt="map" className="h-full w-full object-cover" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1 -translate-y-1">
              <Image src={smileMemoji} alt="smiling memoji" />
            </div>
          </Card> */}

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="map" className="h-full w-full object-cover object-center" />


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
    </div >
  );
};
