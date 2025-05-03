import { useState } from "react";
import { StoryViewerProps } from "../types/story";
import "./StoryModal.css";

const STORY_DURATION = 5000; // 5 seconds

export const StoryModal = ({
  users,
  initialUserId,
  initialStoryId,
}: StoryViewerProps) => {
  const [currentUserId, setCurrentUserId] = useState(initialUserId);
  const [currentStoryId, setCurrentStoryId] = useState(initialStoryId);
  const [isLoading, setIsLoading] = useState(true);

  const currentUser = users.find((user) => user.id === currentUserId)!;
  const currentStory = currentUser.stories.find(
    (story) => story.id === currentStoryId
  )!;

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handlePrevious = () => {};

  const handleNext = () => {};

  return (
    <div className="story-viewer">
      <div className="story-content">
        {isLoading && <div className="story-loading">Loading...</div>}
        <img
          src={currentStory.imageUrl}
          alt="Story"
          className={"story-image"}
          onLoad={handleImageLoad}
        />
        <div className="story-navigation">
          <div className="story-nav-left" onClick={handlePrevious} />
          <div className="story-nav-right" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};
