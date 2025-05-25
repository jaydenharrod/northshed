import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Northshed Aerial Solutions – Regional NSW Drone Solutions",
  description:
    "Northshed provides drone solutions for agriculture, construction, insurance, and property management across the Hunter and New England regions of NSW. Certified, insured, and locally operated.",
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
