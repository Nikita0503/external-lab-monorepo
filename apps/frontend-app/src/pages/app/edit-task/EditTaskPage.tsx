import "./EditTaskPage.css";
import type { IProps } from "./EditTaskPage.types";

const EditTaskPage = ({
  sprint: _sprint,
  title,
  description,
  done,
  priority,
  error,
  loading,
  setTitle: _setTitle,
  setDescription: _setDescription,
  setPriority: _setPriority,
  onSwitchDonePress: _onSwitchDonePress,
  onUpdateTaskPress: _onUpdateTaskPress,
  onDeleteTaskPress: _onDeleteTaskPress,
}: IProps) => {
  return (
    <div className="edit-task-page">
      <p>Title: {title || "—"}</p>
      <p>Description: {description || "—"}</p>
      <p>Done: {String(done)}</p>
      <p>Priority: {priority}</p>
      <p>Loading: {String(loading)}</p>
      <p>Error: {error ? "yes" : "no"}</p>
    </div>
  );
};

export default EditTaskPage;
