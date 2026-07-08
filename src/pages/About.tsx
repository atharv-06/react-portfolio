export default function About() {
  return (
    <>
      {/* Section Title */}
      <h2 className="text-2xl font-semibold text-slate-900">
        About Me
      </h2>
      <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />

      {/* Intro Text */}
      <p className="text-slate-600 leading-relaxed max-w-2xl">
        Hi, I’m{" "}
        <span className="text-slate-900 font-medium">
          Atharv Lokhande
        </span>
        , a Computer Engineering graduate with a
        strong interest in software development. I enjoy building scalable web
        applications and solving real-world problems using Java, Python,
        JavaScript, React.js, Node.js, Spring Boot, and SQL.
      </p>

      <p className="text-slate-600 leading-relaxed max-w-2xl mt-4">
         I have developed full-stack applications involving authentication,
        REST APIs, database integration, and responsive user interfaces. I also
        have hands-on experience in automation testing using Selenium
        WebDriver, Mocha, and Chai, along with basic AI and NLP projects using
        Python. I am currently looking for an entry-level Software Engineer
        opportunity where I can contribute, learn, and grow as a developer.
      </p>

      {/* Subheading */}
      <h3 className="mt-8 text-lg font-semibold text-slate-900">
        What I’m Doing
      </h3>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <Card
          title="Frontend Development"
          desc="Building responsive and accessible user interfaces using React, Tailwind CSS, and modern JavaScript."
        />

        <Card
          title="Backend Development"
          desc="Developing REST APIs, handling authentication, and implementing server-side logic."
        />

        <Card
          title="Database & Data Handling"
          desc="Designing schemas and managing data using SQL and NoSQL databases."
        />

        <Card
          title="Tools & Workflow"
          desc="Using Git and GitHub for version control, collaboration, and debugging."
        />
      </div>
    </>
  );
}

function Card({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-indigo-500 transition">
      <h4 className="font-semibold text-slate-900">
        {title}
      </h4>
      <p className="text-slate-600 text-sm mt-2 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
