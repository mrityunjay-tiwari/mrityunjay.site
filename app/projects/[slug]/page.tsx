import {getProjectNoteById, getProjectNoteBySlug, getProjectNoteOtherDetailsBySlug} from "@/app/actions/contents";
import IndividualProjectNoteForReading from "@/components/projects/individualProjectNote";

export default async function ProjectNote({params}: {params: {slug: string}}) {
  const projectNoteSlug = (await params).slug;
  const projectNoteContent = await getProjectNoteBySlug(projectNoteSlug);
  const projectNoteOtherDetails = await getProjectNoteOtherDetailsBySlug(projectNoteSlug);
  
  // if (!projectNoteContent) return null;
  // if(!projectNoteOtherDetails?.description || !projectNoteOtherDetails?.projectNoteTitle || !projectNoteOtherDetails?.sourceCodeLink || !projectNoteOtherDetails?.websiteLink) return null;
  if (!projectNoteContent) {
  return (
    <div className="mt-40 text-neutral-500">
      Project not found
    </div>
  );
}

  console.log("other details", projectNoteOtherDetails);
  return (
    <div className="w-full max-w-[calc(100%-2.5rem)] mx-auto flex flex-col items-center">
    
      <IndividualProjectNoteForReading content={projectNoteContent} projectTitle={projectNoteOtherDetails?.projectNoteTitle ?? "TITLE"} projectDescription={projectNoteOtherDetails?.description ?? "DESCRIPTION"} sourceCode={projectNoteOtherDetails?.sourceCodeLink ?? "SOURCE CODE"} websiteLink={projectNoteOtherDetails?.websiteLink ?? "WEBSITE LINK"} imagesArray={projectNoteOtherDetails?.techStack ?? []} thumbnailImage={projectNoteOtherDetails?.thumbnailImage ?? "THUMBNAIL IMAGE"} videoLink={projectNoteOtherDetails?.videoLink ?? "VIDEO LINK"} />
    </div>  
  );
}
