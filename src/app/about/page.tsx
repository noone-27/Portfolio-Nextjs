import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Heading } from "@/components/IdeParts";
import Image from "next/image";
const skills = [
  ["React", "react.svg"],
  ["TypeScript", "typescript.svg"],
  ["JavaScript", "javascript.svg"],
  ["Next.js", "next.svg"],
  ["Node.js", "nodejs.svg"],
  ["MongoDB", "mongodb.svg"],
  ["Docker", "docker.svg"],
  ["Python", "python.svg"],
  ["Git", "git.svg"],
  ["HTML", "html.svg"],
  ["CSS", "css.svg"],
  ["Socket.IO", "socketIo.svg"],
];
export default function AboutPage() {
  return (
    <div className="dev-scroll">
      <section className="dev-section ide-route">
        <Reveal>
          <Heading
            number="01 / ABOUT_ME"
            title="The developer behind the code."
            subtitle="// More than syntax — curiosity, creativity, and building things that matter."
          />
          <div className="ide-about">
            <div>
              <div className="dev-comment">{"// README.md"}</div>
              <h3>Hi, I&apos;m Danish Ahmed.</h3>
              <p>
                I&apos;m a full-stack developer focused on building practical,
                polished digital products. I enjoy solving complex problems,
                designing approachable interfaces, and making software reliable
                from frontend to backend.
              </p>
              <p>
                My work spans React and Next.js applications, Node.js services,
                real-time systems, Discord bots, and automation.
              </p>
              <Link className="dev-primary" href="/contact">
                Let&apos;s collaborate ↗
              </Link>
            </div>
            <div className="dev-terminal">
              <div className="dev-terminal-head">terminal — about</div>
              <div className="dev-terminal-body">
                <div>
                  <span className="dev-green">➜</span> cat developer.json
                </div>
                <pre>{`{\n  "name": "Danish Ahmed",\n  "role": "Full Stack Developer",\n  "focus": ["Web", "Automation", "Bots"],\n  "location": "Pakistan"\n}`}</pre>
              </div>
            </div>
          </div>
          <div className="dev-section-heading ide-subhead">
            <span>TECHNOLOGIES / STACK</span>
            <h2>Tools I work with.</h2>
          </div>
          <div className="dev-skills">
            {skills.map(([name, icon]) => (
              <div className="dev-skill" key={name}>
                <Image
                  className="ide-skill-icon"
                  src={`/icons/${icon}`}
                  alt=""
                  width={50}
                  height={50}
                />
                <span>{name}</span>
                <span className="dev-skill-plus">+</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
