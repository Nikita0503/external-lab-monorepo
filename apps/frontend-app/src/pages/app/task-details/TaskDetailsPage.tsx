import { SPRINTS } from "@external-lab-monorepo/constants";
import { memo } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import TaskFileList from "../../../components/tasks/TaskFileList/TaskFileList";
import TaskPriority from "../../../components/tasks/TaskPriority/TaskPriority";
import TaskStatus from "../../../components/tasks/TaskStatus/TaskStatus";
import UniversalError from "../../../components/UniversalError/UniversalError";
import UniversalLoading from "../../../components/UniversalLoading/UniversalLoading";
import "./TaskDetailsPage.css";
import type { IProps } from "./TaskDetailsPage.types";

const TaskDetailsPage = ({
  sprint,
  task,
  error,
  loading,
  goToTasks,
  goToEditTask,
  onDeleteTaskPress,
}: IProps) => {
  return (
    <div className="task-details-page">
      {loading && <UniversalLoading loadingText="Task is loading..." />}

      {!loading && !!error && (
        <UniversalError
          errorText="Something went wrong. Probably task was not found"
          buttonText="Go to Task List"
          onHandleError={goToTasks}
        />
      )}

      {!loading && !error && task && (
        <div className="task-details-card">
          <h2 className="task-details-title">{task.title}</h2>
          <p className="task-details-description">{task.description}</p>

          <div className="task-details-meta">
            <TaskStatus done={task.done} />
            {sprint === SPRINTS.SPRINT_4 && task.priority && (
              <TaskPriority priority={task.priority} showTitle />
            )}
          </div>

          <TaskFileList files={task.files} />

          <div className="task-details-buttons">
            <CustomButton onClick={onDeleteTaskPress}>Delete</CustomButton>
            <CustomButton onClick={goToEditTask}>Edit</CustomButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(TaskDetailsPage);
