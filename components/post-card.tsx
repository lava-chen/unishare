import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

type Props = {
  userName: string;
  userImageUrl: string;
  content: string;
  formattedDate: string;
  major: string;
  course: string;
};

// 时间格式化函数（例如：刚刚，1小时前，昨天等）
const formatDate = (date: string) => {
  const now = new Date();
  const diffInSeconds = Math.floor(
    (now.getTime() - new Date(date).getTime()) / 1000
  );

  if (diffInSeconds < 60) return "刚刚";
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}分钟前`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}小时前`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}天前`;
  const formattedDate = new Date(date).toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour12: false,
  });
  return formattedDate;
};

const PostCard = ({
  userName,
  userImageUrl,
  content,
  formattedDate,
  major,
  course,
}: Props) => {
  const postDate = formatDate(formattedDate);
  return (
    <div className="min-h-[200px] border-2 rounded-xl flex flex-col gap-y-2 justify-between p-4 pb-6 min-w-[200px] bg-white">
      <div className="flex items-center gap-x-3">
        <Image
          src={userImageUrl || "/logo.svg"}
          alt={userName || "用户"}
          width={45}
          height={45}
          className="rounded-full"
        />
        <div className="text-lg font-semibold text-gray-800">{userName}</div>
      </div>
      <div className="text-base text-gray-700 mt-2 font-medium">{content}</div>
      <div className="text-sm text-gray-500 mt-3 flex justify-between items-center">
        <span className="text-gray-400 font-medium">{postDate}</span>
        {major && (
          <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full font-medium">
            {major}
          </span>
        )}
        {course && (
          <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-medium">
            {course}
          </span>
        )}
      </div>
    </div>
  );
};

export default PostCard;
