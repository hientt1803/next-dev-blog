import { PostItem } from "./post-item";

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

export const ListPost = () => {
  return (
    <div id="list-post-home" className="flex-[2] mt-16">
      <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
        DISCOVER NEW POST HERE
      </h4>
      <div className="grid grid-cols-1 gap-6">
        {listPost.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </div>
    </div>
  );
};
