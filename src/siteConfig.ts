import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Northshed Aerial Solutions – Regional NSW Drone Operator",
  description:
    "Certified ReOC & RePL drone operator providing an aerial perspective with drone technology. Servicing NSW with drone-based visual inspections, damage assessments, progress reports, and media needs.",
  href: "https://northshed.com.au",
  author: "Telemetry Works",
  locale: "en-AU",
};

export const NAV_LINKS: NavigationLinks = {};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    href: "mailto:jayden@northshed.com.au",
  },
  instagram: {
    label: "Instagram",
    href: "https://instagram.com/northshed",
  },
  facebook: {
    label: "Facebook",
    href: "https://facebook.com/northshed",
  },
};
