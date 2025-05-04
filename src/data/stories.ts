import { User } from "../types/story";

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
    username: "Amar Narute",
    avatarUrl: getImageUrl(1001, 200, 200),
    stories: [
      {
        id: "1-1",
        imageUrl: getImageUrl(1005),
        timestamp: Date.now() - 3600000,
      },
      {
        id: "1-2",
        imageUrl: getImageUrl(1015),
        timestamp: Date.now() - 3500000,
      },
    ],
  },
  {
    id: "2",
    username: "Awinash Narute",
    avatarUrl: getImageUrl(1002, 200, 200),
    stories: [
      {
        id: "2-1",
        imageUrl: getImageUrl(1025),
        timestamp: Date.now() - 3400000,
      },
      {
        id: "2-2",
        imageUrl: getImageUrl(1035),
        timestamp: Date.now() - 3300000,
      },
      {
        id: "2-3",
        imageUrl: getImageUrl(1045),
        timestamp: Date.now() - 3200000,
      },
    ],
  },
  {
    id: "3",
    username: "Abhi",
    avatarUrl: getImageUrl(1003, 200, 200),
    stories: [
      {
        id: "3-1",
        imageUrl: getImageUrl(1055),
        timestamp: Date.now() - 3100000,
      },
    ],
  },
  {
    id: "4",
    username: "Mitchelle",
    avatarUrl: getImageUrl(1004, 200, 200),
    stories: [
      {
        id: "4-1",
        imageUrl: getImageUrl(1065),
        timestamp: Date.now() - 3400000,
      },
      {
        id: "4-2",
        imageUrl: getImageUrl(1075),
        timestamp: Date.now() - 3300000,
      },
      {
        id: "4-3",
        imageUrl: getImageUrl(85),
        timestamp: Date.now() - 3200000,
      },
    ],
  },
  {
    id: "5",
    username: "Awinash Narute",
    avatarUrl: getImageUrl(1005, 200, 200),
    stories: [
      {
        id: "5-1",
        imageUrl: getImageUrl(95),
        timestamp: Date.now() - 3400000,
      },
      {
        id: "5-2",
        imageUrl: getImageUrl(100),
        timestamp: Date.now() - 3300000,
      },
      {
        id: "5-3",
        imageUrl: getImageUrl(110),
        timestamp: Date.now() - 3200000,
      },
    ],
  },
  {
    id: "6",
    username: "Jane",
    avatarUrl: getImageUrl(1006, 200, 200),
    stories: [
      {
        id: "6-1",
        imageUrl: getImageUrl(120),
        timestamp: Date.now() - 3400000,
      },
      {
        id: "6-2",
        imageUrl: getImageUrl(130),
        timestamp: Date.now() - 3300000,
      },
      {
        id: "6-3",
        imageUrl: getImageUrl(140),
        timestamp: Date.now() - 3200000,
      },
    ],
  },
  {
    id: "7",
    username: "Adam",
    avatarUrl: getImageUrl(142, 200, 200),
    stories: [
      {
        id: "7-1",
        imageUrl: getImageUrl(145),
        timestamp: Date.now() - 3400000,
      },
      {
        id: "7-2",
        imageUrl: getImageUrl(160),
        timestamp: Date.now() - 3300000,
      },
      {
        id: "7-3",
        imageUrl: getImageUrl(170),
        timestamp: Date.now() - 3200000,
      },
    ],
  },
];
