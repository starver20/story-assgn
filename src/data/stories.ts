import { User } from "../types/story";

export const users: User[] = [
  {
    id: "1",
    username: "john_doe",
    avatarUrl: "https://picsum.photos/200",
    stories: [
      {
        id: "1-1",
        imageUrl: "https://picsum.photos/400/800",
        timestamp: Date.now() - 3600000,
      },
      {
        id: "1-2",
        imageUrl: "https://picsum.photos/400/801",
        timestamp: Date.now() - 3500000,
      },
    ],
  },
  {
    id: "2",
    username: "jane_smith",
    avatarUrl: "https://picsum.photos/201",
    stories: [
      {
        id: "2-1",
        imageUrl: "https://picsum.photos/400/802",
        timestamp: Date.now() - 3400000,
      },
      {
        id: "2-2",
        imageUrl: "https://picsum.photos/400/803",
        timestamp: Date.now() - 3300000,
      },
      {
        id: "2-3",
        imageUrl: "https://picsum.photos/400/804",
        timestamp: Date.now() - 3200000,
      },
    ],
  },
  {
    id: "3",
    username: "mike_wilson",
    avatarUrl: "https://picsum.photos/202",
    stories: [
      {
        id: "3-1",
        imageUrl: "https://picsum.photos/400/805",
        timestamp: Date.now() - 3100000,
      },
    ],
  },
];
