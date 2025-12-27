export type BlogPost = {
  title: string;
  excerpt: string;
  date: string; // "August 19, 2025"
  slug: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Hi, Hafizh Here!",
    excerpt:
      "Why I started this portfolio and my motivation to keep my journey well-documented.",
    date: "August 19, 2025",
    slug: "hi-hafizh-here",
  },
];
