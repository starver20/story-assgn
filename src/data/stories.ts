import { User } from "../types/story";

// Helper function to generate consistent image URLs
const getImageUrl = (
  id: number,
  width: number = 800,
  height: number = 1200
) => {
  return `https://picsum.photos/id/${id}/${width}/${height}`;
};

export const users: User[] = [
  {
    id: "1",
    username: "john_doe",
    avatarUrl: getImageUrl(1001, 200, 200), // Unique avatar
    stories: [
      {
        id: "1-1",
        imageUrl: getImageUrl(1005), // Beautiful mountain landscape
        timestamp: Date.now() - 3600000,
      },
      {
        id: "1-2",
        imageUrl: getImageUrl(1015), // City skyline
        timestamp: Date.now() - 3500000,
      },
    ],
  },
  {
    id: "2",
    username: "jane_smith",
    avatarUrl: getImageUrl(1002, 200, 200), // Unique avatar
    stories: [
      {
        id: "2-1",
        imageUrl: getImageUrl(1025), // Nature scene
        timestamp: Date.now() - 3400000,
      },
      {
        id: "2-2",
        imageUrl: getImageUrl(1035), // Urban photography
        timestamp: Date.now() - 3300000,
      },
      {
        id: "2-3",
        imageUrl: getImageUrl(1045), // Architecture
        timestamp: Date.now() - 3200000,
      },
    ],
  },
  {
    id: "3",
    username: "mike_wilson",
    avatarUrl: getImageUrl(1003, 200, 200), // Unique avatar
    stories: [
      {
        id: "3-1",
        imageUrl: getImageUrl(1055), // Travel photography
        timestamp: Date.now() - 3100000,
      },
    ],
  },
];
