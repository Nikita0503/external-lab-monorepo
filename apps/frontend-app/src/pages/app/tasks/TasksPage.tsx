import { SPRINTS } from "@external-lab-monorepo/constants";
import { memo } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import TaskListItem from "../../../components/tasks/TaskListItem/TaskListItem";
import UniversalError from "../../../components/UniversalError/UniversalError";
import UniversalLoading from "../../../components/UniversalLoading/UniversalLoading";
import { useDevMenu } from "../../../contexts/DevMenuContext";
import "./TasksPage.css";
import type { IProps } from "./TasksPage.types";

const TasksPage = ({
  tasks,
  error,
  loading,
  fetchTasks,
  goToTaskDetails,
  goToEditTask,
  goToAddTask,
  onDeleteTaskPress,
  onSwitchDonePress,
}: IProps) => {
  const { sprint } = useDevMenu();

  return (
    <div className="tasks-page">
      <div className="tasks-header">
        <div>
          <h2 className="tasks-header-title">Hello, there</h2>
          <p className="tasks-header-count">
            You have {tasks.length} {tasks.length === 1 ? "task" : "tasks"} here
          </p>
        </div>
        <CustomButton onClick={goToAddTask} className="tasks-add-button">
          + Add task
        </CustomButton>
      </div>

      {loading && <UniversalLoading loadingText="Tasks are loading..." />}

      {!loading && !!error && (
        <UniversalError
          errorText="Something went wrong"
          buttonText="Update Task List"
          onHandleError={fetchTasks}
        />
      )}

      {!loading && !error && (
        <div className="tasks-list">
          {tasks.map((task) => (
            <TaskListItem
              key={task.id}
              task={task}
              showPriority={sprint === SPRINTS.SPRINT_4}
              goToTaskDetails={goToTaskDetails}
              goToEditTask={goToEditTask}
              onDeleteTaskPress={onDeleteTaskPress}
              onSwitchDonePress={onSwitchDonePress}
            />
          ))}
          {tasks.length === 0 && (
            <p className="tasks-empty">No tasks yet. Add your first one!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default memo(TasksPage);
