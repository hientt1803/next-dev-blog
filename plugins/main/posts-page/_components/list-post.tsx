import { IPosts } from "@/types";
import { PostPageItem } from "./post-item";

const fetchPosts = async () => {
  const posts = await fetch("http://localhost:3000/api/posts", {
    next: { revalidate: 60 },
  });
  const data = await posts.json();
  return data;
};

export const ListPost = async () => {
  const listPosts: IPosts[] = await fetchPosts();

  return (
    <div className="w-full h-auto mt-2">
      <div className="grid grid-cols-2 gap-6">
        {listPosts?.map((post) => <PostPageItem key={post._id} post={post} />)}
      </div>
    </div>
  );
};
