import { SiteHeader } from "@/components/site-header";
import { CommunityProjectCard } from "@/components/community-project-card";
import { communityProjects } from "@/data/community-projects";

export default function Page() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#ffffff] text-black">

        {/* HERO SECTION */}
        <section className="mx-auto max-w-7xl px-6 pt-28 pb-16">
          <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
            Ecosystem
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
            Community Projects
          </h1>

          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-neutral-600">
            Explore products, experiments, and internet-native applications
            building around GenLayer.
          </p>
        </section>

        {/* PROJECT GRID */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {communityProjects.map((project) => (
              <CommunityProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {/* SUBMIT BUTTON */}
          <div className="mt-16 flex justify-center">
            <a
              href="https://github.com/Mrgtee/genlayer-community-projects/fork"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white"
            >
              Submit Your Project
            </a>
          </div>
        </section>

      </main>
    </>
  );
}