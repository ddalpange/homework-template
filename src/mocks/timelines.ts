export interface Timeline {
  type?: "images" | "video";
  text: string;
  images?: string[];
  video?: string;
}

export const TIMELINES: Timeline[] = [
  {
    type: "images",
    text: "dahyun",
    images: [
      "https://pbs.twimg.com/profile_images/1262597503964200960/Jtn-7ZnG_400x400.jpg",
      "https://pbs.twimg.com/profile_images/1262597503964200960/Jtn-7ZnG_400x400.jpg",
    ],
  },
  {
    text: "hello",
  },
  {
    type: "video",
    text: "dahyun",
    video: "https://youtu.be/EfrlqA1PzUA",
  },
];
