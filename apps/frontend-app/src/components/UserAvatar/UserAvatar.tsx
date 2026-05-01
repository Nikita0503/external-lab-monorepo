import { useRef } from "react";
import "./UserAvatar.css";

interface IProps {
  avatarPreview: string | null;
  onAvatarChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const UserAvatar = ({ avatarPreview, onAvatarChange, className }: IProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={`user-avatar-container ${className ?? ""}`}>
      <div
        className="user-avatar"
        onClick={() => fileInputRef.current?.click()}
      >
        {avatarPreview ? (
          <img
            src={avatarPreview}
            alt="Avatar"
            className="user-avatar-img"
          />
        ) : (
          <span className="user-avatar-placeholder">📷</span>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onAvatarChange}
        className="user-avatar-input"
      />
    </div>
  );
};

export default UserAvatar;
