import { DetailPostPage } from "@/plugins/main/posts-page/detail-post-page";

const PostDetailPage = ({ params }: { params: { slug: string } }) => {
  return <DetailPostPage params={params} />;
};

export default PostDetailPage;
