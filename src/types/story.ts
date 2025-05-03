export interface Story {
  id: string;
  imageUrl: string;
  timestamp: number;
}

export interface User {
  id: string;
  username: string;
  avatarUrl: string;
  stories: Story[];
}

export interface StoryViewerProps {
  users: User[];
  initialUserId: string;
  initialStoryId: string;
  onClose: () => void;
}
