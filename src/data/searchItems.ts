export interface SearchItem {
  name: string;
  id: string;
  description: string;
  link?: string;
}
export const SearchItems: SearchItem[] = [
  {
    id: "1",
    name: "React.js Starter Pack",
    description:
      "A complete toolkit for building modern web applications with class components.",
    link: "/react-js",
  },

  {
    id: "2",
    name: "TypeScript Deep Dive",
    description:
      "Comprehensive guide to master static typing, generics, and strict configurations.",
    link: "/typescript",
  },
  {
    id: "3",
    name: "Vite Bundler Config",
    description:
      "Blazing fast frontend build tool pre-configured for React and hot module replacement.",
    link: "/vite",
  },
  {
    id: "4",
    name: "Local Storage Manager",
    description:
      "A utility library to synchronize application state with browser storage seamlessly.",
    link: "/local-storage",
  },
  {
    id: "5",
    name: "Error Boundary Wrapper",
    description:
      "Robust React component to catch JavaScript errors anywhere in their child component tree.",
    link: "/error-boundary",
  },
];
