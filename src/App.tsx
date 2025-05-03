import { useState } from "react";
import "./App.css";
import { StoryList } from "./components/StoryList";
import { StoryModal } from "./components/StoryModal";
import { users } from "./data/stories";

function App() {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);

  const handleStoryClick = (userId: string, storyId: string) => {
    setSelectedUserId(userId);
    setSelectedStoryId(storyId);
  };

  const handleCloseStory = () => {
    setSelectedUserId(null);
    setSelectedStoryId(null);
  };

  return (
    <>
      <div className="app">
        <StoryList users={users} onStoryClick={handleStoryClick} />
        {selectedUserId && selectedStoryId && (
          <StoryModal
            users={users}
            initialUserId={selectedUserId}
            initialStoryId={selectedStoryId}
            onClose={handleCloseStory}
          />
        )}
      </div>
    </>
  );
}

export default App;
