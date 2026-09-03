import { Activity, useMemo } from "react";
import { useDashboard } from "../../context/DashboardContext";
import Tasks from "../tasks/Tasks";
import Stat from "./Stat";



function Overview() {
  const { tasks } = useDashboard();

  const stats = useMemo(() => {
    const total = tasks.length;

    const done = tasks.filter(
      (task) => task.status === "Done"
    ).length;

    const active = tasks.filter(
      (task) => task.status !== "Done"
    ).length;

    const high = tasks.filter(
      (task) => task.priority === "High"
    ).length;

    return {
      total,
      done,
      active,
      high,
    };
  }, [tasks]);

  return (
    <>
      <section className="stats">

        <Stat
          label="Total tasks"
          value={stats.total}
          detail="Across workspace"
        />

        <Stat
          label="Completed"
          value={stats.done}
          detail={`${Math.round(
            (stats.done / stats.total) * 100
          )}% completion`}
        />

        <Stat
          label="Active"
          value={stats.active}
          detail="Needs attention"
        />

        <Stat
          label="High priority"
          value={stats.high}
          detail="Priority items"
        />

      </section>

      <section className="grid">
        <Tasks />
        <Activity />
      </section>
    </>
  );
}

export default Overview;