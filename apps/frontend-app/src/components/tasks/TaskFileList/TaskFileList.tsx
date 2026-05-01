import { useCallback, useState } from "react";
import "./TaskFileList.css";

interface IFile {
  id: number;
  image: string;
}

interface IProps {
  files: IFile[];
}

const TaskFileList = ({ files }: IProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  if (!files || files.length === 0) {
    return null;
  }

  return (
    <div className="task-file-list">
      <p className="task-file-list-title">Attachments</p>
      <div className="task-file-list-grid">
        {files.map((file) => (
          <img
            key={file.id}
            src={`http://localhost:4000/${file.image}`}
            alt="attachment"
            className="task-file-list-img"
            onClick={() => setSelectedImage(`http://localhost:4000/${file.image}`)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="task-file-modal" onClick={closeModal}>
          <div className="task-file-modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Full size"
              className="task-file-modal-img"
            />
            <button className="task-file-modal-close" onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskFileList;
