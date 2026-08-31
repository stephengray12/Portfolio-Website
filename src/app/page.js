"use client";

import Image from "next/image";
import Taskbar from "./taskbar";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  FaJs,
  FaReact,
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
  SiTypescript,
  SiDotnet,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C#", icon: <span className="font-bold text-purple-500">C#</span> },
  { name: "Linux", icon: <SiLinux /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Vue.js", icon: <SiVuedotjs /> },
  { name: ".NET", icon: <SiDotnet /> },
];

const techIcon = {
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  React: <FaReact />,
  Tailwind: <SiTailwindcss />,
  "C++": <SiCplusplus />,
  Python: <FaPython />,
  Linux: <SiLinux />,
  MySQL: <SiMysql />,
  "Vue.js": <SiVuedotjs />,
  Vuetify: <SiVuetify />,
  "C#": <span className="font-bold text-purple-500">C#</span>,
  ".NET": <SiDotnet />,
};

const brandColors = {
  TypeScript: "#3178C6",
  React: "#61DAFB",
  "Next.js": "#FFFFFF",
  Tailwind: "#06B6D4",
  Git: "#F05032",
  Python: "#3776AB",
  "C++": "#00599C",
  MySQL: "#0e61a1",
  "Vue.js": "#11c511",
  Vuetify: "#49ff01",
  ".NET": "#775dd4",
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
    tech: ["React", "Tailwind"],
  },
  {
    title: "RouteOps",
    desc: "Full-stack logistics platform built with Vue.js, .NET, and MySQL to explore route operations, supply chain management, and tools for small businesses. *Project is in progress as I have free time to work on it while going through school.*",
    link: "https://github.com/stephengray12/RouteOps",
    image: "/raspberrypi.png",
    tech: ["Vue.js", ".NET", "MySQL"],
  },
  {
    title: "UniFi Switch Automation",
    desc: "Python application for monitoring and controlling UniFi switch PoE ports through the UniFi API.",
    link: "https://github.com/stephengray12/unifi-switch-management",
    image: "/unifi_image.png",
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
                Hi, I&apos;m Stephen Gray!
              </h1>

              <p className="mt-4 text-lg text-gray-300 max-w-xl">
                I'm a Computer Science student and automation engineer at Molex with a
                passion for software development, Linux, and open-source
                technology. I enjoy building applications, automating systems,
                and figuring out how things work. When I'm not coding, I enjoy
                experimenting with computers and electronics and learning new
                technologies.
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
          <SectionTitle>About Me</SectionTitle>

          <div className="max-w-3xl text-white space-y-4 leading-relaxed">
            <p>
              My career started in the construction and electrical trades before
              I transitioned into building automation, where I was introduced to
              programming, networking, and integrating real-world systems.
            </p>
            
            <p>
              Today, I work at Molex in an engineering environment where I
              develop automation tools with Python and work with Linux,
              networking, and data center technologies. I use tools like GitLab
              and PyCharm as part of my daily development workflow.
            </p>
            <p>
              I'm currently pursuing a Computer Science degree at UA Little Rock
              and hold certifications in Python and .NET. I'm also expanding
              into full-stack development using TypeScript, .NET, and MySQL,
              with a strong interest in Linux and open-source technologies.
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
