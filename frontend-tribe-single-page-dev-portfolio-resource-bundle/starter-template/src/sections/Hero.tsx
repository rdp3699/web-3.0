import Image from 'next/image';
import memojiImage from '@/assets/images/memoji-computer.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import { HeroOrbit } from '@/components/HeroOrbit';
import StartIcon from '@/assets/icons/star.svg';


export const Hero = ({id}:{id:string}) => {
  return (
    <section id={id} className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip pointer-events-none'>
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent">
      <div
        className='absolute insert-0 -z-30 opacity-5 pointer-events-none'
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <HeroOrbit size={800} rotation={-72}>
        <StartIcon className="size-28 text-emerald-300"/>
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20}>
        <StartIcon className="size-12 text-emerald-300"/>
      </HeroOrbit>
      <HeroOrbit size={760} rotation={-210}>
        <StartIcon className="size-12 text-emerald-300"/>
      </HeroOrbit>
      <HeroOrbit size={460} rotation={-30}>
        <StartIcon className="size-8 text-emerald-300 opacity-8"/>
      </HeroOrbit>
      <HeroOrbit size={260} rotation={-230}>
        <StartIcon className="size-6 text-emerald-300 opacity-10"/>
      </HeroOrbit>
      <HeroOrbit size={660} rotation={-230}>
        <StartIcon className="size-6 text-emerald-300 opacity-4"/>
      </HeroOrbit>
      <HeroOrbit size={840} rotation={-230}>
        <StartIcon className="size-28 text-emerald-300 opacity-3"/>
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144}>
        <StartIcon className="size-14 text-emerald-300 opacity-10"/>
      </HeroOrbit>
      <HeroOrbit size={610} rotation={104}>
        <StartIcon className="size-14 text-emerald-300 opacity-10"/>
      </HeroOrbit>
      <HeroOrbit size={610} rotation={204}>
        <StartIcon className="size-14 text-emerald-300 opacity-10"/>
      </HeroOrbit>
      <HeroOrbit size={110} rotation={104}>
        <StartIcon className="size-14 text-emerald-300 opacity-10"/>
      </HeroOrbit>
      <HeroOrbit size={390} rotation={-90}>
        <StartIcon className="size-14 text-emerald-300 "/>
      </HeroOrbit>
      </div>
      <div className="container">
        <div className='flex flex-col items-center'>
          <Image src={memojiImage} className="size-[100px]" alt="Person peeking from behind laptop" />
          <div className='bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className='text-sm font-medium'>Available for New Projects</div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>🚀 Hi, I&apos;m Rutvik!</h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
             <span className="text-blue-400"></span> with{" "}
            <span className="text-green-400">3+ years of experience</span> in{" "}
            <span className="text-yellow-400">systems automation, cloud tech, and cybersecurity</span>.
            Passionate about <span className="text-purple-400">building secure and scalable solutions</span>,
            I’m constantly evolving in the ever-changing tech world. Let’s connect and innovate! 🌍🔗✨
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-6 pointer-events-auto'>
          <button className='inline-flex items-center gap-2 border border-white/15  px-6 h-12 rounded-xl min-w-48 pointer-events-auto z-10'>
            <span className='font-semibold'>
            <a
            href="#projects">
           Explore My Work
           </a></span>
            <ArrowDown className='size-4' />
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl min-w-48 pointer-events-auto z-10'>
          <a
            href="#contact">
            <span>👋</span>
            <span className='font-semibold'>Let&apos;s Connect</span>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};
