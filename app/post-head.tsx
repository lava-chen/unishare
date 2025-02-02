import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getInstitutes } from "@/db/queries";

type Props = {
  institute?: string;
  major?: string;
};

const PostHead = async ({ institute, major }: Props) => {
  const institutes = await getInstitutes();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/institutes" className="font-bold">
            河海大学
          </BreadcrumbLink>
        </BreadcrumbItem>
        {institute && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/institutes/${institute}`}
                className="font-bold"
              >
                {institute}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}

        {major && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-bold">{major}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default PostHead;
