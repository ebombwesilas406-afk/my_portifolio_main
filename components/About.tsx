 "use client";

 import Image from "next/image";
 import { useMemo, useRef } from "react";
 import Terminal from "@/components/Terminal";
 import useInViewOnce from "@/lib/useInViewOnce";
 import profilePic from "@/assests/profile_pic.png";

 const metadataItems = [
   ["Location", "Butere, Kenya"],
   ["Institution", "Butere Technical Training Institute"],
   ["Course", "Diploma in ICT"],
   ["Focus", "Web Development, Backend Systems, Automation"],
   ["Tech Stack", "Python, Django, JavaScript, SQL"],
   [
     "Current Goal",
     "Learning, building real-world systems, and strengthening core skills"
   ],
   ["Availability", "Open to collaboration, freelance, and internships"]
 ] as const;

 export default function About() {
   const sectionRef = useRef<HTMLElement | null>(null);
   const inView = useInViewOnce(sectionRef);

   const techStack = useMemo(() => {
     const entry = metadataItems.find(([label]) => label === "Tech Stack");
     const value = entry?.[1] ?? "";
     return value
       .split(",")
       .map((s) => s.trim())
       .filter(Boolean);
   }, []);

   return (
     <section
       ref={sectionRef}
       id="about"
       className={`section-shell console-grid reveal-on-scroll ${inView ? "is-revealed" : ""}`}
     >
       <div className="grid gap-6 md:grid-cols-12">
         <div className="md:col-span-6 lg:col-span-7">
           <p className="muted-label">About</p>
           <h2 className="hero-console-title mt-3 text-4xl font-semibold leading-[1.04] md:text-6xl">
             Building practical systems with purpose.
           </h2>
           <p className="mt-6 text-base leading-7 text-[var(--muted)] md:text-[15px]">
             I&apos;m Silas Omulama, a diploma student in ICT at Butere Technical
             Training Institute. I focus on learning and building practical software
             solutions that solve real problems. I am currently strengthening my
             programming and system development skills through hands-on projects in
             web development, backend systems, and automation tools. I value clean
             code, structured logic, and reliable systems that work as intended.
           </p>

           <div className="mt-10 grid gap-4 sm:grid-cols-2">
             <div className="console-tile p-5">
               <div className="flex items-center justify-between gap-3">
                 <p className="muted-label">Project Matrix</p>
                 <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                   stack.map()
                 </span>
               </div>
               <div className="mt-4 flex flex-wrap gap-2">
                 {techStack.map((tag) => (
                   <span
                     key={tag}
                     className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--accent)] ring-1 ring-[var(--surface-border)]"
                   >
                     {tag}
                   </span>
                 ))}
               </div>
             </div>

             <div className="console-tile p-5">
               <p className="muted-label">Personal Information</p>
               <div className="mt-4 grid gap-3 text-sm">
                 <div className="flex items-center justify-between gap-3">
                   <span className="text-[var(--muted)]">Name</span>
                   <span className="status-pulse text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
                     Silas Omulama
                   </span>
                 </div>
                 <div className="flex items-center justify-between gap-3">
                   <span className="text-[var(--muted)]">Date  of Birth</span>
                   <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
                     2004-05-01
                   </span>
                 </div>
                 <div className="flex items-center justify-between gap-3">
                   <span className="text-[var(--muted)]">Gender</span>
                   <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
                     Male
                   </span>
                 </div>
               </div>
             </div>
           </div>

         </div>

         <div className="md:col-span-6 lg:col-span-5">
           <div className="grid gap-6 md:grid-cols-6">
             <div className="console-tile profile-scan group relative md:col-span-6">
               <div className="flex items-center justify-between gap-3 px-5 pt-5">
                 <p className="muted-label">Active Personnel Profile</p>
                 <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                   id: so-001
                 </span>
               </div>
               <div className="p-5 pt-4">
                 <div className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-[var(--surface-border)]">
                   <Image
                     src={profilePic}
                     alt="Silas Omulama profile photo"
                     fill
                     priority
                     sizes="(min-width: 1024px) 420px, (min-width: 768px) 360px, 92vw"
                     className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                   />
                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                 </div>
                 <div className="mt-4 flex items-center justify-between gap-3">
                   <span className="font-ui text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                     clearance
                   </span>
                   <span className="font-ui text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
                     developer
                   </span>
                 </div>
               </div>
             </div>
           </div>
         </div>

        <div className="md:col-span-12">
          <Terminal items={metadataItems} />
        </div>
       </div>
     </section>
   );
 }
