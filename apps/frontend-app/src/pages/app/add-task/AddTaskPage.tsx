import "./AddTaskPage.css";
import type { IProps } from "./AddTaskPage.types";

const AddTaskPage = ({
  sprint: _sprint,
  title,
  description,
  priority,
  setTitle: _setTitle,
  setDescription: _setDescription,
  setPriority: _setPriority,
  onCreateTaskPress: _onCreateTaskPress,
}: IProps) => {
  return (
    <div className="add-task-page">
      <p>Title: {title || "—"}</p>
      <p>Description: {description || "—"}</p>
      <p>Priority: {priority}</p>
    </div>
  );
};

export default AddTaskPage;
