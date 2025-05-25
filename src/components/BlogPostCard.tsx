import Image from 'next/image';
import Link from 'next/link';
import { PostData } from '../lib/posts'; // Assuming PostData is in lib/posts.ts

interface BlogPostCardProps {
  post: PostData;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <div className="p-4">
      <Link href={`/blog/${post.id}`} className="flex flex-col @[768px]:flex-row items-stretch justify-between gap-4 rounded-lg bg-dark-bg-alt @[768px]:bg-transparent p-4 @[768px]:p-0 hover:bg-accent-bg-alt @[768px]:hover:bg-transparent transition-colors group">
        <div className="flex flex-[2_2_0px] flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-primary-text text-base font-bold leading-tight group-hover:text-button-blue-bg transition-colors">{post.title}</p>
            <p className="text-secondary-text text-sm font-normal leading-normal">
              {post.description}
            </p>
          </div>
          <button
            // The button itself is part of the link, so no separate onClick needed.
            // Styling it to look like a button for consistency.
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-accent-bg text-primary-text text-sm font-medium leading-normal w-fit group-hover:bg-button-blue-bg group-hover:text-white transition-colors"
          >
            <span className="truncate">Read More</span>
          </button>
        </div>
        {post.imageUrl && (
          <div className="relative w-full @[768px]:flex-1 aspect-video rounded-lg overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
      </Link>
    </div>
  );
} 