export type NavItem = {
  href?: string;
  label: string;
  isDonate?: boolean;
  dropdown?: { href: string; label: string }[];
};

export const navigation: NavItem[] = [
  { href: "/", label: "HOME" },
  {
    label: "ABOUT",
    dropdown: [
      { href: "/about", label: "Our Story" },
      { href: "/about/team", label: "Our People" },
    ],
  },
  {
    label: "PROJECT",
    dropdown: [
      { href: "/project", label: "Project Overview" },
      { href: "/approach", label: "Our Approach" },
      { href: "/impact", label: "Impact Framework" },
    ],
  },
  { href: "/news", label: "BLOG" },
  { href: "/get-involved", label: "GET INVOLVED" },
  { href: "/contact", label: "DONATE", isDonate: true },
];

export const quickLinks = [
  { href: "/about", label: "Our Story" },
  { href: "/project", label: "Project Overview" },
  { href: "/impact", label: "Impact Framework" },
  { href: "/news", label: "Blog" },
  { href: "mailto:westpapuacare@gmail.com", label: "Contact" },
];

export const getInvolvedLinks = [
  { href: "/get-involved#funders", label: "For Funding Partners" },
  { href: "/get-involved#researchers", label: "For Researchers" },
  { href: "/get-involved#partners", label: "For Organisations" },
  { href: "/get-involved#supporters", label: "For Individuals" },
];

export const socialLinks = [
  {
    href: "mailto:westpapuacare@gmail.com",
    label: "Email",
    icon: "mail",
  },
  {
    href: "https://www.instagram.com/westpapuacareorg",
    label: "Instagram",
    icon: "instagram",
  },
  {
    href: "https://www.youtube.com/@WestPapuaCare",
    label: "YouTube",
    icon: "youtube",
  },
];
