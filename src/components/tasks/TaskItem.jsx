import { useDashboard } from "../../context/DashboardContext";

function TaskItem({ task }) {
  const { setTaskStatus } = useDashboard();

  return (
    <div className="task">

      <b
        className={`priority ${task.priority.toLowerCase()}`}
      >
        {task.priority}
      </b>

      <div>
        <strong>{task.title}</strong>
        <small>{task.project}</small>
      </div>

      <select
        value={task.status}
        onChange={(event) =>
          setTaskStatus(task.id, event.target.value)
        }
      >
        {["In progress", "Review", "Done"].map((status) => (
          <option key={status}>
            {status}
          </option>
        ))}
      </select>

    </div>
  );
}

export default TaskItem;