import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

type Props = {
  userName: string;
  userImageUrl: string;
  content: string;
  date: string;
};
const PostCard = async ({ userName, userImageUrl, content, date }: Props) => {
  const formattedDate = new Date(date).toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",

    hour12: false,
  });
  return (
    <div className="h-full border-2 rounded-xl flex flex-col gap-y-2 justify-between p-3 pb-6  min-w-[200px]">
      <div className="flex items-center ">
        <Image
          src={userImageUrl || "/logo.svg"}
          alt={userName || "用户"}
          width={25}
          height={23}
          className="rounded-full mr-2"
        />
        <div className="text-lg font-bold h-[25px]">{userName}</div>
      </div>
      <div className="text-sm text-gray-500">{content}</div>
      <div className="text-xs text-gray-400">{formattedDate}</div>
    </div>
  );
};
export default PostCard;
