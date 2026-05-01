import { useTask, useTasks } from "@external-lab-monorepo/hooks";
import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDevMenu } from "../../../contexts/DevMenuContext";
import { ROUTES } from "../../../router/routes";
import TaskDetailsPage from "./TaskDetailsPage";

const TaskDetailsContainer = () => {
  const { sprint } = useDevMenu();
  const { taskId } = useParams<{ taskId: string }>();
  const { task, error, loading, fetchTaskData } = useTask(taskId!);
  const { deleteTask } = useTasks();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTaskData();
  }, [fetchTaskData]);

  const goToTasks = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onDeleteTaskPress = useCallback(() => {
    if (window.confirm("Are you sure? Do you wanna delete the task?")) {
      deleteTask(task!.id, () => navigate(ROUTES.TASKS, { replace: true }));
    }
  }, [deleteTask, task, navigate]);

  const goToEditTask = useCallback(() => {
    navigate(ROUTES.EDIT_TASK.replace(":taskId", task!.id));
  }, [navigate, task]);

  return (
    <TaskDetailsPage
      sprint={sprint}
      task={task}
      error={error}
      loading={loading}
      goToTasks={goToTasks}
      goToEditTask={goToEditTask}
      onDeleteTaskPress={onDeleteTaskPress}
    />
  );
};

export default TaskDetailsContainer;
