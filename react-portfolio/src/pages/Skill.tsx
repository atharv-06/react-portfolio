export default function Skill() {
  return (
    <>
      {/* Section Title */}
      <h2 className="text-2xl font-semibold text-slate-900">
        Skills
      </h2>
      <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-6" />

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        <SkillCard
          title="Frontend"
          skills="React, JavaScript, TypeScript, Tailwind CSS, HTML, CSS"
        />

        <SkillCard
          title="Backend"
          skills="Node.js, Express, Java, Spring Boot, REST APIs"
        />

        <SkillCard
          title="Database"
          skills="PostgreSQL, MongoDB, SQL"
        />

        <SkillCard
          title="Tools & Workflow"
          skills="Git, GitHub, Postman, VS Code, Debugging"
        />
      </div>
    </>
  );
}

/* Skill Card */
function SkillCard({
  title,
  skills,
}: {
  title: string;
  skills: string;
}) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-indigo-500 transition">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>
      <p className="text-slate-600 text-sm mt-2 leading-relaxed">
        {skills}
      </p>
    </div>
  );
}
