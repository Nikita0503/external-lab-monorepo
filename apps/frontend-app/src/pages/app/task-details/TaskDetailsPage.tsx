import "./TaskDetailsPage.css";
import type { IProps } from "./TaskDetailsPage.types";

const TaskDetailsPage = ({
  sprint: _sprint,
  task,
  error,
  loading,
  goToTasks: _goToTasks,
  goToEditTask: _goToEditTask,
  onDeleteTaskPress: _onDeleteTaskPress,
}: IProps) => {
  return (
    <div className="task-details-page">
      <p>Task: {task?.title ?? "—"}</p>
      <p>Loading: {String(loading)}</p>
      <p>Error: {error ? "yes" : "no"}</p>
    </div>
  );
};

export default TaskDetailsPage;
