import { useDashboard } from "../../context/DashboardContext";

function SidebarStatus() {
  const { user, toggleOnline } = useDashboard();

  return (
    <div className="sidebar-bottom">

      <div className="status">

        <i className={user.online ? "live" : ""} />

        <div>
          <strong>
            {user.online ? "Available" : "Away"}
          </strong>

          <small>Team status</small>
        </div>

        <button onClick={toggleOnline}>
          ↻
        </button>

      </div>

      <p className="project-label">
        PROJECT 14
      </p>

      <small>
        Context + Reducer
      </small>

    </div>
  );
}

export default SidebarStatus;