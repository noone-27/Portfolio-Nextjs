"use client";
import {useTheme} from "next-themes";
import {usePathname,useRouter} from "next/navigation";
import {useCallback,useEffect,useRef,useState} from "react";
import {Code2,Menu,X,GitBranch,ChevronDown,Terminal,Files,Sun,Moon} from "lucide-react";
import "../app/developer.css";

const files=[
 {path:"/",name:"index.tsx",kind:"TS"},
 {path:"/about",name:"about.md",kind:"#"},
 {path:"/experience",name:"experience.ts",kind:"TS"},
 {path:"/education",name:"education.json",kind:"{}"},
 {path:"/portfolio",name:"projects.tsx",kind:"TS"},
 {path:"/contact",name:"contact.tsx",kind:"TS"},
];
const storageKey="danish-portfolio-open-tabs-v1";
const known=(path:string)=>files.some(file=>file.path===path);

export default function DeveloperShell({children}:{children:React.ReactNode}){
 const pathname=usePathname();
 const {resolvedTheme,setTheme}=useTheme();
 const [themeMounted,setThemeMounted]=useState(false);
 useEffect(()=>setThemeMounted(true),[]);
 const router=useRouter();
 const [mobileOpen,setMobileOpen]=useState(false);
 const [tabs,setTabs]=useState<string[]>([]);
 const [active,setActive]=useState<string|null>(null);
 const [ready,setReady]=useState(false);
 const suppressed=useRef<string|null>(null);

 useEffect(()=>{
   let restored:string[]=[];
   try{
     const stored=JSON.parse(sessionStorage.getItem(storageKey)||"[]");
     if(Array.isArray(stored))restored=stored.filter((item):item is string=>typeof item==="string"&&known(item));
   }catch{}
   const unique=[...new Set(restored)];
   const initial=known(pathname)&&!unique.includes(pathname)?[...unique,pathname]:unique;
   setTabs(initial);
   setActive(known(pathname)?pathname:initial[0]||null);
   setReady(true);
 // Initialization only; navigation is handled by the pathname effect below.
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[]);

 useEffect(()=>{
   if(!ready)return;
   if(suppressed.current===pathname){suppressed.current=null;return;}
   if(!known(pathname))return;
   setTabs(previous=>previous.includes(pathname)?previous:[...previous,pathname]);
   setActive(pathname);
 },[pathname,ready]);

 useEffect(()=>{
   if(ready)sessionStorage.setItem(storageKey,JSON.stringify(tabs));
 },[tabs,ready]);

 const openTab=useCallback((path:string)=>{
   setTabs(previous=>previous.includes(path)?previous:[...previous,path]);
   setActive(path);
   setMobileOpen(false);
   if(path!==pathname)router.push(path);
 },[pathname,router]);

 const closeTab=useCallback((path:string)=>{
   const next=tabs.filter(tab=>tab!==path);
   setTabs(next);
   if(active!==path)return;
   const index=tabs.indexOf(path);
   const replacement=next[Math.min(index,next.length-1)]||null;
   setActive(replacement);
   if(replacement&&replacement!==pathname)router.push(replacement);
   if(!replacement) suppressed.current=pathname;
 },[active,pathname,router,tabs]);

 const activeFile=files.find(file=>file.path===active);
 return <div className="dev-shell">
   <header className="dev-topbar">
     <div className="dev-traffic"><i/><i/><i/></div>
     <div className="ide-brand"><Code2 size={15}/> danish-ahmed / portfolio</div>
     <div className="ide-header-actions"><button type="button" className="ide-theme-toggle" onClick={()=>setTheme(resolvedTheme==="dark"?"light":"dark")} aria-label={themeMounted?(resolvedTheme==="dark"?"Switch to light theme":"Switch to dark theme"):"Toggle color theme"} title="Toggle light / dark theme">{themeMounted&&resolvedTheme==="light"?<Moon size={17}/>:<Sun size={17}/>}</button><button className="dev-mobile-menu" aria-label={mobileOpen?"Close file explorer":"Open file explorer"} aria-expanded={mobileOpen} onClick={()=>setMobileOpen(value=>!value)}>{mobileOpen?<X size={20}/>:<Menu size={20}/>}</button></div>
   </header>
   <div className="dev-layout">
     <aside className={`dev-sidebar ${mobileOpen?"dev-open":""}`}>
       <div className="dev-sidebar-label"><Files size={13}/> EXPLORER</div>
       <div className="dev-tree-title"><ChevronDown size={13}/> DANISH.DEV</div>
       <nav className="dev-tree-items" aria-label="Portfolio files">
         {files.map(file=><button type="button" key={file.path} onClick={()=>openTab(file.path)} className={active===file.path?"dev-selected":""} aria-current={active===file.path?"page":undefined}><span className="dev-file-icon">{file.kind}</span>{file.name}{tabs.includes(file.path)&&<span className="ide-open-indicator" aria-label="Open">●</span>}</button>)}
       </nav>
       <div className="ide-sidebar-foot"><Terminal size={14}/> workspace ready</div>
     </aside>
     <main className="dev-main">
       <div className="ide-tab-strip" role="tablist" aria-label="Open portfolio files">
         {tabs.map(path=>{
           const file=files.find(item=>item.path===path)!;
           return <div className={`ide-editor-tab ${active===path?"ide-editor-tab-active":""}`} key={path} role="tab" aria-selected={active===path}>
             <button type="button" className="ide-tab-select" onClick={()=>openTab(path)} title={`Open ${file.name}`}><span className="dev-file-icon">{file.kind}</span><span>{file.name}</span></button>
             <button type="button" className="ide-tab-close" aria-label={`Close ${file.name}`} title={`Close ${file.name}`} onClick={()=>closeTab(path)}><X size={14}/></button>
           </div>;
         })}
       </div>
       {activeFile ? children : <div className="ide-empty-editor"><Code2 size={55} strokeWidth={1}/><h2>No files open</h2><p>Select a file from Explorer to open it in a new tab.</p><button onClick={()=>openTab("/")} type="button">Open index.tsx</button></div>}
     </main>
   </div>
   <footer className="dev-status"><span><GitBranch size={13}/> main</span><span>● All systems operational</span><span className="dev-status-right">{activeFile?.name||"No active editor"} · UTF-8 · Next.js</span></footer>
 </div>;
}
