import { SPRINTS } from "@external-lab-monorepo/constants";
import { useTasks } from "@external-lab-monorepo/hooks";
import type { TaskPriority } from "@external-lab-monorepo/types";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDevMenu } from "../../../contexts/DevMenuContext";
import AddTaskPage from "./AddTaskPage";

const AddTaskContainer = () => {
  const { sprint } = useDevMenu();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<TaskPriority>("low");

  const navigate = useNavigate();
  const { createTask } = useTasks();

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onCreateTaskPress = useCallback(() => {
    const selectedPriority =
      sprint === SPRINTS.SPRINT_4 ? priority : undefined;
    createTask(title, description, [], selectedPriority, goBack);
  }, [sprint, createTask, title, description, priority, goBack]);

  return (
    <AddTaskPage
      sprint={sprint}
      title={title}
      description={description}
      priority={priority}
      setTitle={setTitle}
      setDescription={setDescription}
      setPriority={setPriority}
      onCreateTaskPress={onCreateTaskPress}
    />
  );
};

export default AddTaskContainer;
