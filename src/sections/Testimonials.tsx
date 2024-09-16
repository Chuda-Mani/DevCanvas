// import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
// import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
// import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
// import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
// import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
// import { SectionHeader } from "@/components/SectionHeader";
// import Image from "next/image";
// import grainImage from "@/assets/images/grain.jpg"
// import { Card } from "@/components/Card";
// import { Fragment } from "react";

// const testimonials = [
//   {
//     name: "Rohit Sharma",
//     position: "Team Member @ University Hackathon",
//     text: "Chuda Mani Kakarla excelled as the team lead for our MERN project. Their expertise in both the MERN stack and DevOps practices ensured smooth project execution and exceptional results.",
//     avatar: memojiAvatar1,
//   },
//   {
//     name: "Dr. Kavita Patel",
//     position: "Professor @ University",
//     text: "Chuda Mani Kakarla has consistently demonstrated excellent problem-solving skills in DevOps-related coursework. Their projects show a high level of technical proficiency, particularly in automating processes and managing cloud infrastructure.",
//     avatar: memojiAvatar2,
//   },
//   {
//     name: "Siddharth Verma",
//     position: "Senior Developer @ CoderOne",
//     text: "Chuda Mani Kakarla demonstrated exceptional web development skills during their projects. Their expertise in Next.js and React.js, combined with strong proficiency in HTML, CSS, and Java, resulted in highly effective and visually appealing applications. Their dedication to mastering modern web technologies was evident in their impressive project outcomes.",
//     avatar: memojiAvatar3,
//   },
//   {
//     name: "Chandrmukhi",
//     position: "Software Engineer @ KL University",
//     text: "Chuda Mani Kakarla's expertise in Next.js and React.js, combined with their skills in HTML and CSS, was key to the success of our final year project. Their contribution significantly improved the application's quality and performance.",
//     avatar: memojiAvatar4,
//   },
//   {
//     name:  "Anjali Rao",
//     position:  "Organizer @ Vyuha Startup",
//     text:  "Chuda Mani Kakarla's leadership in the Project Krishna and Godavari River Cleaning initiative was outstanding. Their ability to guide the team through complex tasks and manage the project effectively was crucial. Their technical expertise and leadership significantly contributed to the project's success.",
//     avatar: memojiAvatar5,
//   },
// ];

// export const TestimonialsSection = () => {
//   return (
//     <div className="py-16 lg:py-24">
//       <div className="container">
//         <SectionHeader title="See How My Expertise Shines in Every Project" eyebrow="Real Feedback from Real Collaborators" description="Get a sneak peek into the difference my skills have made. These voices from my collaborators highlight the innovative solutions and leadership that define my work." />
//         <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image : linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
//           <div className="flex gap-8 flex-none">
//             {[...newArray(2).fill(0).map((_ , index) => {
//               <Fragment key={index}>
//               {testimonials.map(testimonial => (
//                 <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
//                   <div className="flex gap-4 items-center">
//                     <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
//                       <Image
//                         src={testimonial.avatar}
//                         alt={testimonial.name}
//                         className="max-h-full"
//                       />
//                     </div>
//                     <div >
//                       <div className="font-semibold">{testimonial.name}</div>
//                       <div className="text-sm text-white/40">{testimonial.position}</div>
//                     </div>
//                   </div>
//                   <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
//                 </Card>
//               ))}
//               </Fragment>
//             })]}
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Rohit Sharma",
    position: "Team Member @ University Hackathon",
    text: "Chuda Mani Kakarla excelled as the team lead for our MERN project. Their expertise in both the MERN stack and DevOps practices ensured smooth project execution and exceptional results.",
    avatar: memojiAvatar1,
  },
  {
    name: "Dr. Kavita Patel",
    position: "Professor @ University",
    text: "Chuda Mani Kakarla has consistently demonstrated excellent problem-solving skills in DevOps-related coursework. Their projects show a high level of technical proficiency, particularly in automating processes and managing cloud infrastructure.",
    avatar: memojiAvatar2,
  },
  {
    name: "Siddharth Verma",
    position: "Senior Developer @ CoderOne",
    text: "Chuda Mani Kakarla demonstrated exceptional web development skills during their projects. Their expertise in Next.js and React.js, combined with strong proficiency in HTML, CSS, and Java, resulted in highly effective and visually appealing applications. Their dedication to mastering modern web technologies was evident in their impressive project outcomes.",
    avatar: memojiAvatar3,
  },
  {
    name: "Chandrmukhi",
    position: "Software Engineer @ KL University",
    text: "Chuda Mani Kakarla's expertise in Next.js and React.js, combined with their skills in HTML and CSS, was key to the success of our final year project. Their contribution significantly improved the application's quality and performance.",
    avatar: memojiAvatar4,
  },
  {
    name: "Anjali Rao",
    position: "Organizer @ Vyuha Startup",
    text: "Chuda Mani Kakarla's leadership in the Project Krishna and Godavari River Cleaning initiative was outstanding. Their ability to guide the team through complex tasks and manage the project effectively was crucial. Their technical expertise and leadership significantly contributed to the project's success.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader title="See How My Expertise Shines in Every Project" eyebrow="Real Feedback from Real Collaborators" description="Get a sneak peek into the difference my skills have made. These voices from my collaborators highlight the innovative solutions and leadership that define my work." />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image : linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]">
            {Array(2).fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
