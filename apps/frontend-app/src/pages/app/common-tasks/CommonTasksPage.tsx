import { memo } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import UniversalError from "../../../components/UniversalError/UniversalError";
import UniversalLoading from "../../../components/UniversalLoading/UniversalLoading";
import "./CommonTasksPage.css";
import type { IProps } from "./CommonTasksPage.types";

const CommonTasksPage = ({
  allTasks,
  error,
  loading,
  hasMore,
  moreCommonTasksError: _moreCommonTasksError,
  moreCommonTasksLoading,
  fetchCommonTasks,
  fetchMoreCommonTasks,
}: IProps) => {
  return (
    <div className="common-tasks-page">
      <h2 className="common-tasks-title">Common Tasks</h2>

      {loading && <UniversalLoading loadingText="Loading common tasks..." />}

      {!loading && !!error && (
        <UniversalError
          errorText="Something went wrong"
          buttonText="Retry"
          onHandleError={fetchCommonTasks}
        />
      )}

      {!loading && !error && (
        <>
          <div className="common-tasks-list">
            {allTasks.map((task) => (
              <div key={task.id} className="common-task-item">
                <span className="common-task-title">{task.title}</span>
              </div>
            ))}
            {allTasks.length === 0 && (
              <p className="common-tasks-empty">No common tasks found.</p>
            )}
          </div>

          {hasMore && (
            <div className="common-tasks-load-more">
              <CustomButton onClick={fetchMoreCommonTasks}>
                {moreCommonTasksLoading ? "Loading..." : "Load more"}
              </CustomButton>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default memo(CommonTasksPage);
