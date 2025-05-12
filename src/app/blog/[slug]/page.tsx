import { getAllPostSlugs, getPostData, PostContent } from '../../../lib/posts';
import Navigation from '../../../components/Navigation';
import { notFound } from 'next/navigation';

// Generate static paths for all posts
export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map(p => p.params);
}

// Fetch data for a specific post
async function getPost(params: { slug: string }): Promise<PostContent | null> {
  try {
    const postData = await getPostData(params.slug);
    return postData;
  } catch (error) {
    // If the post file doesn't exist, return null
    console.error(`Error fetching post data for slug ${params.slug}:`, error);
    return null;
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params);

  if (!post) {
    notFound(); // Show 404 if post not found
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <article className="prose prose-invert lg:prose-xl max-w-none">
            <h1 className="text-4xl font-light mb-2 neon-text">{post.title}</h1>
            <p className="text-[var(--text-secondary)] text-sm mb-8">{post.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </article>
        </div>
      </main>
    </>
  );
}

// Optional: Add styling for the prose content if needed
// You might need to install @tailwindcss/typography if you haven't
// and add it to your tailwind.config.js plugins: [require('@tailwindcss/typography'),]
// Ensure your global CSS or layout includes styles for basic HTML elements rendered from markdown. 