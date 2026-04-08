import type { Skill } from "@/lib/queries";

type SkillTileProps = {
  title: string;
  skills: Skill[];
};

function dots(level: number) {
  return `${"●".repeat(level)}${"○".repeat(5 - level)}`;
}

export default function SkillTile({ title, skills }: SkillTileProps) {
  return (
    <div className="bento-tile md:col-span-2">
      <h3 className="section-title text-2xl md:text-3xl">{title}</h3>
      <div className="mt-5 space-y-4">
        {skills.map((skill) => (
          <div key={skill.id} className="flex items-center justify-between gap-4 text-sm">
            <span>{skill.name}</span>
            <span className="text-[var(--accent)]">{dots(skill.level)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
