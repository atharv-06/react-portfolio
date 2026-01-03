import { NavLink } from "react-router-dom";

const tabs = [
  { name: "About", path: "/" },
  { name: "Skills", path: "/skill" },
  { name: "Projects", path: "/projects" },
  { name: "Qualification", path: "/qualification" },
  { name: "Contact", path: "/contact" },
];

export default function Tabs() {
  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.path}
          className={({ isActive }) =>
            `flex-1 text-center py-2 rounded-xl text-sm font-medium transition-all
            ${
              isActive
                ? "bg-indigo-500 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </div>
  );
}
