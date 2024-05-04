// src/app/model/post.ts
export interface Post {
    _id: string;
    title: string;
    content: string;
    username: string;
    date?: Date; // Add an optional date property
  }
  