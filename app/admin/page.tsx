import AdminPage from "@/components/admin/adminPage";
import {getAllProjectNotes, getAllBlogPosts} from "../actions/contents";
import { auth } from "@/utils/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Admin() {
  const user = await auth();

  if(!user) {
    return redirect('/signin')
  }

  if(user?.user?.email !== "mrityunjaytiwari1873@gmail.com") {
    return redirect('/')
  }

  const projectNotes = await getAllProjectNotes();
  const blogPosts = await getAllBlogPosts();
  return <AdminPage projectNotes={projectNotes} blogPosts={blogPosts} />;
}
