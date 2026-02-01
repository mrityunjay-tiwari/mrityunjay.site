import {getBlogPostById, getOtherBlogDetailsById, getProjectNoteById} from "@/app/actions/contents";
import MeWritingBlogPost from "@/components/admin/blogPost";
import ProjectNote from "@/components/admin/projectNote";
import {Input} from "@/components/ui/input";

export default async function AdminBlogWritingPage({
  params,
}: {
  params: {blogId: string};
}) {
  const blogId = (await params).blogId;
  const previousContent = await getBlogPostById(blogId);
  const blogDetails = await getOtherBlogDetailsById(blogId);
  if(!blogDetails) return null;

  return (
    <div className="mx-auto max-w-2xl">
      <div className=" mt-28 w-full items-center flex flex-col">
        <MeWritingBlogPost previousContent={previousContent} id={blogId} defaultTitle={blogDetails.blogTitle} defaultSlug={blogDetails.slug} defaultLink={blogDetails.link} defaultImage={blogDetails.image} defaultDescription={blogDetails.description} defaultWebsiteOn={blogDetails.websiteOn} />
      </div>
    </div>
  );
}
