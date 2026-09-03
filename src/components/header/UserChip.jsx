import { useDashboard } from "../../context/DashboardContext";

function UserChip() {
  const { user } = useDashboard();

  return (
    <div className="user-chip">
      <span className="avatar">{user.name.charAt(0).toUpperCase() + user.name.charAt(1).toUpperCase()}</span>
      <span>{user.name}</span>
    </div>
  );
}

export default UserChip;