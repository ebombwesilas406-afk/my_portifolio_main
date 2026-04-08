export const dynamic = "force-dynamic";

import SiteFrame from "@/components/SiteFrame";
import Skills from "@/components/Skills";
import { getSkills } from "@/lib/queries";

export default async function SkillsPage() {
  const skills = await getSkills();

  return (
    <main>
      <SiteFrame>
        <Skills skills={skills} />
      </SiteFrame>
    </main>
  );
}
