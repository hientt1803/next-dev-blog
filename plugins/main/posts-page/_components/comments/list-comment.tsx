import { CommentItem } from "./comment";
import { ShowMoreComment } from "./show-more-comment";

export const ListComment = () => {
  return (
    <>
      <div className="flex flex-wrap flex-col gap-3 h-[60rem] md:h-[45rem] overflow-y-scroll">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
      <div className="mt-5 ms-auto">
        <ShowMoreComment />
      </div>
    </>
  );
};
