"use client";

import Image from "next/image";
import Taskbar from "./taskbar";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
  SiLinux,
  SiMysql,
  SiVuedotjs,
  SiVuetify,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C#", icon: <span className="font-bold text-purple-500">C#</span> },
  { name: "Linux", icon: <SiLinux /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Vue.js", icon: <SiVuedotjs /> },
  { name: "Vuetify", icon: <SiVuetify /> },
];

const techIcon = {
  "Next.js": <SiNextdotjs />,
  React: <FaReact />,
  Tailwind: <SiTailwindcss />,
  HTML: <FaHtml5 />,
  JavaScript: <FaJs />,
  "C++": <SiCplusplus />,
  Python: <FaPython />,
  Linux: <SiLinux />,
  MySQL: <SiMysql />,
};

const brandColors = {
  JavaScript: "#F7DF1E",
  React: "#61DAFB",
  "Next.js": "#FFFFFF",
  Tailwind: "#06B6D4",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Git: "#F05032",
  Python: "#3776AB",
  "C++": "#00599C",
  MySQL: "#4479A1",
  "Vue.js": "#4FC08D",
  Vuetify: "#1867C0",
};

const projects = [
  {
    title: "Nursing 'Till I Code",
    desc: "Nursing 'Till I Code is a free, open-source site for nursing students, featuring quick-reference formulas and interactive quizzes.",
    link: "https://www.nursingtillicode.org/",
    image: "/nursingtillicode.png",
    tech: ["Next.js", "React", "Tailwind"],
  },
  {
    title: "Trigon Engineering",
    desc: "Modernized an existing site with HTTPS, improved SEO, and responsive design.",
    link: "https://github.com/stephengray12/Trigon-Engineering",
    image: "/trigonengineering.png",
    tech: ["HTML", "JavaScript", "React", "Tailwind"],
  },
  {
    title: "Connect Four",
    desc: "A terminal based Connect four game I built in my programming II class.",
    link: "https://github.com/stephengray12/cpsc2376-Gray/tree/main/projects/project04",
    image: "/connectfour.png",
    tech: ["C++"],
  },
  {
    title: "Building Automation Projects",
    desc: "Planned project to build advanced BACnet networking tools and custom dashboards for building automation engineers.",
    link: "https://github.com/stephengray12/Raspberry_Pi_Projects",
    image: "/raspberrypi.png",
    tech: ["Python", "Linux"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">
    {children}
  </h2>
);

const SocialLinks = ({ size = "text-2xl" }) => (
  <div className={`flex gap-4 mt-4 ${size}`}>
    <a href="https://www.linkedin.com/in/stephen-gray12" target="_blank">
      <FaLinkedin />
    </a>
    <a href="https://github.com/stephengray12" target="_blank">
      <FaGithub />
    </a>
  </div>
);

const SkillBar = ({ skill }) => (
  <div className="flex flex-col items-center justify-center text-center p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition">
    <span
      className="text-3xl mb-2"
      style={{
        color: brandColors[skill.name] || undefined,
        filter:
          brandColors[skill.name] === "#FFFFFF"
            ? "drop-shadow(0 0 2px rgba(0,0,0,.45))"
            : undefined,
      }}
    >
      {skill.icon}
    </span>
    <span className="text-sm font-medium">{skill.name}</span>
  </div>
);

const ProjectCard = ({ project, i }) => (
  <motion.a
    href={project.link}
    target="_blank"
    className="group flex flex-col rounded-2xl border border-neutral-700/60 bg-black/40 p-5 hover:border-blue-400 transition md:h-[420px]"
    initial="hidden"
    whileInView="visible"
    variants={cardVariants}
    custom={i}
  >
    {project.image && (
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-black p-2">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain"
        />
      </div>
    )}

    <h3 className="text-xl font-semibold text-white">{project.title}</h3>

    <div className="mt-2 text-neutral-300 overflow-hidden max-h-[96px] group-hover:overflow-auto">
      {project.desc}
    </div>

    {project.tech && (
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-neutral-700 text-neutral-200 hover:border-blue-400 hover:text-white transition"
          >
            <span
              className="text-sm"
              style={{
                color: brandColors[t] || undefined,
                filter:
                  brandColors[t] === "#FFFFFF"
                    ? "drop-shadow(0 0 2px rgba(0,0,0,.45))"
                    : undefined,
              }}
            >
              {techIcon[t] ?? "🔧"}
            </span>
            {t}
          </span>
        ))}
      </div>
    )}
  </motion.a>
);

export default function Home() {
  const skillsRef = useRef(null);
  useInView(skillsRef);

  return (
    <>
      <Taskbar />

      <main className="pt-24 min-h-screen bg-gray-500 dark:bg-black text-gray-800 dark:text-white px-6 py-12">
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <Image
              src="/profile.PNG"
              alt="Stephen Gray"
              width={300}
              height={150}
              className="rounded-full"
            />

            <div className="text-center sm:text-left">
              <h1 className="text-4xl sm:text-6xl font-bold text-white">
                Hi, I&apos;m Stephen Gray
              </h1>

              <p className="mt-4 text-lg text-gray-300 max-w-xl">
                I’m a Computer Science student and building automation engineer
                focused on software development, distributed systems, and
                real-world problem solving.
              </p>

              <SocialLinks />
            </div>
          </div>
        </section>

        <section className="mb-20" ref={skillsRef}>
          <SectionTitle>Skills</SectionTitle>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((s) => (
              <SkillBar key={s.name} skill={s} />
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-24 mb-20">
          <SectionTitle>About</SectionTitle>

          <div className="max-w-3xl text-white space-y-4 leading-relaxed">
            <p>
              I started out in the electrical trade and spent about seven years
              working as a licensed electrician before moving into building
              automation. Over time I worked my way into engineering roles,
              where I now program and integrate systems for large facilities.
            </p>

            <p>
              Getting into automation is what pushed me toward software. I liked
              the problem-solving side of it and wanted to go deeper, so I went
              back to school for Computer Science. Since then, I’ve been focused
              on building real applications and improving my skills in
              full-stack development.
            </p>

            <p>
              What I enjoy most is working on systems that connect the real
              world with software—things involving networking, automation, and
              distributed systems.
            </p>

            <p className="text-neutral-300">
              Right now I’m looking for a software engineering role or
              internship where I can keep learning and contribute.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} i={i} />
            ))}
          </div>
        </section>

        <section className="mb-20 text-center" id="contact">
          <SectionTitle>Contact Me</SectionTitle>

          <div className="w-full max-w-3xl mx-auto bg-black p-6 rounded-lg shadow-lg text-left">
            <div className="flex flex-col sm:flex-row gap-6 mb-4">
              <Image
                src="/profile.PNG"
                alt="Stephen Gray"
                width={150}
                height={150}
                className="rounded-full border"
              />

              <div>
                <h3 className="text-2xl font-bold text-white">Stephen Gray</h3>
                <p className="text-base text-white">Software Engineer</p>

                <div className="space-y-1 mt-4 text-sm text-white">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:stephengrayjava12@outlook.com"
                      className="text-blue-500"
                    >
                      stephengrayjava12@outlook.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong> (501) 297-8756
                  </p>
                  <p>
                    <strong>Location:</strong> Little Rock, AR
                  </p>

                  <div className="flex gap-4 mt-3 text-2xl">
                    <FaLinkedin />
                    <FaGithub />
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/Stephen_Gray_Resume.pdf"
              download
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Download Resume
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
