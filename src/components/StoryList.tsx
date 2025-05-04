import { User } from "../types/story";
import "./StoryList.css";

interface StoryListProps {
  users: User[];
  onStoryClick: (userId: string) => void;
}

export const StoryList = ({ users, onStoryClick }: StoryListProps) => {
  return (
    <div className="story-list">
      {users.map((user) => (
        <div
          key={user.id}
          className="story-item"
          onClick={() => onStoryClick(user.id)}
        >
          <div className="story-avatar">
            <img src={user.avatarUrl} alt={user.username} />
          </div>
          <span className="story-username">{user.username}</span>
        </div>
      ))}
    </div>
  );
};
