import {getProjectNoteById, getProjectNoteDetailsById, getProjectNoteSlugById, updateProjectNoteById} from "@/app/actions/contents";
import MeWritingProjectNote from "@/components/admin/projectNote";

export const dynamic = "force-dynamic";

export default async function ProjectPage({
  params,
}: {
  params: {projectNote: string};
}) {
  const projectNoteId = (await params).projectNote;
  const previousContent = await getProjectNoteById(projectNoteId);
  const getSlug = await getProjectNoteSlugById(projectNoteId);
  const projectNotePreviousDetails = await getProjectNoteDetailsById(projectNoteId);
  if(!projectNotePreviousDetails) return null
  return (
    <div className="mx-auto max-w-2xl">
      <div className=" mt-28">
        
        <MeWritingProjectNote defaultTitleValue={projectNotePreviousDetails?.projectNoteTitle} defaultDescriptionValue={projectNotePreviousDetails?.description} defaultSourceCodeLinkValue={projectNotePreviousDetails?.sourceCodeLink} defaultWebsiteLinkValue={projectNotePreviousDetails?.websiteLink} defaultTechStackValue={projectNotePreviousDetails?.techStack} defaultThumbnailValue={projectNotePreviousDetails?.thumbnailImage} defaultVideoLinkValue={projectNotePreviousDetails?.videoLink} previousContent={previousContent} id={projectNoteId} defaultSlugValue={getSlug} />
      </div>
    </div>
  );
}
