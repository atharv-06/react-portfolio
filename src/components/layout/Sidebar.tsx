export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static z-50
          h-full md:h-auto
          w-80 bg-white border-r border-slate-200
          px-6 py-8 flex flex-col
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Close button (mobile) */}
        <button
          onClick={onClose}
          className="md:hidden self-end mb-6 text-slate-400 text-sm"
        >
          ✕
        </button>

        {/* Avatar */}
        <div className="flex flex-col items-center text-center">
          <div className="w-28 h-28 rounded-2xl bg-linear-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-3xl font-semibold text-white shadow-sm">
            A
          </div>

          <h1 className="mt-4 text-lg font-semibold text-slate-900 tracking-tight">
            Atharv Lokhande
          </h1>

          <span className="mt-1 text-sm text-slate-500">
            Full Stack Developer
          </span>
        </div>

        <hr className="my-8 border-slate-200" />

        {/* Contact Info */}
        <div className="space-y-5 text-sm">
          <Info label="Email" value="atharvlokhande.09@gmail.com" />
          <Info label="Phone" value="+91 801067XXXX" />
          <Info label="Location" value="Pune, India" />
          <Info
            label="LinkedIn"
            value="https://www.linkedin.com/in/atharv-lokhande-8a743925b/"
          />
          <Info label="GitHub" value="https://github.com/atharv-06" />
        </div>
      </aside>
    </>
  );
}

/* Info Row */
function Info({ label, value }: { label: string; value: string }) {
  const link =
    label === "Email"
      ? `mailto:${value}`
      : label === "Phone"
      ? `tel:${value.replace(/\s+/g, "")}`
      : label === "LinkedIn" || label === "GitHub"
      ? value
      : null;

  return (
    <div>
      <p className="text-[11px] uppercase tracking-widest text-slate-400">
        {label}
      </p>

      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-slate-700
            hover:text-indigo-600
            transition
            break-all
          "
        >
          {value}
        </a>
      ) : (
        <p className="text-slate-700 break-all">
          {value}
        </p>
      )}
    </div>
  );
}
