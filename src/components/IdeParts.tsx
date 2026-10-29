import Link from "next/link";
export function Heading({number,title,subtitle}:{number:string,title:string,subtitle:string}){return <div className="dev-section-heading"><span>{number}</span><h2>{title}</h2><p>{subtitle}</p></div>}
