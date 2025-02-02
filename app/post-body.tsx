import PostCard from "@/components/post-card";
import { getPosts, getPostsByMajor } from "@/db/queries";

type Props = {
  major_name?: string;
};
const PostBody = async ({ major_name }: Props) => {
  let posts = await getPosts();
  if (major_name) {
    posts = await getPostsByMajor(major_name);
  }

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <PostCard
          userName={post.userName}
          userImageUrl={post.userImageSrc}
          content={post.content}
          formattedDate={post.date}
          major={post.major || ""}
          course={post.course || ""}
        />
      ))}
    </div>
  );
};

export default PostBody;
