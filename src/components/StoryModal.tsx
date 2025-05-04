import { StoryViewerProps } from "../types/story";
import "./StoryModal.css";
import { useStoryViewer } from "../hooks/useStoryViewer";

export const StoryModal = ({
  users,
  initialUserId,
  initialStoryId,
  onClose,
}: StoryViewerProps) => {
  const {
    currentUser,
    currentStory,
    currentStoryIndex,
    isLoading,
    startProgress,
    isPaused,
    error,
    handleNext,
    handlePrevious,
    handleImageLoad,
    handleImageAbort,
    handleImageError,
    togglePause,
  } = useStoryViewer({
    users,
    initialUserId,
    initialStoryId,
    onClose,
  });

  const handleAnimationEnd = () => {
    if (!isPaused) {
      handleNext();
    }
  };

  return (
    <div className="story-viewer">
      <div className="story-header">
        <div className="story-user-info">
          <img
            src={currentUser.avatarUrl}
            alt={currentUser.username}
            className="story-user-avatar"
          />
          <span className="story-user-name">{currentUser.username}</span>
        </div>
        <div className="story-controls">
          <button className="story-pause-button" onClick={togglePause}>
            {isPaused ? "▶" : "⏸"}
          </button>
          <button className="story-close-button" onClick={onClose}>
            ×
          </button>
        </div>
      </div>

      <div className="story-progress">
        {currentUser.stories.map((story, index) => (
          <div
            key={`${story.id}-${currentStory.id}-${startProgress}`}
            className={`story-progress-bar ${
              story.id === currentStory.id ? "active" : ""
            } ${index < currentStoryIndex ? "completed" : ""} ${
              story.id === currentStory.id && startProgress ? "start" : ""
            } ${story.id === currentStory.id && isPaused ? "paused" : ""}`}
            onAnimationEnd={
              story.id === currentStory.id ? handleAnimationEnd : undefined
            }
          />
        ))}
      </div>

      <div className="story-content">
        {isLoading && <div className="story-loading" />}
        {error && <div className="story-error">{error}</div>}
        <img
          src={currentStory.imageUrl}
          alt="Story"
          className={`story-image ${isLoading ? "hidden" : ""}`}
          onLoad={handleImageLoad}
          onAbort={handleImageAbort}
          onError={handleImageError}
        />
        <div className="story-navigation">
          <div className="story-nav-left" onClick={handlePrevious} />
          <div className="story-nav-right" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};
