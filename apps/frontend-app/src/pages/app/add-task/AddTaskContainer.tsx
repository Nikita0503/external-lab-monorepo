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
  const [newFiles, setNewFiles] = useState<File[]>([]);

  const navigate = useNavigate();
  const { createTask } = useTasks();

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onAddFile = useCallback((file: File) => {
    setNewFiles((prev) => [...prev, file]);
  }, []);

  const onDeleteNewFile = useCallback((toDelete: File) => {
    setNewFiles((prev) => prev.filter((f) => f !== toDelete));
  }, []);

  const onCreateTaskPress = useCallback(() => {
    const selectedPriority =
      sprint === SPRINTS.SPRINT_4 ? priority : undefined;
    createTask(title, description, newFiles, selectedPriority, goBack);
  }, [sprint, createTask, title, description, newFiles, priority, goBack]);

  return (
    <AddTaskPage
      sprint={sprint}
      title={title}
      description={description}
      priority={priority}
      newFiles={newFiles}
      setTitle={setTitle}
      setDescription={setDescription}
      setPriority={setPriority}
      onAddFile={onAddFile}
      onDeleteNewFile={onDeleteNewFile}
      onCreateTaskPress={onCreateTaskPress}
    />
  );
};

export default AddTaskContainer;
