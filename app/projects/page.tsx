import Projects from "@/components/Projects";
import SiteFrame from "@/components/SiteFrame";
import { fallbackProjects } from "@/lib/content";
import { getProjects } from "@/lib/queries";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main>
      <SiteFrame>
        <Projects projects={projects.length ? projects : fallbackProjects} />
      </SiteFrame>
    </main>
  );
}
