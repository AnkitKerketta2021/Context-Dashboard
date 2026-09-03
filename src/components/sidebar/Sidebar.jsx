import SidebarStatus from "./SidebarStatus";
import Workspace from "./Workspace";

function Sidebar({ active, setActive }) {
  const items = [
    ["Overview", "⌂"],
    ["Projects", "◈"],
    ["Tasks", "✓"],
    ["Team", "◎"],
    ["Settings", "⚙"],
  ];

  return (
    <aside className="sidebar">

      <Workspace />

      <nav>
        <p>WORKSPACE</p>

        {items.map(([name, icon]) => (
          <button
            key={name}
            className={active === name ? "active" : ""}
            onClick={() => setActive(name)}
          >
            <span>{icon}</span>
            {name}
          </button>
        ))}
      </nav>

      <SidebarStatus />

    </aside>
  );
}

export default Sidebar;