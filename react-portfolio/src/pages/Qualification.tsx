export default function Qualification() {
  return (
    <>
      {/* Section Title */}
      <h2 className="text-2xl font-semibold text-slate-900">
        Qualification
      </h2>
      <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-6" />

      {/* Qualification Grid */}
      <div className="space-y-4 max-w-3xl">
        <QualificationCard
          title="Bachelor of Engineering (Computer Engineering)"
          institute="Savitribai Phule Pune University"
          duration="2021 – 2025"
          desc="Focused on software development, data structures, databases, and web technologies."
        />

        <QualificationCard
          title="Higher Secondary Certificate (12th)"
          institute="Maharashtra State Board"
          duration="2021"
          desc="Studied Physics, Chemistry, Mathematics."
        />

        <QualificationCard
          title="Secondary School Certificate (10th)"
          institute="Maharashtra State Board"
          duration="2019"
          desc="Completed secondary education with a strong foundation in mathematics and science."
        />
      </div>
    </>
  );
}

/* Qualification Card */
function QualificationCard({
  title,
  institute,
  duration,
  desc,
}: {
  title: string;
  institute: string;
  duration: string;
  desc: string;
}) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-indigo-500 transition">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h3 className="font-semibold text-slate-900">
          {title}
        </h3>
        <span className="text-xs text-slate-500 mt-1 md:mt-0">
          {duration}
        </span>
      </div>

      <p className="text-slate-600 text-sm mt-1">
        {institute}
      </p>

      <p className="text-slate-600 text-sm mt-2 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
