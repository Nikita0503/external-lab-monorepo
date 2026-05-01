import "./TaskStatus.css";

interface IProps {
  done: boolean;
}

const TaskStatus = ({ done }: IProps) => {
  return (
    <span className={`task-status ${done ? "task-status--done" : "task-status--active"}`}>
      {done ? "DONE" : "IN PROGRESS"}
    </span>
  );
};

export default TaskStatus;
