// This file can later be replaced with an API or CMS.
// For now, it acts as a static registry of community projects.

export type CommunityProject = {
  name: string;
  slug: string;
  logo: string;
  description: string;
  website: string;
  domainLabel: string;
};

export const communityProjects: CommunityProject[] = [
  {
    name: "Intelligent Oracle",
    slug: "intelligent-oracle",
    logo: "/project-logos/intelligentoracle.svg",
    description:
      "AI-powered oracle infrastructure for resolving real-world outcomes.",
    website: "https://intelligentoracle.com",
    domainLabel: "intelligentoracle.com",
  },
  {
    name: "Internet Court",
    slug: "internet-court",
    logo: "/project-logos/internetcourt.svg",
    description:
      "A dispute resolution layer for internet agreements using AI judgment.",
    website: "https://internetcourt.org",
    domainLabel: "internetcourt.org",
  },
  {
    name: "argue.fun",
    slug: "argue-fun",
    logo: "/project-logos/argue.svg",
    description:
      "An argument market powered by structured reasoning and AI evaluation.",
    website: "https://argue.fun",
    domainLabel: "argue.fun",
  },
  {
    name: "Rally",
    slug: "rally",
    logo: "/project-logos/rally.svg",
    description:
      "A decentralized coordination platform for internet-native campaigns.",
    website: "https://rally.fun",
    domainLabel: "rally.fun",
  },
  {
    name: "MergeProof",
    slug: "mergeproof",
    logo: "/project-logos/mergeproof.svg",
    description:
      "A merge validation system bringing stronger verification to code workflows.",
    website: "https://mergeproof.com",
    domainLabel: "mergeproof.com",
  },
  {
    name: "Molly",
    slug: "molly",
    logo: "/project-logos/molly.svg",
    description:
      "Agent tooling connecting autonomous workflows with incentives.",
    website: "https://molly.fun",
    domainLabel: "molly.fun",
  },
  {
    name: "BOTCHA",
    slug: "botcha",
    logo: "/project-logos/botcha.svg",
    description:
      "A system for verifying real agent capability through interaction.",
    website: "https://botcha.xyz",
    domainLabel: "botcha.xyz",
  },
];