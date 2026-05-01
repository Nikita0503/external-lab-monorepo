import type { Task } from "@external-lab-monorepo/types";
import "./TaskListItem.css";

interface IProps {
  task: Task;
  showPriority?: boolean;
  goToTaskDetails: (task: Task) => void;
  goToEditTask: (task: Task) => void;
  onDeleteTaskPress: (task: Task) => void;
  onSwitchDonePress: (task: Task) => void;
}

const TaskListItem = ({
  task,
  showPriority,
  goToTaskDetails,
  goToEditTask,
  onDeleteTaskPress,
  onSwitchDonePress,
}: IProps) => {
  return (
    <div className="task-list-item" onClick={() => goToTaskDetails(task)}>
      <button
        className="task-list-item-checkbox"
        onClick={(e) => {
          e.stopPropagation();
          onSwitchDonePress(task);
        }}
      >
        {task.done ? "✅" : "⬜"}
      </button>

      {showPriority && task.priority && (
        <span className={`task-list-item-priority task-list-item-priority--${task.priority}`}>
          {task.priority === "high" ? "🔴" : "🟢"}
        </span>
      )}

      <span className={`task-list-item-title ${task.done ? "task-list-item-title--done" : ""}`}>
        {task.title}
      </span>

      <div className="task-list-item-actions">
        <button
          className="task-list-item-action"
          onClick={(e) => {
            e.stopPropagation();
            onDeleteTaskPress(task);
          }}
          title="Delete"
        >
          🗑
        </button>
        <button
          className="task-list-item-action"
          onClick={(e) => {
            e.stopPropagation();
            goToEditTask(task);
          }}
          title="Edit"
        >
          ✏️
        </button>
      </div>
    </div>
  );
};

export default TaskListItem;
