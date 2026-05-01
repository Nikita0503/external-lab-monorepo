import "./TasksPage.css";
import type { IProps } from "./TasksPage.types";

const TasksPage = ({
  tasks,
  error,
  loading,
  fetchTasks: _fetchTasks,
  goToTaskDetails: _goToTaskDetails,
  goToEditTask: _goToEditTask,
  goToAddTask: _goToAddTask,
  onDeleteTaskPress: _onDeleteTaskPress,
  onSwitchDonePress: _onSwitchDonePress,
}: IProps) => {
  return (
    <div className="tasks-page">
      <p>Tasks count: {tasks.length}</p>
      <p>Loading: {String(loading)}</p>
      <p>Error: {error ? "yes" : "no"}</p>
    </div>
  );
};

export default TasksPage;
