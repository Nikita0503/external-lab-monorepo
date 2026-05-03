import { useRef } from "react";
import "./UserAvatar.css";

const EMPTY_PHOTO_URL =
  "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg";

interface IProps {
  avatarPreview: string | null;
  onAvatarChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAvatarDelete?: () => void;
  className?: string;
}

const UserAvatar = ({
  avatarPreview,
  onAvatarChange,
  onAvatarDelete,
  className,
}: IProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={`user-avatar-container ${className ?? ""}`}>
      <div className="user-avatar-wrapper">
        <img
          src={avatarPreview || EMPTY_PHOTO_URL}
          alt="Avatar"
          className="user-avatar-img"
        />
        <button
          className="user-avatar-action user-avatar-action--delete"
          onClick={onAvatarDelete}
          title="Delete avatar"
        >
          🗑
        </button>
        <button
          className="user-avatar-action user-avatar-action--edit"
          onClick={() => fileInputRef.current?.click()}
          title="Change avatar"
        >
          ✏️
        </button>
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
