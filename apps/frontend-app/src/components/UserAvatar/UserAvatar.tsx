import { useRef } from "react";
import "./UserAvatar.css";

interface IProps {
  avatarPreview: string | null;
  onAvatarChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserAvatar = ({ avatarPreview, onAvatarChange }: IProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="user-avatar-container">
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
