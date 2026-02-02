"use client";

import {createProjectNote, createBlogPost} from "@/app/actions/contents";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

interface AdminPageProps {
    projectNotes: {
      id: string;
      slug: string | null;
      createdAt: Date;
    }[];
    blogPosts: {
      id: string;
      slug: string | null;
      createdAt: Date;
    }[];
}


export default function AdminPage({projectNotes, blogPosts}: AdminPageProps) {
  const router = useRouter();
  const createNewPersonalNote = async () => {
    const projecNote = await createProjectNote();
    console.log("note created in db :", projecNote);
    router.push(`/admin/project/${projecNote.id}`);
  };

  const createNewBlogPost = async () => {
    const blogPost = await createBlogPost();
    console.log("blog post created in db :", blogPost);
    router.push(`/admin/blog/${blogPost.id}`);
  };

  return (
    <div className="flex max-w-2xl mx-auto flex-col items-center mt-28 h-screen">
      <h1 className="text-5xl font-semibold text-neutral-500">Admin Page</h1>
      <div className="flex gap-64 mt-10">
        <div className="flex flex-col items-start">
          <Button variant={"link"} onClick={() => createNewPersonalNote()}>
            Write New ProjectNote
          </Button>
          <div>
            <h2>Existing ProjectNotes</h2>
            {projectNotes.map((note) => (
              <Button key={note.id} variant={"link"} onClick={() => router.push(`/admin/project/${note.id}`)}>
                {note.slug} - {note.id}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start">
          <Button variant={"link"} onClick={() => createNewBlogPost()}>
            Write New Blog
          </Button>
          <div>
            <h2>Existing BlogPosts</h2>
            {blogPosts.map((post) => (
              <Button key={post.id} variant={"link"} onClick={() => router.push(`/admin/blog/${post.id}`)}>
                {post.slug} - {post.id}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
