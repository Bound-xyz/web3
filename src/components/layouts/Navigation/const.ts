export const navigationMenus = [
  { name: "Project", href: "#" },
  { name: "Certification", href: "#" },
  { name: "Communication", href: "#" },
] as const;

export type NavigationMenus = typeof navigationMenus[number]["name"];
