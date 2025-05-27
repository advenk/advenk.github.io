import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), '_posts');

export interface PostData {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl?: string; // Optional: for blog post cards
  contentHtml?: string; // Optional: for individual blog post page
  author?: string; // Optional
  tags?: string[]; // Optional
}

export function getSortedPostsData(): PostData[] {
  // Get file names under /_posts
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  if (fileNames.length === 0) {
    return [];
  }
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      title: matterResult.data.title || 'Untitled Post',
      date: matterResult.data.date || new Date().toISOString().split('T')[0],
      description: matterResult.data.description || '',
      imageUrl: matterResult.data.imageUrl || '',
      author: matterResult.data.author || 'Aditya', // Default author
      tags: matterResult.data.tags || [],
      ...(matterResult.data as { title?: string; date?: string, description?: string, imageUrl?: string, author?: string, tags?: string[] }),
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
}

export function getAllPostIds() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  if (fileNames.length === 0) {
    return [];
  }
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }));
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    title: matterResult.data.title || 'Untitled Post',
    date: matterResult.data.date || new Date().toISOString().split('T')[0],
    description: matterResult.data.description || '',
    imageUrl: matterResult.data.imageUrl || '',
    author: matterResult.data.author || 'Aditya', // Default author
    tags: matterResult.data.tags || [],
    ...(matterResult.data as { title?: string; date?: string, description?: string, imageUrl?: string, author?: string, tags?: string[] }),
  };
}
