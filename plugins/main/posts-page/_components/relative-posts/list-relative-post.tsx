import React from "react";
import { PostPageItem } from "../post-item";

interface IPost {
  id: number;
  slug: string;
  title: string;
  desc: string;
  image: string;
  create_at: string;
}

const listPost: IPost[] = [
  {
    id: 1,
    slug: "abcef",
    title: "hello",
    desc: "lorem ipsum",
    image:
      "https://images.unsplash.com/photo-1583909553512-6fe1e33a1adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D",
    create_at: "26-03-2025",
  },
  {
    id: 2,
    slug: "abcef",
    title: "hello",
    desc: "lorem ipsum",
    image:
      "https://images.unsplash.com/photo-1506430730356-91514bf7359c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D",
    create_at: "26-03-2025",
  },
  {
    id: 3,
    slug: "abcef",
    title: "hello",
    desc: "lorem ipsum",
    image:
      "https://images.unsplash.com/photo-1534531688091-a458257992cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxjb2xsZWN0aW9uJTIwc3Rvcmllc3xlbnwwfDB8MHx8fDI%3D",
    create_at: "26-03-2025",
  },
  {
    id: 4,
    slug: "abcef",
    title: "hello",
    desc: "lorem ipsum",
    image:
      "https://images.unsplash.com/photo-1506430730356-91514bf7359c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D",
    create_at: "26-03-2025",
  },
  {
    id: 5,
    slug: "abcef",
    title: "hello",
    desc: "lorem ipsum",
    image:
      "https://images.unsplash.com/photo-1534531688091-a458257992cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxjb2xsZWN0aW9uJTIwc3Rvcmllc3xlbnwwfDB8MHx8fDI%3D",
    create_at: "26-03-2025",
  },
];

export const ListRelativePost = () => {
  return (
    <div className="w-full h-auto mt-2">
      <div className="grid grid-cols-2 gap-6">
        {listPost.map((post) => (
          <PostPageItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
