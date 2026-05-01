import type { TaskPriority } from "@external-lab-monorepo/types";
import "./TaskPrioritySelector.css";

interface IProps {
  priority: TaskPriority;
  selectPriority: (priority: TaskPriority) => void;
}

const TaskPrioritySelector = ({ priority, selectPriority }: IProps) => {
  return (
    <div className="priority-selector">
      <label className="priority-selector-label">Task priority</label>
      <div className="priority-selector-options">
        <button
          className={`priority-selector-option priority-selector-option--low ${priority === "low" ? "priority-selector-option--selected-low" : ""}`}
          onClick={() => selectPriority("low")}
        >
          🟢 Low
        </button>
        <button
          className={`priority-selector-option priority-selector-option--high ${priority === "high" ? "priority-selector-option--selected-high" : ""}`}
          onClick={() => selectPriority("high")}
        >
          🔴 High
        </button>
      </div>
    </div>
  );
};

export default TaskPrioritySelector;
