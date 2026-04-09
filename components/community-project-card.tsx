import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { CommunityProject } from "@/data/community-projects";

export function CommunityProjectCard({
  project,
}: {
  project: CommunityProject;
}) {
  return (
    <article className="flex min-h-[340px] flex-col border border-[#e5e5e5] bg-white transition-all duration-200 hover:-translate-y-[2px]">

      {/* LOGO AREA */}
      <div className="flex min-h-[150px] items-center justify-center border-b border-[#e5e5e5] bg-[#f3f3f1] px-6 py-10">
        
        <div className="relative h-10 w-[160px]">
          <Image
            src={project.logo}
            alt={project.name}
            fill
            className="object-contain"
          />
        </div>

      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col px-6 py-5">
        <h3 className="text-base font-semibold tracking-tight">
          {project.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-neutral-600">
          {project.description}
        </p>

        <div className="mt-auto border-t border-[#e5e5e5] pt-4">
          <Link
            href={project.website}
            target="_blank"
            className="flex items-center gap-2 text-xs text-neutral-500 hover:text-black"
          >
            <ExternalLink size={14} />
            {project.domainLabel}
          </Link>
        </div>
      </div>

    </article>
  );
}