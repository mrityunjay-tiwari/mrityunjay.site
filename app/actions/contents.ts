"use server"

import { BlogType } from "@/lib/generated/prisma/enums"
import { prisma } from "@/prisma/src"
import { JSONContent } from "@tiptap/react"
import { TechStackItem } from "@/types/project"

export async function createProjectNote() {
  const projectNote = await prisma.projectNote.create({
    data: {
      content: "",
      slug: crypto.randomUUID(),
      description: "",
      sourceCodeLink: "",
      websiteLink: "",
      techStack: [],
      thumbnailImage: "",
      videoLink: "",
    },
  })
  return projectNote
}

export async function updateProjectNoteById(id: string, content: JSONContent, slug: string, projectNoteTitle: string, description: string, sourceCodeLink: string, websiteLink: string, techStack: TechStackItem[], thumbnailImage: string, videoLink: string) {
  const projectNote = await prisma.projectNote.update({
    where: {
      id,
    },
    data: {
      content,
      slug,
      projectNoteTitle,
      description,
      sourceCodeLink,
      websiteLink,
      techStack,
      thumbnailImage,
      videoLink
    },
  })
  return projectNote.content as JSONContent
}

export async function getProjectNoteById(id: string): Promise<JSONContent | null> {
  const projectNote = await prisma.projectNote.findUnique({
    where: {
      id,
    },
    select: {
      content: true,
    },
  })

  if (!projectNote) return null

  return projectNote.content as JSONContent
}

export async function getProjectNoteSlugById(id: string): Promise<string | null> {
  const projectNote = await prisma.projectNote.findUnique({
    where: {
      id,
    },
    select: {
      slug: true
    },
  })

  if (!projectNote) return null

  return projectNote.slug
}

export async function getProjectNoteDetailsById(id: string){
  const projectNote = await prisma.projectNote.findUnique({
    where: {
      id,
    },
    select: {
      slug: true,
      description: true,
      sourceCodeLink: true,
      websiteLink: true,
      techStack: true,
      thumbnailImage: true,
      videoLink: true,
      projectNoteTitle: true,
    },
  })
  if (!projectNote) return null

  const techStack =
    Array.isArray(projectNote.techStack)
      ? (projectNote.techStack as TechStackItem[])
      : [];

  return {
    slug: projectNote.slug,
    description: projectNote.description,
    sourceCodeLink: projectNote.sourceCodeLink,
    websiteLink: projectNote.websiteLink,
    techStack,
    thumbnailImage: projectNote.thumbnailImage,
    videoLink: projectNote.videoLink,
    projectNoteTitle: projectNote.projectNoteTitle,
  }
}
export async function getAllProjectNotes() {
    const projectNotes = await prisma.projectNote.findMany({
        select: {
            id: true,
            slug: true,
            createdAt: true,
        },
    })
    return projectNotes
}

export async function getProjectNoteBySlug(slug: string) {
    const projectNote = await prisma.projectNote.findFirst({
        where: {
            slug,
        },
        select: {
            content: true,
        },
    })
    if (!projectNote) return null
    return projectNote.content as JSONContent
}

export async function getProjectNoteOtherDetailsBySlug(slug: string) {
    const projectNoteDetails = await prisma.projectNote.findFirst({
        where: {
            slug,
        },
        select: {
            slug: true,
            description: true,
            sourceCodeLink: true,
            websiteLink: true,
            techStack: true,
            thumbnailImage: true,
            videoLink: true,
            projectNoteTitle: true,
        },
    })
    if (!projectNoteDetails) return null
    
    const techStack =
    Array.isArray(projectNoteDetails.techStack)
      ? (projectNoteDetails.techStack as TechStackItem[])
      : [];

      
    return {
      slug: projectNoteDetails.slug,
      description: projectNoteDetails.description,
      sourceCodeLink: projectNoteDetails.sourceCodeLink,
      websiteLink: projectNoteDetails.websiteLink,
      techStack,
      thumbnailImage: projectNoteDetails.thumbnailImage,
      videoLink: projectNoteDetails.videoLink,
      projectNoteTitle: projectNoteDetails.projectNoteTitle,
    }
}

