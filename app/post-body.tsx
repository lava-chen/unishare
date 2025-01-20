import PostCard from "@/components/post-card";
import { getPosts } from "@/db/queries";

const PostBody = async () => {
  const posts = await getPosts();
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <PostCard
          userName={post.userName}
          userImageUrl={post.userImageSrc}
          content={post.content}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default PostBody;
