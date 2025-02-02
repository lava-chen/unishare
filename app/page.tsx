import { getInstitutes } from "@/db/queries";

import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Button } from "@/components/ui/button";

import PostHead from "./post-head";
import PostBody from "./post-body";
import NewPost from "@/components/new-post";

export default async function Home() {
  const institutes = await getInstitutes();
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <></>
      </StickyWrapper>
      <FeedWrapper>
        <div className="flex flex-col gap-[24px]">
          <PostHead />
          <PostBody />
        </div>
      </FeedWrapper>
    </div>
  );
}
