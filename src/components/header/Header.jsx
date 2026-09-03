import { useDashboard } from "../../context/DashboardContext";
import UserChip from "./UserChip";

function Header() {
  const {
    theme,
    notifications,
    toggleTheme,
    toggleNotifications,
  } = useDashboard();

  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-mark">N</span>

        <div>
          <strong>NORTHSTAR</strong>
          <span>Context Dashboard</span>
        </div>
      </div>

      <div className="top-actions">
        <button
          className="icon-button"
          onClick={toggleNotifications}
        >
          {notifications ? "●" : "○"}
        </button>

        <button
          className="theme-button"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>

        <UserChip />
      </div>
    </header>
  );
}

export default Header;