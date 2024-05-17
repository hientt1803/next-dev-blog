import React from "react";
import { HotPost } from "./hot-post";

const listPost = [
  {
    id: 1,
    title: "hello",
    desc: "lorem ipsum",
    image:
      "https://images.unsplash.com/photo-1583909553512-6fe1e33a1adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D",
    create_at: "26-03-2025",
  },
  {
    id: 1,
    title: "hello",
    desc: "lorem ipsum",
    image:
      "https://images.unsplash.com/photo-1583909553512-6fe1e33a1adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D",
    create_at: "26-03-2025",
  },
  {
    id: 1,
    title: "hello",
    desc: "lorem ipsum",
    image:
      "https://images.unsplash.com/photo-1583909553512-6fe1e33a1adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D",
    create_at: "26-03-2025",
  },
  {
    id: 1,
    title: "hello",
    desc: "lorem ipsum",
    image:
      "https://images.unsplash.com/photo-1583909553512-6fe1e33a1adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D",
    create_at: "26-03-2025",
  },
  {
    id: 1,
    title: "hello",
    desc: "lorem ipsum",
    image:
      "https://images.unsplash.com/photo-1583909553512-6fe1e33a1adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D",
    create_at: "26-03-2025",
  },
];

export const ListHostPost = () => {
  return (
    <div className="flex-1 mt-16">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
        HOT POST
      </h4>
      <div className="grid grid-cols-1">
        {listPost.map((post, index) => (
          <HotPost key={index} />
        ))}
      </div>
    </div>
  );
};
