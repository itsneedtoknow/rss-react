export interface SearchItem {
  name: string;
  id: string;
  description: string;
}
export const SearchItems: SearchItem[] = [
  {
    id: "1",
    name: "React.js Starter Pack",
    description:
      "A complete toolkit for building modern web applications with class components.",
  },
  {
    id: "2",
    name: "TypeScript Deep Dive",
    description:
      "Comprehensive guide to master static typing, generics, and strict configurations.",
  },
  {
    id: "3",
    name: "Vite Bundler Config",
    description:
      "Blazing fast frontend build tool pre-configured for React and hot module replacement.",
  },
  {
    id: "4",
    name: "Local Storage Manager",
    description:
      "A utility library to synchronize application state with browser storage seamlessly.",
  },
  {
    id: "5",
    name: "Error Boundary Wrapper",
    description:
      "Robust React component to catch JavaScript errors anywhere in their child component tree.",
  },
];
