import { useRef } from "react";
import "./TaskFileEditor.css";

interface IExistingFile {
  id: number;
  image: string;
}

interface IProps {
  existingFiles?: IExistingFile[];
  newFiles?: File[];
  onAddFile?: (file: File) => void;
  onDeleteExistingFile?: (file: IExistingFile) => void;
  onDeleteNewFile?: (file: File) => void;
}

const TaskFileEditor = ({
  existingFiles = [],
  newFiles = [],
  onAddFile,
  onDeleteExistingFile,
  onDeleteNewFile,
}: IProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onAddFile) {
      onAddFile(file);
    }
    e.target.value = "";
  };

  return (
    <div className="task-file-editor">
      <p className="task-file-editor-title">Attachments</p>
      <div className="task-file-editor-grid">
        {existingFiles.map((file) => (
          <div key={file.id} className="task-file-editor-item">
            <img
              src={`http://localhost:4000/${file.image}`}
              alt="attachment"
              className="task-file-editor-img"
            />
            {onDeleteExistingFile && (
              <button
                className="task-file-editor-delete"
                onClick={() => onDeleteExistingFile(file)}
              >
                ✕
              </button>
            )}
          </div>
        ))}
        {newFiles.map((file, index) => (
          <div key={`new-${index}`} className="task-file-editor-item">
            <img
              src={URL.createObjectURL(file)}
              alt="new attachment"
              className="task-file-editor-img"
            />
            {onDeleteNewFile && (
              <button
                className="task-file-editor-delete"
                onClick={() => onDeleteNewFile(file)}
              >
                ✕
              </button>
            )}
          </div>
        ))}
        {onAddFile && (
          <button
            className="task-file-editor-add"
            onClick={() => fileInputRef.current?.click()}
          >
            +
          </button>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="task-file-editor-input"
      />
    </div>
  );
};

export default TaskFileEditor;
