import Navigation from '../../components/Navigation'
import { getSortedPostsData, PostData } from '../../lib/posts';
import Link from 'next/link';

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-light mb-12 neon-text">Blog</h1>
          {allPostsData.length === 0 ? (
             <p className="text-[var(--text-secondary)]">No posts yet. Coming soon...</p>
          ) : (
            <ul className="space-y-6">
              {allPostsData.map(({ slug, date, title }: PostData) => (
                <li key={slug}>
                  <Link href={`/blog/${slug}`} className="block group">
                    <h2 className="text-2xl font-light group-hover:neon-text transition-colors duration-300">
                      {title}
                    </h2>
                    <p className="text-[var(--text-secondary)] text-sm mt-1">{date}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  )
} 