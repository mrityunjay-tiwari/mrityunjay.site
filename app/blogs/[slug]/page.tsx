import {
  getBlogPostContentBySlug,
  getBlogPostOtherDetailsBySlug,
} from "@/app/actions/contents";
import IndividualBlogPage from "@/components/blogs/individualBlogPage";

export const dynamic = "force-dynamic";

export default async function ProjectNote({params}: {params: {slug: string}}) {
  const getSlug = (await params).slug;
  const blogDetails = await getBlogPostOtherDetailsBySlug(getSlug.trim());
  const blogContent = await getBlogPostContentBySlug(getSlug.trim());

  console.log(blogDetails, blogContent);
  if (!blogDetails) return null;
  return (
    <div className="w-full max-w-[calc(100%-2.5rem)] mx-auto flex flex-col items-center">
      <IndividualBlogPage
        content={blogContent?blogContent:""}
        projectTitle={blogDetails?.blogTitle}
        wordCount={blogDetails.wordCount}
        clapCount={blogDetails.clapCount}
        publishedDate={blogDetails.createdAt}
        slug={blogDetails.slug}
      />

      
    </div>
  );
}
