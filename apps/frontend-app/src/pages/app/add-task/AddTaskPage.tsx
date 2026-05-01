import { SPRINTS } from "@external-lab-monorepo/constants";
import { memo } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import TaskFileEditor from "../../../components/tasks/TaskFileEditor/TaskFileEditor";
import TaskPrioritySelector from "../../../components/tasks/TaskPrioritySelector/TaskPrioritySelector";
import TextInputWithHint from "../../../components/TextInputWithHint/TextInputWithHint";
import "./AddTaskPage.css";
import type { IProps } from "./AddTaskPage.types";

const AddTaskPage = ({
  sprint,
  title,
  description,
  priority,
  newFiles,
  setTitle,
  setDescription,
  setPriority,
  onAddFile,
  onDeleteNewFile,
  onCreateTaskPress,
}: IProps) => {
  return (
    <div className="add-task-page">
      <h2 className="add-task-title">Add new task</h2>

      <div className="add-task-card">
        <TextInputWithHint
          hint="Task title"
          value={title}
          onChange={setTitle}
          className="text-input-field--dark"
        />
        <TextInputWithHint
          hint="Task description"
          value={description}
          onChange={setDescription}
          className="text-input-field--dark"
        />
        {sprint === SPRINTS.SPRINT_4 && (
          <TaskPrioritySelector
            priority={priority}
            selectPriority={setPriority}
          />
        )}

        <TaskFileEditor
          newFiles={newFiles}
          onAddFile={onAddFile}
          onDeleteNewFile={onDeleteNewFile}
        />

        <div className="add-task-button">
          <CustomButton onClick={onCreateTaskPress}>Save</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default memo(AddTaskPage);
