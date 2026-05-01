import type { TaskPriority as TaskPriorityType } from "@external-lab-monorepo/types";
import "./TaskPriority.css";

interface IProps {
  priority: TaskPriorityType;
  showTitle?: boolean;
}

const TaskPriority = ({ priority, showTitle }: IProps) => {
  const label = priority.charAt(0).toUpperCase() + priority.slice(1);

  return (
    <span className={`task-priority task-priority--${priority}`}>
      {priority === "high" ? "🔴" : "🟢"}
      {showTitle && <span className="task-priority-label">{label}</span>}
    </span>
  );
};

export default TaskPriority;
