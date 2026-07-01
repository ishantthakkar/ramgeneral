import { Metadata } from 'next';
import Link from 'next/link';
import { createClient } from '@/prismicio';
import { PrismicText } from '@prismicio/react';

export const metadata: Metadata = {
  title: 'Blog - Neutron Supply INC Supply',
  description: 'Read the latest updates and blog posts from Neutron Supply INC',
};

export default async function Blog() {
  const client = createClient();
  let posts: any[] = [];
  
  try {
    posts = await client.getAllByType('blog');
    console.log("Prismic Debug: Fetched blogs count:", posts.length);
  } catch (error) {
    console.error("Prismic fetch error for blogs:", error);
  }

  return (
    <main id="main">
      {/* ======= Breadcrumbs ======= */}
      <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('/assets/img/breadcrumbs-bg.jpg')" }}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
          <h2>Blog</h2>
          <ol>
            <li><Link href="/">Home</Link></li>
            <li>Blog</li>
          </ol>
        </div>
      </div>{/* End Breadcrumbs */}

      {/* ======= Blog Section ======= */}
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 posts-list">
            
            {posts.length > 0 ? (
              posts.map((post) => {
                // Determine date for rendering
                const dateObj = new Date(post.first_publication_date || post.last_publication_date);
                const month = dateObj.toLocaleString('en-US', { month: 'long' });
                const day = dateObj.getDate();

                return (
                  <div className="col-xl-4 col-md-6" key={post.id}>
                    <div className="post-item position-relative h-100">
                      <div className="post-img position-relative overflow-hidden">
                        {post.data.img && post.data.img.url ? (
                          <img src={post.data.img.url} className="img-fluid" alt={post.data.img.alt || 'Blog Post Image'} />
                        ) : (
                          <img src="/assets/img/blog/blog-1.jpg" className="img-fluid" alt="Placeholder" />
                        )}
                        <span className="post-date">{month} {day}</span>
                      </div>

                      <div className="post-content d-flex flex-column">
                        <h3 className="post-title">
                          {typeof post.data.title === 'string' ? post.data.title : (post.data.title?.[0]?.text || 'Untitled Post')}
                        </h3>

                        <div className="meta d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-person"></i> <span className="ps-2">Admin</span>
                          </div>
                          <span className="px-3 text-black-50">/</span>
                          <div className="d-flex align-items-center">
                            <i className="bi bi-folder2"></i> <span className="ps-2">General</span>
                          </div>
                        </div>

                        <p className="mt-auto">
                          {typeof post.data.description === 'string' 
                            ? post.data.description 
                            : (post.data.description?.[0]?.text?.substring(0, 150) + '...' || 'Read more about this topic...')}
                        </p>

                        <hr />

                        <Link href={`/blog/${post.uid}`} className="readmore stretched-link">
                          <span>Read More</span><i className="bi bi-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-12 text-center py-5">
                <h4>No blog posts found at the moment. Please check back later!</h4>
              </div>
            )}
            
          </div>
        </div>
      </section>{/* End Blog Section */}
    </main>
  );
}
