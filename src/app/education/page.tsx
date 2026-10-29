import Reveal from "@/components/Reveal";
import {Heading} from "@/components/IdeParts";
const education = [
    {
      degree: "Masters of Science",
      major: "Data Science",
      institution: "University of Management and Technology",
      year: "2026 – present",
      logo: "/assets/img/institution/UmtLogo.png", // Add your logo path here
    },
    {
      degree: "Bachelors of Science",
      major: "Computer Science",
      institution: "University of Management and Technology",
      year: "2019 – 2023",
      logo: "/assets/img/institution/UmtLogo.png", // Add your logo path here
    },
    {
      degree: "Intermediate",
      major: "ICS",
      institution: "Punjab Group of Colleges",
      year: "2017 – 2019",
      logo: "/assets/img/institution/punjabLogo.png",
    },
    {
      degree: "Matriculation",
      major: "Computer",
      institution: "Beaconhouse School System",
      year: "2015 – 2017",
      logo: "/assets/img/institution/bssLogo.png",
    },
  ];
export default function EducationPage(){return <div className="dev-scroll"><section className="dev-section ide-route"><Reveal><Heading number="03 / LEARNING_LOG" title="Education & foundations." subtitle="// Academic milestones that shaped my approach to engineering."/><div className="ide-timeline">{education.map((e,i)=><article className="ide-entry" key={i}><div className="ide-entry-logo"><img src={e.logo} alt="" /></div><div><div className="ide-entry-meta">{e.year} <span>· record_{String(i+1).padStart(2,"0")}</span></div><h3>{e.degree} — {e.major}</h3><strong>{e.institution}</strong></div></article>)}</div></Reveal></section></div>}
