import { blogPosts } from '../../../data/blog-posts';
import ClientBlogPost from './ClientBlogPost';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;

export default async function BlogPostPage({ params }) {
  try {
    const paramsObject = await Promise.resolve(params);
    const slug = paramsObject?.slug;
    
    if (!slug) {
      return notFound();
    }
    
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
      return notFound();
    }

    return <ClientBlogPost post={post} />;
  } catch (error) {
    console.error("Error resolving params:", error);
    return notFound();
  }
}