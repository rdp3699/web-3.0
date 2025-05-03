import darkSaasLandingPage from "@/assets/images/tesla.png";
import lightSaasLandingPage from "@/assets/images/game.png";
import aiStartupLandingPage from "@/assets/images/covid.png";
import CheckIcon from '@/assets/icons/check-circle.svg';
import ArrowUp from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { TapeSection } from "./Tape";
import { TestimonialsSection } from "./Testimonials";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2022",
    title: "Tesla Clone",
    results: [
      { title: "Built UI using reusable React components and props" },
      { title: "Incorporated icons for a professional look" },
      { title: "Deployed the application using Firebase" },
    ],
    link: "https://tesla-clone-333.web.app",
    image: darkSaasLandingPage,
  },
  {
    company: "Personal Project",
    year: "2021",
    title: "Covid19-Screening Application",
    results: [
      { title: "Built a responsive web app for employee health monitoring" },
      { title: "Implemented frontend using HTML, CSS, JavaScript" },
      { title: "Used Node.js and MongoDB for backend and data storage" },
    ],
    link: "https://covid19-screening-app23.herokuapp.com",
    image: aiStartupLandingPage,
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "Game Database",
    results: [
      { title: "Developed a game info site using Angular CLI and public APIs" },
      { title: "Used HTML, CSS for responsive layout and styling" },
      { title: "Hosted on Firebase for easy access" },
    ],
    link: "https://game-database-306.web.app",
    image: lightSaasLandingPage,
  }
];

export const ProjectsSection = ({id}:{id:string}) => {
  return (
    <section id={id} className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader title="Featured Projects" eyebrow="Real World Results" description="See how i transformed concepts into engaging digital experiences."/>
        <div className="mt-10 flex flex-col g-20 md:mt-20">
          {portfolioProjects.map((project,projectIndex) => (
            <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky mb-20" style={{top:`calc(64px + ${projectIndex * 40}px)`,}}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
              <div className="bg-gradient-to-r from-emerald-300 t-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result) => (
                  <li className="flex gap-2 text-sm text-white/50 md:text-base">
                    <CheckIcon className='size-5 md:size-6' />
                    <span> {result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"><span>View Live Site</span><ArrowUp /></button>
              </a>
              </div>
              <div className="relative">
              <img className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:h-full lg:absolute lg:max-w-none" src={project.image.src} alt={project.title} />
              </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <TapeSection/>
      {/* <TestimonialsSection/> */}
    </section>
  );
};
