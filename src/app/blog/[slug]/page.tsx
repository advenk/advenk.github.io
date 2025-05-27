import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { getAllPostIds, getPostData, PostData } from '../../../lib/posts';
import { BlogLogoIcon } from '../../../components/Icons';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const AVATAR_URL = '/AV2.jpeg';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  // If no posts exist, return empty array
  // This prevents the build error when using output: 'export'
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const postData = await getPostData(params.slug);

    return (
      <div className="relative flex size-full min-h-screen flex-col bg-dark-bg-alt group/design-root overflow-x-hidden">
        <Header pageTitle="TechBlog" logoIcon={<BlogLogoIcon />} showSearchIcon={false} avatarUrl={AVATAR_URL} />
        <main className="flex-grow flex justify-center py-5 px-4 sm:px-10 md:px-40 pt-20">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 p-4 text-sm">
              <Link href="/blog" className="text-secondary-text hover:text-primary-text transition-colors">
                Blog
              </Link>
              <span className="text-secondary-text">/</span>
              <span className="text-primary-text">{postData.title}</span>
            </div>

            {/* Post Header */}
            <h1 className="text-primary-text tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
              {postData.title}
            </h1>
            <p className="text-secondary-text text-sm font-normal leading-normal pb-3 pt-1 px-4">
              By {postData.author || 'Alex Turner'} | Published on {new Date(postData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            {/* Post Content */}
            <article className="prose prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none px-4 py-5 text-primary-text" dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} />
          </div>
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    // If post doesn't exist, show 404
    notFound();
  }
}

// Removed getStaticPaths and getStaticProps as they are not used in App Router 