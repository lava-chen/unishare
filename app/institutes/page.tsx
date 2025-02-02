import { Button } from "@/components/ui/button";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { getInstitutes } from "@/db/queries";
import PostHead from "@/app/post-head";
import PostBody from "@/app/post-body";
import Link from "next/link";

export default async function Page() {
  const institutes = await getInstitutes();
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <></>
      </StickyWrapper>
      <FeedWrapper>
        <div className="flex flex-col gap-[24px]">
          <PostHead />
          <div className="flex flex-col gap-4">
            {institutes.map((institute) => (
              <Link href={`/institutes/${institute.name}`}>
                <Button className="font-bold w-[200px]">
                  {institute.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </FeedWrapper>
    </div>
  );
}
