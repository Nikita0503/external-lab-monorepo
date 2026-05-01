import "./CommonTasksPage.css";
import type { IProps } from "./CommonTasksPage.types";

const CommonTasksPage = ({
  allTasks,
  error,
  loading,
  moreCommonTasksError,
  moreCommonTasksLoading,
  fetchCommonTasks: _fetchCommonTasks,
  fetchMoreCommonTasks: _fetchMoreCommonTasks,
}: IProps) => {
  return (
    <div className="common-tasks-page">
      <p>Common Tasks count: {allTasks.length}</p>
      <p>Loading: {String(loading)}</p>
      <p>Error: {error ? "yes" : "no"}</p>
      <p>More loading: {String(moreCommonTasksLoading)}</p>
      <p>More error: {moreCommonTasksError ? "yes" : "no"}</p>
    </div>
  );
};

export default CommonTasksPage;
