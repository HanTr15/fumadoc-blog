"use client";

import {
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Shield,
  Bug,
  Network,
  Terminal,
  Code2,
  FileCode,
  Database,
  Cpu
} from "lucide-react";
const socials = [
  {
    icon: Github,
    url: "https://github.com/HanTr15",
  },
  {
    icon: Linkedin,
    url: "https://linkedin.com/in/hamdantr",
  },
  {
    icon: Youtube,
    url: "https://youtube.com/@Ryosta",
  },
  {
    icon: Instagram,
    url: "https://instagram.com/hamdanntr",
  },
];

import { TypeAnimation } from "react-type-animation";

function SkillCard({
  icon,
  title,
  level
}: {
  icon: React.ReactNode;
  title: string;
  level: number;
}) {
  return (
    <div className="
      p-6 rounded-2xl border
      border-yellow-300/40 dark:border-yellow-500/20
      bg-white/60 dark:bg-black/40
      backdrop-blur-md
      hover:shadow-[0_0_30px_rgba(234,179,8,0.35)]
      transition-all duration-300
    ">

      <div className="flex items-center gap-3 mb-4 text-yellow-700 dark:text-yellow-400">
        <div className="p-2 rounded-lg bg-white dark:bg-black border border-yellow-300/40 dark:border-yellow-500/30">
          {icon}
        </div>
        <h4 className="font-semibold">{title}</h4>
      </div>

      <div className="w-full bg-yellow-200 dark:bg-yellow-900/40 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-yellow-500 dark:bg-yellow-400 transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>

      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
        {level}% proficiency
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="
      min-h-screen transition-colors duration-500
      bg-gradient-to-br
      from-yellow-100 via-yellow-50 to-white
      dark:from-[#0f0f0f] dark:via-[#111] dark:to-black
      text-black dark:text-white
    ">

      {/* HERO */}
      <section id="home" className="max-w-6xl mx-auto px-6 py-24">
        <div className="
          relative rounded-3xl p-10 md:p-16
          bg-gradient-to-br
          from-yellow-200/70 via-yellow-100/40 to-white/40
          dark:from-yellow-500/10 dark:via-yellow-400/5 dark:to-transparent
          backdrop-blur-xl
          border border-yellow-300/50 dark:border-yellow-500/20
          transition-all duration-500
        ">

          <div className="space-y-8">

            <span className="px-4 py-1 text-sm bg-yellow-100 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 rounded-full border border-yellow-300/50 dark:border-yellow-500/30">
              personal blog website
            </span>
            <div className="space-y-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hello All,
              <br />
              <span className="text-yellow-700 dark:text-yellow-400">
                <TypeAnimation
                  sequence={[
                    "My Name is Hamdan Trisnawan",
                    2000,
                    "Also Known As ryosta",
                    2000,
                    "I'm a Cyber Security Enthusiast",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>

            <p className="text-gray-700 dark:text-gray-400 max-w-xl">
              This web is built using Next.js and Fumadocs.
            </p>

            <div className="flex gap-4 pt-4 flex-wrap">
              {socials.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
  p-3 rounded-full
  border border-yellow-300/50 dark:border-yellow-500/30
  bg-white/70 dark:bg-black/40
  hover:bg-yellow-500 hover:text-white
  hover:shadow-[0_0_15px_rgba(234,179,8,0.6)]
  transition duration-300
"


                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>


          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="space-y-8 text-center md:text-left">

          <span className="inline-block px-4 py-1 text-sm rounded-full border border-yellow-400/40 text-yellow-400">
            About Me
          </span>

          <p className="text-1xl md:text-2xl leading-relaxed max-w-1xl mx-auto md:mx-0">
            I'm Hamdan Trisnawan, also known as ryosta. A student who is deeply interested in Cyber Security and software development. I enjoy breaking things to understand how they work — then rebuilding them better and more secure. Currently, I am actively learning programming and continuously improving my skills in security research and system analysis. I am also a CTF player, regularly practicing problem-solving and participating in Capture The Flag challenges to sharpen my technical abilities and security mindset.
          </p>

        </div>

        {/* FOTO DI BAWAH */}
        <div className="mt-16 flex justify-center">
          <img
            src="/me.jpeg"
            alt="me"
            className="
        w-72 sm:w-96 md:w-[420px] lg:w-[500px]
        rounded-3xl
        object-cover
        shadow-2xl
        grayscale
        hover:grayscale-0
        transition duration-500
      "
          />
        </div>

      </section>


      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold">
            Tools & Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Technologies and security tools I work with.
          </p>
        </div>

        {/* SECURITY */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-yellow-700 dark:text-yellow-400">
            <Shield size={20} /> Security Tools
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            <SkillCard icon={<Bug size={20} />} title="Burp Suite" level={85} />
            <SkillCard icon={<Network size={20} />} title="Nmap" level={80} />
            <SkillCard icon={<Terminal size={20} />} title="Metasploit" level={70} />
            <SkillCard icon={<Shield size={20} />} title="Wireshark" level={75} />
          </div>
        </div>

        {/* PROGRAMMING */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-yellow-700 dark:text-yellow-400">
            <Code2 size={20} /> Programming
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            <SkillCard icon={<FileCode size={20} />} title="Python" level={60} />
            <SkillCard icon={<Code2 size={20} />} title="JavaScript" level={75} />
            <SkillCard icon={<Database size={20} />} title="SQL" level={70} />
            <SkillCard icon={<Cpu size={20} />} title="Linux" level={90} />
          </div>
        </div>

      </section>

    </main>
  );
}
