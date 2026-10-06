import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import Profile from "@/assets/images/profile.jpg";
import { Reveal } from '@/components/Reveal';

export const HeroSection = () => {
  return (
    <section id='home' className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      {/* Decorative background: kept behind the content and ignored by clicks */}
      <div aria-hidden="true" className='absolute inset-0 -z-10 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        <div className='absolute inset-0 -z-30 opacity-20' style={{ backgroundImage: `url(${grainImage.src})` }}></div>
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>
        <div className='size-[1420px] hero-ring'></div>
        <div className='size-[1620px] hero-ring'></div>
        <div className='size-[1820px] hero-ring'></div>
        <div className='size-[2020px] hero-ring'></div>

        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={179}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={88} >
          <SparkleIcon className="size-3 rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <SparkleIcon className="size-2 rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <SparkleIcon className="size-3 rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={850} rotation={-100}>
  <StarIcon className="size-32 text-emerald-300" />
</HeroOrbit>
<HeroOrbit size={590} rotation={45}>
  <StarIcon className="size-9 text-emerald-300" />
</HeroOrbit>
<HeroOrbit size={630} rotation={110}>
  <StarIcon className="size-12 text-emerald-300" />
</HeroOrbit>
<HeroOrbit size={470} rotation={-60}>
  <SparkleIcon className="size-7 text-emerald-300/20" />
</HeroOrbit>
<HeroOrbit size={500} rotation={160}>
  <SparkleIcon className="size-6 text-emerald-300/20" />
</HeroOrbit>
<HeroOrbit size={760} rotation={200}>
  <StarIcon className="size-11 text-emerald-300" />
</HeroOrbit>
<HeroOrbit size={800} rotation={-130}>
  <SparkleIcon className="size-4 text-emerald-300/20" />
</HeroOrbit>
<HeroOrbit size={620} rotation={-75}>
  <SparkleIcon className="size-5 text-emerald-300/20" />
</HeroOrbit>
<HeroOrbit size={530} rotation={250}>
  <StarIcon className="size-6 text-emerald-300" />
</HeroOrbit>
<HeroOrbit size={780} rotation={-30}>
  <SparkleIcon className="size-8 text-emerald-300/20" />
</HeroOrbit>
<HeroOrbit size={830} rotation={300}>
  <StarIcon className="size-15 text-emerald-300" />
</HeroOrbit>
<HeroOrbit size={700} rotation={85}>
  <SparkleIcon className="size-4 text-emerald-300/20" />
</HeroOrbit>
<HeroOrbit size={650} rotation={-170}>
  <SparkleIcon className="size-7 text-emerald-300/20" />
</HeroOrbit>
<HeroOrbit size={620} rotation={195}>
  <StarIcon className="size-9 text-emerald-300" />
</HeroOrbit>
<HeroOrbit size={550} rotation={115}>
  <SparkleIcon className="size-10 text-emerald-300/20" />
</HeroOrbit>
<HeroOrbit size={600} rotation={-190}>
  <SparkleIcon className="size-5 text-emerald-300/20" />
</HeroOrbit>
<HeroOrbit size={740} rotation={225}>
  <StarIcon className="size-12 text-emerald-300" />
</HeroOrbit>

      </div>

      <div className="container">
        <Reveal className='flex flex-col items-center relative'>
          {/* Gradient ring + glow; the bounce lives on the wrapper so the photo itself can be zoomed */}
          <div className='group/photo relative size-40 md:size-52 mb-6 rounded-full p-1 bg-gradient-to-br from-emerald-300 to-sky-400 shadow-[0_0_60px_-10px] shadow-emerald-300/50 animate-jump'>
            <div className='relative size-full rounded-full overflow-hidden bg-gray-800 ring-4 ring-gray-900'>
              <Image
                src={Profile}
                alt="Chuda Mani Kakarla"
                fill
                priority
                sizes="(min-width: 768px) 208px, 160px"
                className='object-cover transition-transform duration-700 ease-out group-hover/photo:scale-105'
              />
            </div>
          </div>
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>
            </div>
            <div className='text-sm font-semibold'>Currently working at Emscale</div>
          </div>
        </Reveal>
        <Reveal delay={0.15} className='max-w-lg mx-auto'>
          <h1 className='font-serif text-4xl md:text-6xl text-center mt-8 tracking-wide'>Hi, I&apos;m Chuda Mani Kakarla</h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>AI Intern at Emscale and a full-stack + DevOps developer. I build full-stack products with React, Next.js and Spring Boot, and automate how they ship with Docker, Kubernetes, Jenkins and AWS.</p>
        </Reveal>
        <Reveal delay={0.3} className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <a href="#projects" className='btn-secondary'>
            <span>Explore My Work</span>
            <ArrowDown className="size-4 icon-down" />
          </a>
          <a href="#contact" className='btn-primary'>
            <span>👋</span>
            <span>Let&apos;s Connect</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
};
