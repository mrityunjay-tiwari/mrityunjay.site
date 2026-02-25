import AdminPage from "@/components/admin/adminPage";
import {getAllProjectNotes, getAllBlogPosts} from "../actions/contents";

export const dynamic = "force-dynamic";

export default async function Admin() {
  const projectNotes = await getAllProjectNotes();
  const blogPosts = await getAllBlogPosts();
  return <AdminPage projectNotes={projectNotes} blogPosts={blogPosts} />;
}
