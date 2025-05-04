import { useState, useEffect, useCallback } from "react";
import { User, Story } from "../types/story";
// import { prefetchStoryImages } from "../utils/imagePrefetch";

const STORY_DURATION = 5000; // 5 seconds

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
  // direction: "left" | "right";
  startProgress: boolean;
  isPaused: boolean;
  isTransitioning: boolean;
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
  // const [direction, setDirection] = useState<"left" | "right">("right");
  const [error, setError] = useState<string | null>(null);
  const [startProgress, setStartProgress] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const currentUser = users.find((user) => user.id === currentUserId)!;
  const currentStory = currentUser.stories.find(
    (story) => story.id === currentStoryId
  )!;
  const currentStoryIndex = currentUser.stories.findIndex(
    (story) => story.id === currentStoryId
  );

  const handleNext = useCallback(() => {
    setError(null);
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
    setIsLoading(true);
    setIsPaused(false);
    setIsTransitioning(true);
    setError(null);
  }, [currentStoryId]);

  useEffect(() => {
    if (!isLoading && !isPaused) {
      const timer = setTimeout(() => {
        handleNext();
      }, STORY_DURATION);

      return () => clearTimeout(timer);
    }
  }, [handleNext, isLoading, isPaused]);

  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
    setStartProgress(true);
    setIsTransitioning(false);
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
    setStartProgress(!isPaused);
  };

  const handleImageAbort = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setError("Failed to load image");
  };

  // Prefetch next user's stories when current user's stories are almost done
  // useEffect(() => {
  //   const prefetchNextUserStories = async () => {
  //     const currentUserIndex = users.findIndex(
  //       (user) => user.id === currentUserId
  //     );
  //     if (currentUserIndex < users.length - 1) {
  //       const nextUser = users[currentUserIndex + 1];
  //       if (currentStoryIndex === currentUser.stories.length - 2) {
  //         await prefetchStoryImages(nextUser.stories);
  //       }
  //     }
  //   };

  //   prefetchNextUserStories();
  // }, [currentUserId, currentStoryIndex, currentUser.stories.length, users]);

  // Prefetch remaining stories of current user when first story is loaded
  // useEffect(() => {
  //   const prefetchRemainingStories = async () => {
  //     if (currentStoryIndex === 0 && !isLoading) {
  //       const remainingStories = currentUser.stories.slice(1);
  //       await prefetchStoryImages(remainingStories);
  //     }
  //   };

  //   prefetchRemainingStories();
  // }, [isLoading, currentStoryIndex, currentUser.stories]);

  return {
    currentUser,
    currentStory,
    currentStoryIndex,
    isLoading,
    // direction,
    startProgress,
    isPaused,
    isTransitioning,
    error,
    handleNext,
    handlePrevious,
    handleImageLoad,
    handleImageAbort,
    handleImageError,
    togglePause,
  };
};
