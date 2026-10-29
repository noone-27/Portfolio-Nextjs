import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Heading } from "@/components/IdeParts";
import Image from "next/image";
const projects = [
  {
    name: "The Dugout",
    type: "Website Design / Development",
    description:
      "A dedicated website for the cricket community and its events.",
    image: "dugout.png",
    stack: ["Next.js", "React"],
    demo: "https://dugoutgg.vercel.app/",
  },
  {
    name: "StumpEx",
    type: "Discord Bot / API / Website",
    description:
      "Cricket statistics, leaderboards, auctions and a player stock market.",
    image: "stumpex.png",
    stack: ["Node.js", "Discord.js", "MongoDB"],
    demo: "https://stumpexgg.vercel.app/",
  },
  {
    name: "Pixarsart",
    type: "Website / Animations",
    description: "An animated recreation of the Pixarsart homepage.",
    image: "Pixarsart.png",
    stack: ["JavaScript", "CSS", "Animation"],
    demo: "https://pixarsart-homepage.vercel.app/",
    code: "https://github.com/noone-21/Pixarsart-Homepage",
  },
  {
    name: "FD Chats",
    type: "Real-time Messaging",
    description: "A live messaging application using socket connections.",
    image: "FDChats.png",
    stack: ["React", "WebSockets"],
    demo: "https://fd-chats-client.vercel.app/",
    code: "https://github.com/noone-21/FDChats-client",
    server: "https://github.com/noone-21/FDChats-server",
  },
  {
    name: "Text Analyzer",
    type: "Developer Utility",
    description: "Text manipulation and analysis tools.",
    image: "textAnalyzer.png",
    stack: ["JavaScript"],
    demo: "https://text-analyzer.surge.sh/",
    code: "https://github.com/noone-21/TextManipulator",
  },
];
export default function PortfolioPage() {
  return (
    <div className="dev-scroll">
      <section className="dev-section ide-route">
        <Reveal>
          <Heading
            number="04 / PROJECT_DIRECTORY"
            title="Selected projects."
            subtitle="// A few things I've designed, developed, and shipped."
          />
          <div className="dev-project-grid">
            {projects.map((project, i) => (
              <article className="dev-project" key={project.name}>
                <div className="dev-project-image">
                  <Image                  
                    src={`/assets/img/portfolio/${project.image}`}
                    alt={`${project.name} preview`}
                    width={500}
                    height={300}
                  />
                  <span className="dev-project-num">0{i + 1}</span>
                </div>
                <div className="dev-project-body">
                  <div className="dev-project-type">{project.type}</div>
                  <div className="dev-project-name">{project.name}</div>
                  <p>{project.description}</p>
                  <div className="dev-tags">
                    {project.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="ide-project-links">
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live demo ↗
                    </Link>
                    {project.code && (
                      <Link
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source code ↗
                      </Link>
                    )}
                    {project.server && (
                      <Link
                        href={project.server}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Server code ↗
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
