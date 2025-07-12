import type {
  NavigationLinks,
  SiteConfiguration,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Northshed Aerial Solutions – Hunter Valley Drone Operator",
  description:
    "Northshed Aerial Solutions is a professional drone operator based in the Hunter Valley, Australia. We provide high-quality aerial photography and videography services for various industries.",
  href: "https://northshed.com.au",
  author: "Twellve",
  locale: "en-AU",
};

export const PARENT_URL = "https://twellve.com?source=northshed";

export const NAV_LINKS: NavigationLinks = {};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    href: "mailto:jayden@northshed.com.au",
  },
  instagram: {
    label: "Instagram",
    href: "https://instagram.com/northshed?source=website",
  },
  facebook: {
    label: "Facebook",
    href: "https://facebook.com/northshed?source=website",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://linkedin.com/company/northshed?source=website",
  },
};
