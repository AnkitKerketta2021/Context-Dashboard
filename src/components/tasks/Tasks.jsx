import { useDashboard } from "../../context/DashboardContext";
import TaskItem from "./TaskItem";

function Tasks() {
  const { tasks } = useDashboard();

  return (
    <section className="panel">

      <div className="panel-head">

        <div>
          <p className="eyebrow">TASKS</p>
          <h2>Current work</h2>
        </div>

        <span>
          {tasks.length} items
        </span>

      </div>

      <div className="task-list">

        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))}

      </div>

    </section>
  );
}

export default Tasks;