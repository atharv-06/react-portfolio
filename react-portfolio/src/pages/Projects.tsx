export default function Projects() {
  return (
    <>
      {/* Section Title */}
      <h2 className="text-2xl font-semibold text-slate-900">
        Projects
      </h2>
      <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-6" />

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
        
        <ProjectCard
          title="AI Resume Analyzer & Job Matcher"
          desc="This project analyzes resumes, extracts key skills, and helps match candidates with suitable job roles. It was built to understand how NLP can be used in real hiring problems."
          tech="Python, NLP, Machine Learning, Flask"
          link="https://github.com/atharv-06/AI-Resume-Analyzer-Job-Matcher"
        />

        <ProjectCard
          title="XKCD Email Subscription System"
          desc="A backend project that allows users to subscribe and receive XKCD comics through email. It helped me learn email automation, scheduling, and backend validation."
          tech="Node.js, Express, Email Services"
          link="https://github.com/atharv-06/XKCD-Email-Subscription-System"
        />

        <ProjectCard
          title="Online Notes Sharing Web App"
          desc="A simple web app where users can create, store, and share notes securely. This project helped me understand authentication, CRUD operations, and full-stack flow."
          tech="React, Node.js, MongoDB"
          link="https://github.com/atharv-06/Online-Notes-Sharing-Web-App"
        />
      </div>
    </>
  );
}

/* Project Card */
function ProjectCard({
  title,
  desc,
  tech,
  link,
}: {
  title: string;
  desc: string;
  tech: string;
  link: string;
}) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-indigo-500 transition">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <p className="text-slate-600 text-sm mt-2 leading-relaxed">
        {desc}
      </p>

      <p className="text-slate-500 text-xs mt-3">
        <span className="font-medium text-slate-700">
          Tech:
        </span>{" "}
        {tech}
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-sm font-medium text-indigo-500 hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  );
}
