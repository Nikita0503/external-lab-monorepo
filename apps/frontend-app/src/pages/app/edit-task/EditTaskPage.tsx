import { SPRINTS } from "@external-lab-monorepo/constants";
import { memo } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import TaskFileEditor from "../../../components/tasks/TaskFileEditor/TaskFileEditor";
import TaskPrioritySelector from "../../../components/tasks/TaskPrioritySelector/TaskPrioritySelector";
import TextInputWithHint from "../../../components/TextInputWithHint/TextInputWithHint";
import UniversalError from "../../../components/UniversalError/UniversalError";
import UniversalLoading from "../../../components/UniversalLoading/UniversalLoading";
import "./EditTaskPage.css";
import type { IProps } from "./EditTaskPage.types";

const EditTaskPage = ({
  sprint,
  title,
  description,
  done,
  priority,
  error,
  loading,
  existingFiles,
  newFiles,
  setTitle,
  setDescription,
  setPriority,
  onSwitchDonePress,
  onUpdateTaskPress,
  onDeleteTaskPress,
  onAddFile,
  onDeleteExistingFile,
  onDeleteNewFile,
}: IProps) => {
  return (
    <div className="edit-task-page">
      <div className="edit-task-header">
        <h2 className="edit-task-title">Edit task</h2>
        <button className="edit-task-delete-link" onClick={onDeleteTaskPress}>
          Delete
        </button>
      </div>

      {loading && <UniversalLoading loadingText="Task is loading..." />}

      {!loading && !!error && (
        <UniversalError
          errorText="Something went wrong. Probably task was not found"
          buttonText="Go Back"
          onHandleError={() => window.history.back()}
        />
      )}

      {!loading && !error && (
        <div className="edit-task-card">
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

          <div className="edit-task-done" onClick={onSwitchDonePress}>
            <span className="edit-task-done-label">Done</span>
            <span className="edit-task-done-icon">{done ? "✅" : "⬜"}</span>
          </div>

          <TaskFileEditor
            existingFiles={existingFiles}
            newFiles={newFiles}
            onAddFile={onAddFile}
            onDeleteExistingFile={onDeleteExistingFile}
            onDeleteNewFile={onDeleteNewFile}
          />

          <div className="edit-task-button">
            <CustomButton onClick={onUpdateTaskPress}>Save</CustomButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(EditTaskPage);
