import { Button } from "@/components/ui/button";
import { getMajorByInstitute } from "@/db/queries";
import Link from "next/link";
import PostHead from "@/app/post-head";
import PostBody from "@/app/post-body";
import NewPost from "@/components/new-post";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
interface PageParams {
  institute: string;
}

const Page = async ({ params }: { params: PageParams }) => {
  const institute = decodeURIComponent(params.institute).split(",")[0];
  const major = decodeURIComponent(params.institute).split(",")[1];

  const majors = await getMajorByInstitute(institute);
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>{major && <NewPost major={major} />}</StickyWrapper>
      <FeedWrapper>
        <div className="flex flex-col gap-[24px]">
          <PostHead institute={institute} major={major} />
          {!major && (
            <div className="flex flex-col gap-[12px]">
              {majors.map((major) => (
                <Link href={`/institutes/${institute}/${major.name}`}>
                  <Button>{major.name}</Button>
                </Link>
              ))}
            </div>
          )}
          {major && <PostBody major_name={major} />}
        </div>
      </FeedWrapper>
    </div>
  );
};

export default Page;
