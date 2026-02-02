import BlogPage from "@/components/blogs/blogpage";
import {getAllBlogPosts} from "../actions/contents";

export const dynamic = "force-dynamic";

export default async function Blog() {
  const blogPosts = await getAllBlogPosts();
  return (
    <div className="w-full max-w-[calc(100%-2.5rem)] md:max-w-2xl mx-auto flex flex-col items-center">
      <BlogPage blogPosts={blogPosts} />
    </div>
  );
}
