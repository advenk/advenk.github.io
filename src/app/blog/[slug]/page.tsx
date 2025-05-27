import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { getAllPostIds, getPostData, PostData } from '../../../lib/posts';
import { BlogLogoIcon } from '../../../components/Icons';
import Link from 'next/link';
import Image from 'next/image';

const AVATAR_URL = '/AV2.jpeg';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const postData = await getPostData(params.slug);
  // Placeholder comments - replace with actual comment data and component
  const comments = [
    {
      author: 'Sophia Clark',
      date: '2 days ago',
      text: 'Great overview of data structures! This will be very helpful for my upcoming interviews.',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAql7fj9PMhkx6GE3dyGcATAsHVyZBjxBR3SCXcKCcr-ApuVkAZSn2VVoIYB447CJV6Iu-fmtvASoYxB19UAieYxk1cr1nCrU7AciQzNAz_2cDq1ZFcAqjs_a1Cm2jkhCXINnzV2JOf5bFW8iGwQM4VGVcsdTWIHy7_aSImswqRQ0FwPnpfOtPtSoiGcPRR5ziR0RDaSeKaeBmDP1CK04id535y3NG4a3CvDhebiMLWPWc_Vgv2rKpRs-C89NPBRNerr_gA86Ccfts',
    },
    {
      author: 'Ethan Bennett',
      date: '1 week ago',
      text: "I appreciate the clear explanations and examples. It's a good refresher on the basics.",
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBos0i_5V-IClNlIxpSjE4SEwSz95eBe1Jr0-lv1JK1dkUHKE1YIlWGfWRTSFifVWK_L2Nz-7UHt2zx6c8EXCNIA3ROWHczxOZzzpZivBs5PuXa6HPvq6rR-lw48OmttVRi-WP_dpbYi02Nay0OofqF8KMPSDoBe4qn-LuupQ6OT8fgaqgnLB0t8tcpZqaeyWGAEGDChRzN51ExIo1SxbNclxgZvyD1rTQQoC7DXrZlXrMuzuTV5TbZf2s6ivi2MrPcCJrALg0h7c',
    },
    {
      author: 'Olivia Hayes',
      date: '2 weeks ago',
      text: 'This article is well-written and easy to understand. Thank you for sharing your knowledge!',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiVkKkZEKcqleSCXRbLy_XUnG2mgYLcUlMLyIv_qryqX4fg_XqwrK3Wq65pKcWXKVJbZJm7zg58aELjHxrhUVpH-tzguRuOvAYM5xMNUm--mmywbzg1A041Kz46eR5hEeae0uHxLOVPRytBwUgSE1j4yQpIQRSGFTuI5Aomh7qg-_BAGtD-C_of1PW_bJUl8MWcSXjZhN_th3Zp8gQkLBITdQSgqtRKLDbmgM9-T3tbdo9MdpZTkLUlfb7qFVcw-qTxUXDnXqYC2c',
    },
  ];

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
          
          {/* Separator */}
          <hr className="border-accent-bg my-8 mx-4" />

          {/* Comments Section */}
          <h2 className="text-primary-text text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Comments
          </h2>
          <div className="px-4">
            {comments.map((comment, index) => (
              <div key={index} className="flex w-full flex-row items-start justify-start gap-3 py-4 border-b border-accent-bg last:border-b-0">
                <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden">
                    {comment.avatarUrl && <Image src={comment.avatarUrl} alt={comment.author} layout="fill" objectFit="cover" />}
                </div>
                <div className="flex h-full flex-1 flex-col items-start justify-start">
                  <div className="flex w-full flex-row items-center justify-start gap-x-3">
                    <p className="text-primary-text text-sm font-bold leading-normal tracking-[0.015em]">{comment.author}</p>
                    <p className="text-secondary-text text-xs font-normal leading-normal">{comment.date}</p>
                  </div>
                  <p className="text-primary-text text-sm font-normal leading-normal mt-1">{comment.text}</p>
                </div>
              </div>
            ))}
            {/* TODO: Add a form for new comments */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Removed getStaticPaths and getStaticProps as they are not used in App Router 