import { SPRINTS } from "@external-lab-monorepo/constants";
import { useTask, useTasks } from "@external-lab-monorepo/hooks";
import type { TaskPriority } from "@external-lab-monorepo/types";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDevMenu } from "../../../contexts/DevMenuContext";
import { ROUTES } from "../../../router/routes";
import EditTaskPage from "./EditTaskPage";

const EditTaskContainer = () => {
  const { sprint } = useDevMenu();
  const { taskId } = useParams<{ taskId: string }>();
  const { task, error, loading, fetchTaskData } = useTask(taskId!);
  const { updateTask, deleteTask } = useTasks();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [done, setDone] = useState(false);
  const [priority, setPriority] = useState<TaskPriority>("low");

  useEffect(() => {
    fetchTaskData();
  }, [fetchTaskData]);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDone(task.done);
      setPriority(task.priority ?? "low");
    }
  }, [task]);

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onSwitchDonePress = useCallback(() => {
    setDone((prev) => !prev);
  }, []);

  const onUpdateTaskPress = useCallback(() => {
    const selectedPriority =
      sprint === SPRINTS.SPRINT_4 ? priority : undefined;
    updateTask(
      task!.id,
      title,
      description,
      done,
      [],
      task!.files,
      selectedPriority,
      goBack
    );
  }, [sprint, updateTask, task, title, description, done, priority, goBack]);

  const onDeleteTaskPress = useCallback(() => {
    if (window.confirm("Are you sure? Do you wanna delete the task?")) {
      deleteTask(task!.id, () => navigate(ROUTES.TASKS, { replace: true }));
    }
  }, [deleteTask, task, navigate]);

  return (
    <EditTaskPage
      sprint={sprint}
      title={title}
      description={description}
      done={done}
      priority={priority}
      error={error}
      loading={loading}
      setTitle={setTitle}
      setDescription={setDescription}
      setPriority={setPriority}
      onSwitchDonePress={onSwitchDonePress}
      onUpdateTaskPress={onUpdateTaskPress}
      onDeleteTaskPress={onDeleteTaskPress}
    />
  );
};

export default EditTaskContainer;
