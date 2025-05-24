'use client';

import BlogLayout1 from "../components/blog-layout-1";
import BlogLayout2 from "../components/blog-layout-2";
import BlogLayout3 from "../components/blog-layout-3";

export default function ClientBlogPost({ post }) {
  switch (post.layout) {
    case 1:
      return <BlogLayout1 post={post} />;
    case 2:
      return <BlogLayout2 post={post} />;
    case 3:
      return <BlogLayout3 post={post} />;
    default:
      return <BlogLayout1 post={post} />;
  }
}