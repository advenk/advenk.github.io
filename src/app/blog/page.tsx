import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogPostCard from '../../components/BlogPostCard';
import { getSortedPostsData, PostData } from '../../lib/posts';
import { BlogLogoIcon, MagnifyingGlassIcon, CaretLeftIcon, CaretRightIcon } from '../../components/Icons';

const AVATAR_URL = '/AV2.jpeg';

const categories = ['All']; // Only "All" category for now

export default function BlogPage() {
  const allPostsData = getSortedPostsData();
  const displayedPosts = allPostsData; // Show all posts for now
  const currentPage = 1; // Default to 1
  const totalPages = 1; // Default to 1 as pagination is not implemented yet

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-dark-bg group/design-root overflow-x-hidden">
      <Header pageTitle="TechBlog" logoIcon={<BlogLogoIcon />} showSearchIcon={false} avatarUrl={AVATAR_URL}/>
      <main className="flex-grow flex justify-center py-5 px-4 sm:px-10 md:px-40 pt-20">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <h1 className="text-primary-text tracking-light text-[32px] font-bold leading-tight">Blog Posts</h1>
              <p className="text-secondary-text text-sm font-normal leading-normal">Explore my thoughts on software engineering, technology trends, and personal projects.</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-12 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-secondary-text flex border-none bg-accent-bg items-center justify-center pl-4 rounded-l-lg border-r-0">
                  <MagnifyingGlassIcon size="20px" className="text-secondary-text-alt"/>
                </div>
                <input
                  placeholder="Search blog posts"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-primary-text focus:outline-0 focus:ring-0 border-none bg-accent-bg h-full placeholder:text-secondary-text-alt px-4 pl-2 text-base font-normal leading-normal"
                  // value={...} onChange={...} // TODO: Implement search state and logic
                />
              </div>
            </label>
          </div>

          {/* Category Filters */}
          <div className="flex gap-3 p-3 flex-wrap pr-4">
            {categories.map(category => (
              <button
                key={category}
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-accent-bg px-4 text-primary-text text-sm font-medium leading-normal hover:bg-accent-bg-alt transition-colors focus:outline-none focus:ring-2 focus:ring-button-blue-bg"
                // onClick={() => handleCategoryFilter(category)} // TODO: Implement filter logic
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Post Cards */}
          {displayedPosts.length === 0 ? (
            <div className="p-4 text-center text-secondary-text">
              <p>No blog posts yet. Stay tuned!</p>
            </div>
          ) : (
            <div className="@container">
              {displayedPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {/* Pagination - Hidden if only one page */}
          {totalPages > 1 && (
             <div className="flex items-center justify-center p-4 mt-8">
              <button 
                disabled={currentPage === 1}
                // onClick={() => handlePageChange(currentPage - 1)} // TODO: Implement pagination
                className="flex size-10 items-center justify-center text-secondary-text hover:text-primary-text disabled:opacity-50 transition-colors"
              >
                <CaretLeftIcon />
              </button>
              {
                (() => {
                  const pageNumbers = [];
                  const maxPagesToShow = 5; // Number of page links to show (excluding ellipses)
                  const halfMax = Math.floor(maxPagesToShow / 2);

                  if (totalPages <= maxPagesToShow + 2) { // Show all pages if not too many
                    for (let i = 1; i <= totalPages; i++) {
                      pageNumbers.push(i);
                    }
                  } else {
                    pageNumbers.push(1); // Always show first page
                    if (currentPage > halfMax + 2) {
                      pageNumbers.push('...');
                    }

                    let startPage = Math.max(2, currentPage - halfMax);
                    let endPage = Math.min(totalPages - 1, currentPage + halfMax);

                    if (currentPage <= halfMax + 1) {
                        endPage = Math.min(totalPages - 1, maxPagesToShow);
                    } else if (currentPage >= totalPages - halfMax) {
                        startPage = Math.max(2, totalPages - maxPagesToShow + 1);
                    }

                    for (let i = startPage; i <= endPage; i++) {
                      pageNumbers.push(i);
                    }

                    if (currentPage < totalPages - halfMax - 1) {
                      pageNumbers.push('...');
                    }
                    pageNumbers.push(totalPages); // Always show last page
                  }

                  return pageNumbers.map((page, index) => {
                    if (page === '...') {
                      return <span key={`ellipsis-${index}`} className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-secondary-text">...</span>;
                    }
                    return (
                      <button
                        key={page}
                        // onClick={() => handlePageChange(page as number)} // TODO: Implement pagination
                        className={`text-sm font-normal leading-normal flex size-10 items-center justify-center rounded-full transition-colors ${currentPage === page ? 'bg-accent-bg text-primary-text font-bold' : 'text-secondary-text hover:text-primary-text'}`}
                      >
                        {page}
                      </button>
                    );
                  });
                })()
              }
              <button 
                disabled={currentPage === totalPages}
                // onClick={() => handlePageChange(currentPage + 1)} // TODO: Implement pagination
                className="flex size-10 items-center justify-center text-secondary-text hover:text-primary-text disabled:opacity-50 transition-colors"
                >
                <CaretRightIcon />
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 