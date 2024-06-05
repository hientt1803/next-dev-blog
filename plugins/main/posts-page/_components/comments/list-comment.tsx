import { CommentItem } from "./comment";

export const ListComment = () => {
  return (
    <div className="flex flex-wrap flex-col gap-3">
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </div>
  );
};
