import { useState, useEffect, useCallback } from "react";
import { User, Story } from "../types/story";

interface UseStoryViewerProps {
  users: User[];
  initialUserId: string;
  initialStoryId: string;
  onClose: () => void;
}

interface UseStoryViewerReturn {
  currentUser: User;
  currentStory: Story;
  currentStoryIndex: number;
  isLoading: boolean;
  startProgress: boolean;
  isPaused: boolean;
  error: string | null;
  handleNext: () => void;
  handlePrevious: () => void;
  handleImageLoad: () => void;
  handleImageAbort: () => void;
  handleImageError: () => void;
  togglePause: () => void;
}

export const useStoryViewer = ({
  users,
  initialUserId,
  initialStoryId,
  onClose,
}: UseStoryViewerProps): UseStoryViewerReturn => {
  const [currentUserId, setCurrentUserId] = useState(initialUserId);
  const [currentStoryId, setCurrentStoryId] = useState(initialStoryId);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [startProgress, setStartProgress] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentUser = users.find((user) => user.id === currentUserId)!;
  const currentStory = currentUser.stories.find(
    (story) => story.id === currentStoryId
  )!;
  const currentStoryIndex = currentUser.stories.findIndex(
    (story) => story.id === currentStoryId
  );

  const handleNext = useCallback(() => {
    setError(null);
    setIsLoading(true);
    if (currentStoryIndex < currentUser.stories.length - 1) {
      setCurrentStoryId(currentUser.stories[currentStoryIndex + 1].id);
    } else {
      const nextUserIndex =
        users.findIndex((user) => user.id === currentUserId) + 1;
      if (nextUserIndex < users.length) {
        setCurrentUserId(users[nextUserIndex].id);
        setCurrentStoryId(users[nextUserIndex].stories[0].id);
      } else {
        onClose();
      }
    }
  }, [currentUser, currentStoryIndex, currentUserId, users, onClose]);

  useEffect(() => {
    setStartProgress(false);
    setIsPaused(false);
    setError(null);
  }, [currentStoryId]);

  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
    setStartProgress(true);
  }, []);

  // Check if image is already loaded
  useEffect(() => {
    const img = new Image();
    img.src = currentStory.imageUrl;

    // Always show loading state when changing stories
    setIsLoading(true);

    if (img.complete) {
      handleImageLoad();
    }
  }, [currentStoryId, currentStory.imageUrl, handleImageLoad]);

  const handlePrevious = () => {
    setError(null);
    if (currentStoryIndex > 0) {
      setCurrentStoryId(currentUser.stories[currentStoryIndex - 1].id);
    } else {
      const prevUserIndex =
        users.findIndex((user) => user.id === currentUserId) - 1;
      if (prevUserIndex >= 0) {
        const prevUser = users[prevUserIndex];
        setCurrentUserId(prevUser.id);
        setCurrentStoryId(prevUser.stories[prevUser.stories.length - 1].id);
      }
    }
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    if (!isPaused) {
      setStartProgress(true);
    }
  };

  const handleImageAbort = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setError("Failed to load image");
  };

  return {
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
  };
};
