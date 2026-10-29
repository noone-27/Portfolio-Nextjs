import Reveal from "@/components/Reveal";
import {Heading} from "@/components/IdeParts";
const experience = [
    {
      role: "Software Engineer",
      company: "Fluide Services, LTD",
      duration: "June 2025 – present",
      description:
        "I Work on different tools and technolgies, from using automation tools like n8n to building full fledged web apps using MERN Stack and Nextjs. I also work on fixing bugs and improving performance of existing applications.",
      logo: "/assets/img/company/FluideServices.png",
      href: "",
    },
    {
      role: "MERN Stack Developer",
      company: "Upvave",
      duration: "March 2025 – May 2025",
      description:
        "Learned new technologies like Docker and Graphql. Worked on fixing errors in a real-world Next Js project. Nextjs, MERN Stack, Docker, Graphql, Web Sockets.",
      logo: "/assets/img/company/upvave.png",
      href: "https://upvave.com",
    },
    {
      role: "Javascript Trainee",
      company: "Pixarsart",
      duration: "February 2025 – March 2025",
      description:
        "Worked as a JS Trainee for 2 Weeks, learnt different concept of Javascript, industry norms and built a clone of company website's homepage along with animations.",
      logo: "/assets/img/company/pixarsart.png",
      href: "https://pixarsart.com/",
    },
    {
      role: "React Js Intern",
      company: "Techscale",
      duration: "March 2024 – May 2024",
      description:
        "Reported to my team lead. Worked on a Danish/Norwegian site, Dansk Tandforsikring, adding new features and tackling site issues. Learned technologies like NextJs and VueJs.",
      logo: "/assets/img/company/techScaleLogo.jpg",
      href: "https://techscale.io",
    },
    {
      role: "Customer Service Executive",
      company: "Ibex",
      duration: "January 2024 – February 2024",
      description:
        "Provided customer support and resolved inquiries through phone and email. Maintained accurate customer records and ensured a high level of customer satisfaction.",
      logo: "/assets/img/company/ibex..png",
      href: "https://www.ibex.co/",
    },
    {
      role: "Frontend Developer Intern",
      company: "Hawk Logix",
      duration: "July 2022 – August 2022",
      description:
        "Reported to my team lead. Worked on ReactJs projects and developed web apps using the MERN Stack. Learned ReactJs-NodeJs integration and completed my first freelance project with a 5-star review.",
      logo: "/assets/img/company/hawklogixLogo.png",
      href: "https://hawklogix.com",
    },
    {
      role: "Contact Validator",
      company: "TransData",
      duration: "April 2018 – April 2019",
      description:
        "Worked as a contact validator, ensuring the accuracy and validity of contact information. This role involved verifying and updating contact details over phone calls to maintain a high-quality database for the company.",
      logo: "/assets/img/company/transData.png",
      href: "https://transdata.biz/",
    },
  ];
export default function ExperiencePage(){return <div className="dev-scroll"><section className="dev-section ide-route"><Reveal><Heading number="02 / CAREER_LOG" title="Experience & contributions." subtitle="// A chronological record of the teams and products I've worked with."/><div className="ide-timeline">{experience.map((e,i)=><article className="ide-entry" key={i}><div className="ide-entry-logo"><img src={e.logo.replace("ibex..png","ibex.png")} alt="" /></div><div><div className="ide-entry-meta">{e.duration} <span>· entry_{String(i+1).padStart(2,"0")}</span></div><h3>{e.role}</h3><strong>{e.company}</strong><p>{e.description}</p></div></article>)}</div></Reveal></section></div>}
