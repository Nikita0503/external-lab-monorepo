import { SPRINTS } from "@external-lab-monorepo/constants";
import { useTasks } from "@external-lab-monorepo/hooks";
import type { Task } from "@external-lab-monorepo/types";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDevMenu } from "../../../contexts/DevMenuContext";
import { ROUTES } from "../../../router/routes";
import TasksPage from "./TasksPage";

const TasksContainer = () => {
  const { sprint } = useDevMenu();
  const { tasks, error, loading, fetchTasks, patchTask, deleteTask } =
    useTasks();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const onSwitchDonePress = useCallback(
    (task: Task) => {
      if (sprint === SPRINTS.SPRINT_1 || sprint === SPRINTS.SPRINT_2) {
        return;
      }
      patchTask(task.id, undefined, undefined, !task.done, [], task.files);
    },
    [patchTask, sprint]
  );

  const goToTaskDetails = useCallback(
    (task: Task) => {
      if (sprint === SPRINTS.SPRINT_1 || sprint === SPRINTS.SPRINT_2) {
        return;
      }
      navigate(ROUTES.TASK_DETAILS.replace(":taskId", task.id));
    },
    [navigate, sprint]
  );

  const goToEditTask = useCallback(
    (task: Task) => {
      if (sprint === SPRINTS.SPRINT_1 || sprint === SPRINTS.SPRINT_2) {
        return;
      }
      navigate(ROUTES.EDIT_TASK.replace(":taskId", task.id));
    },
    [navigate, sprint]
  );

  const goToAddTask = useCallback(() => {
    navigate(ROUTES.ADD_TASK);
  }, [navigate]);

  const onDeleteTaskPress = useCallback(
    (task: Task) => {
      if (window.confirm("Are you sure? Do you wanna delete the task?")) {
        deleteTask(task.id);
      }
    },
    [deleteTask]
  );

  return (
    <TasksPage
      tasks={tasks}
      error={error}
      loading={loading}
      fetchTasks={fetchTasks}
      goToTaskDetails={goToTaskDetails}
      goToEditTask={goToEditTask}
      goToAddTask={goToAddTask}
      onDeleteTaskPress={onDeleteTaskPress}
      onSwitchDonePress={onSwitchDonePress}
    />
  );
};

export default TasksContainer;