export async function createBlogPost() {
  const blogPost = await prisma.blog.create({
    data: {
      blogTitle: "",
      image: "",
      wordCount: 0,
      clapCount: 0,
      slug: crypto.randomUUID(),
      description: "",
      link: "",
      websiteOn: "",
    },
  })
  return blogPost
}

export async function updateBlogPostById(id: string, content: JSONContent, blogTitle: string, slug: string, link: string, type: BlogType, image: string, description: string, websiteOn: string, wordCount: number) {
  const blogPost = await prisma.blog.update({
    where: {
      id,
    },
    data: {
      content,
      blogTitle,
      slug,
      description,
      type,
      image,
      link,
      websiteOn,
      wordCount
    },
  })
  return blogPost.content as JSONContent
}

export async function getBlogPostById(id: string): Promise<JSONContent | null> {
  const blogPost = await prisma.blog.findUnique({
    where: {
      id,
    },
    select: {
      content: true,
    },
  })

  if (!blogPost) return null

  return blogPost.content as JSONContent
}

export async function getOtherBlogDetailsById(id: string) {
  const blogPostDetails = await prisma.blog.findUnique({
    where: {
      id,
    },
    select: {
      blogTitle: true,
      slug: true,
      description: true,
      type: true,
      image: true,
      link: true,
      websiteOn: true,
    },
  })

  if (!blogPostDetails) return null

  return {
    blogTitle: blogPostDetails.blogTitle,
    slug: blogPostDetails.slug,
    description: blogPostDetails.description,
    type: blogPostDetails.type,
    image: blogPostDetails.image,
    link: blogPostDetails.link,
    websiteOn: blogPostDetails.websiteOn,
  }
}

export async function getAllBlogPosts() {
    const blogPosts = await prisma.blog.findMany({
        select: {
            id: true,
            slug: true,
            createdAt: true,
            blogTitle: true,
            description: true,
            type: true,
            image: true,
            link: true,
            websiteOn: true,
            wordCount: true,
        },
        orderBy: {
      createdAt: "desc", 
    },
    })
    return blogPosts
}

// export async function getBlogPostBySlug(slug: string) {
//     const blogPost = await prisma.blog.findFirst({
//         where: {
//             slug,
//         },
//         select: {
//             content: true,
//             blogTitle: true,
//             slug: true,
//             description: true,
//             type: true,
//             image: true,
//             link: true,
//             websiteOn: true,
//         },
//     })
//     if (!blogPost) return null
//     return blogPost.content as JSONContent
// }

export async function getBlogPostContentBySlug(slug: string): Promise<JSONContent | null> {
  const blogPost = await prisma.blog.findUnique({
    where: {
      slug,
    },
    select: {
      content: true,
    },
  })

  if (!blogPost) return null

  return blogPost.content as JSONContent
}

export async function getBlogPostOtherDetailsBySlug(slug: string) {
  const blogDetails = await prisma.blog.findUnique({
    where: {
      slug,
    },
    select: {
      blogTitle: true,
      slug: true,
      description: true,
      type: true,
      image: true,
      link: true,
      websiteOn: true,
      wordCount: true,
      clapCount: true,
      createdAt: true,
    },
  })

  if (!blogDetails) return null

  return {
    blogTitle: blogDetails.blogTitle,
    slug: blogDetails.slug,
    description: blogDetails.description,
    type: blogDetails.type,
    image: blogDetails.image,
    link: blogDetails.link,
    websiteOn: blogDetails.websiteOn,
    wordCount: blogDetails.wordCount,
    clapCount: blogDetails.clapCount,
    createdAt: blogDetails.createdAt,
  }
}

export async function addEmailToNewsletterList(email: string) {
    const newsletterSubscriber = await prisma.newsletterSubscribers.create({
        data: {
            email,
        },
    })
    return newsletterSubscriber
}

export async function checkIfEmailAlreadyExistsInNewsletterList(email: string) {
    const newsletterSubscriber = await prisma.newsletterSubscribers.findUnique({
        where: {
            email,
        },
    })
    return newsletterSubscriber?.email
}

export async function clapBlogPost(slug: string) {
  const updated = await prisma.blog.update({
    where: { slug },
    data: {
      clapCount: {
        increment: 1,
      },
    },
    select: {
      clapCount: true,
    },
  });

  return updated.clapCount;
}