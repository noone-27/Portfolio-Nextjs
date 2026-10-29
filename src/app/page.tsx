"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Terminal,
  Mail,
  Copy,
  Check,
} from "lucide-react";

import "./developer.css";
import Image from "next/image";

const projects = [
  {
    name: "StumpEx",
    type: "Discord Bot / Analytics",
    description:
      "A cricket statistics engine with leaderboards, player ratings, auctions, and a dynamic stock market.",
    stack: ["Node.js", "Discord.js", "MongoDB"],
    image: "/assets/img/portfolio/stumpex.png",
    link: "/portfolio",
  },
  {
    name: "The Dugout",
    type: "Community Platform",
    description:
      "A custom experience built for a cricket-focused Discord community and its tournaments.",
    stack: ["Next.js", "TypeScript", "React"],
    image: "/assets/img/portfolio/dugout.png",
    link: "/portfolio",
  },
  {
    name: "Pixarsart",
    type: "Creative Web Experience",
    description:
      "An expressive, animation-rich website with a focus on visual storytelling and interaction.",
    stack: ["React", "Animation", "UI/UX"],
    image: "/assets/img/portfolio/Pixarsart.png",
    link: "/portfolio",
  },
  {
    name: "FD Chats",
    type: "Realtime Application",
    description:
      "A modern chat interface designed around real-time communication and a clean user experience.",
    stack: ["JavaScript", "WebSockets", "UI"],
    image: "/assets/img/portfolio/FDChats.png",
    link: "/portfolio",
  },
];
const skills = [
  { name: "TypeScript", icon: "typescript.svg" },
  { name: "JavaScript", icon: "javascript.svg" },
  { name: "React", icon: "react.svg" },
  { name: "Next.js", icon: "next.svg" },
  { name: "Node.js", icon: "nodejs.svg" },
  { name: "MongoDB", icon: "mongodb.svg" },
  { name: "Docker", icon: "docker.svg" },
  { name: "Git", icon: "git.svg" },
  { name: "Python", icon: "python.svg" },
  { name: "HTML", icon: "html.svg" },
  { name: "CSS", icon: "css.svg" },
  { name: "Socket.IO", icon: "socketIo.svg" },
];
export default function Home() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText("npm run build-awesome-things");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <>
      <div className="dev-scroll">
        <section className="dev-hero dev-section" id="home">
          <div className="dev-lines">
            01
            <br />
            02
            <br />
            03
            <br />
            04
            <br />
            05
            <br />
            06
            <br />
            07
            <br />
            08
          </div>
          <div className="dev-hero-content">
            <div className="dev-comment">
              {"// Hello world, welcome to my corner of the internet."}
            </div>
            <div className="dev-kicker">
              <span className="dev-dot" /> OPEN TO BUILDING SOMETHING GREAT
            </div>
            <h1>
              Hi, I&apos;m{" "}
              <span>
                Danish
                <br />
                Ahmed.
              </span>
            </h1>
            <div className="dev-role">
              <span className="dev-purple">const</span> role{" "}
              <span className="dev-purple">=</span>{" "}
              <span className="dev-green">
                &quot;Full Stack Developer&quot;
              </span>
              <span className="dev-cursor">▍</span>
            </div>
            <p>
              I turn ideas into functional, thoughtful digital experiences —
              from full-stack applications to automation, bots, and everything
              in between.
            </p>
            <div className="dev-actions">
              <button
                className="dev-primary"
                onClick={() => window.location.assign("/portfolio")}
              >
                Explore my work <ArrowUpRight size={17} />
              </button>
              <button
                className="dev-secondary"
                onClick={() => window.location.assign("/contact")}
              >
                Get in touch <Mail size={16} />
              </button>
            </div>
            <div className="dev-hero-foot">
              <span>
                <span className="dev-green">●</span> Currently coding
              </span>
              <span>
                Based in Pakistan{" "}
                <span className="dev-muted">/ remote-friendly</span>
              </span>
            </div>
          </div>
          <div className="dev-hero-art">
            <div className="dev-code-card">
              <div className="dev-code-head">
                <span>developer.ts</span>
                <span>● ● ●</span>
              </div>
              <pre>
                <span className="dev-purple">interface</span>{" "}
                <span className="dev-yellow">Developer</span> {"{"}
                <br /> name: <span className="dev-yellow">string</span>;<br />{" "}
                passion: <span className="dev-yellow">string[]</span>;<br />{" "}
                coffee: <span className="dev-yellow">boolean</span>;<br />
                {"}"}
                <br />
                <br />
                <span className="dev-purple">const</span>{" "}
                <span className="dev-blue">me</span>: Developer = {"{"}
                <br /> name: <span className="dev-green">&quot;Danish Ahmed&quot;</span>,
                <br /> passion: [<br />{" "}
                <span className="dev-green">&quot;building&quot;</span>,<br />{" "}
                <span className="dev-green">&quot;solving&quot;</span>,<br />{" "}
                <span className="dev-green">&quot;learning&quot;</span>
                <br /> ],
                <br /> coffee: <span className="dev-orange">true</span>
                <br />
                {"}"};
              </pre>
            </div>
            <div className="dev-float-label">&lt;code /&gt; with purpose</div>
          </div>
        </section>
        <section className="dev-section dev-about" id="about">
          <div className="dev-section-heading">
            <span>01 / ABOUT_ME</span>
            <h2>
              The human behind <em>the code.</em>
            </h2>
          </div>
          <div className="dev-about-grid">
            <div>
              <p>
                I&apos;m a full-stack developer who enjoys turning complex
                challenges into clean, intuitive solutions. I care about what
                happens under the hood just as much as what people see on
                screen.
              </p>
              <p>
                Whether it&apos;s a scalable application, a real-time system, or
                a custom Discord experience, I love making things that actually
                work — and work well.
              </p>
              <Link href="/about" className="dev-text-link">
                More about me <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="dev-terminal">
              <div className="dev-terminal-head">
                <Terminal size={15} /> terminal — bash
              </div>
              <div className="dev-terminal-body">
                <div>
                  <span className="dev-green">➜</span>{" "}
                  <span className="dev-blue">~</span> whoami
                </div>
                <div className="dev-output">danish-ahmed</div>
                <div>
                  <span className="dev-green">➜</span>{" "}
                  <span className="dev-blue">~</span> cat interests.txt
                </div>
                <div className="dev-output">
                  Full-stack development
                  <br />
                  Creative problem solving
                  <br />
                  Automation &amp; developer tools
                  <br />
                  Building cool things ✨
                </div>
                <div>
                  <span className="dev-green">➜</span>{" "}
                  <span className="dev-blue">~</span>{" "}
                  <span className="dev-cursor">▍</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="dev-section" id="projects">
          <div className="dev-section-heading">
            <span>02 / SELECTED_WORK</span>
            <h2>
              Things I&apos;ve <em>built.</em>
            </h2>
            <p>
              A selection of projects, experiments, and ideas brought to life.
            </p>
          </div>
          <div className="dev-project-grid">
            {projects.map((p, i) => (
              <Link href={p.link} className="dev-project" key={p.name}>
                <div className="dev-project-image">
                  <Image
                    src={p.image}
                    alt={`${p.name} project preview`}
                    width={400}
                    height={225}
                  />
                  <span className="dev-project-num">0{i + 1}</span>
                </div>
                <div className="dev-project-body">
                  <div className="dev-project-type">{p.type}</div>
                  <div className="dev-project-name">
                    {p.name}
                    <ArrowUpRight size={19} />
                  </div>
                  <p>{p.description}</p>
                  <div className="dev-tags">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/portfolio" className="dev-all-projects">
            View all projects <ArrowUpRight size={17} />
          </Link>
        </section>
        <section className="dev-section" id="skills">
          <div className="dev-section-heading">
            <span>03 / TECH_STACK</span>
            <h2>
              My everyday <em>toolkit.</em>
            </h2>
            <p>Technologies I use to ship ideas into the real world.</p>
          </div>
          <div className="dev-skills">
            {skills.map((s) => (
              <div key={s.name} className="dev-skill">
                <Image
                  width={32}
                  height={32}
                  className="ide-skill-icon"
                  src={`/icons/${s.icon}`}
                  alt=""
                />
                <span>{s.name}</span>
                <span className="dev-skill-plus">+</span>
              </div>
            ))}
          </div>
        </section>
        <section className="dev-section dev-contact" id="contact">
          <div className="dev-section-heading">
            <span>04 / LETS_CONNECT</span>
            <h2>
              Have an idea? <em>Let&apos;s build it.</em>
            </h2>
            <p>
              Open to interesting projects, collaborations, and conversations
              about technology.
            </p>
          </div>
          <div className="dev-contact-actions">
            <Link href="/contact" className="dev-primary">
              Start a conversation <ArrowUpRight size={17} />
            </Link>
            <Link href="/experience" className="dev-secondary">
              View experience <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="dev-copy-line">
            <code>$ npm run build-awesome-things</code>
            <button onClick={copy} aria-label="Copy command">
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </section>
        <div className="dev-bottom">
          © {new Date().getFullYear()} Danish Ahmed{" "}
          <span>Designed with intention. Built with code.</span>
        </div>
      </div>
    </>
  );
}
