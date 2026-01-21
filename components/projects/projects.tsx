import {marker, sans} from "@/lib/fonts";
import {cn} from "@/lib/utils";

export default function Projects() {
  return (
    <div className="w-[650px] flex flex-col items-start justify-start mb-14">
      <div>
        <h2 className={cn(`${sans.className} text-sm text-neutral-400`)}>
          featured
        </h2>
        <h2
          className={cn(
            `${marker.className} text-2xl text-neutral-500 border-b-4 border-orange-100`,
          )}
        >
          projects.
        </h2>
      </div>
      <div className="w-full flex items-center justify-between mt-5"></div>
    </div>
  );
}
