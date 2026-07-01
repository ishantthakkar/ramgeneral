import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createClient } from '@/prismicio';
import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';

type Params = { uid: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  
  try {
    const page = await client.getByUID('blog', uid);
    return {
      title: `${typeof page.data.title === 'string' ? page.data.title : (page.data.title?.[0]?.text || 'Blog Post')} - Neutron Supply INC Supply`,
    };
  } catch (e) {
    return {
      title: 'Blog Post Not Found',
    };
  }
}

export default async function BlogDetails({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  let post;
  
  try {
    post = await client.getByUID('blog', uid);
  } catch (e) {
    notFound();
  }

  const dateObj = new Date(post.first_publication_date || post.last_publication_date);
  const formattedDate = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  const titleStr = typeof post.data.title === 'string' ? post.data.title : (post.data.title?.[0]?.text || 'Untitled Post');

  return (
    <main id="main">
      {/* ======= Breadcrumbs ======= */}
      <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('/assets/img/breadcrumbs-bg.jpg')" }}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
          <h2>Blog Details</h2>
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li>Blog Details</li>
          </ol>
        </div>
      </div>{/* End Breadcrumbs */}

      {/* ======= Blog Details Section ======= */}
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-5">
            
            <div className="col-lg-8">
              <article className="blog-details">
                <div className="post-img">
                  {post.data.img && post.data.img.url ? (
                    <img src={post.data.img.url} alt={post.data.img.alt || titleStr} className="img-fluid" />
                  ) : (
                    <img src="/assets/img/blog/blog-1.jpg" alt="" className="img-fluid" />
                  )}
                </div>

                <h2 className="title">{titleStr}</h2>

                <div className="meta-top">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i> <a href="#">Admin</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i> 
                      <a href="#"><time dateTime={dateObj.toISOString()}>{formattedDate}</time></a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-chat-dots"></i> <a href="#">0 Comments</a>
                    </li>
                  </ul>
                </div>{/* End meta top */}

                <div className="content">
                  {typeof post.data.description === 'string' ? (
                    <p>{post.data.description}</p>
                  ) : post.data.description ? (
                    <PrismicRichText field={post.data.description} />
                  ) : null}
                </div>{/* End post content */}

                <div className="meta-bottom">
                  <i className="bi bi-folder"></i>
                  <ul className="cats">
                    <li><a href="#">General</a></li>
                  </ul>

                  <i className="bi bi-tags"></i>
                  <ul className="tags">
                    <li><a href="#">Updates</a></li>
                    <li><a href="#">Lighting</a></li>
                  </ul>
                </div>{/* End meta bottom */}

              </article>{/* End blog post */}

              {/* Removing dynamic comments to just mock the visual block slightly to keep structure */}
            </div>

            <div className="col-lg-4">
              <div className="sidebar">

                <div className="sidebar-item search-form">
                  <h3 className="sidebar-title">Search</h3>
                  <form action="" className="mt-3">
                    <input type="text" />
                    <button type="button"><i className="bi bi-search"></i></button>
                  </form>
                </div>{/* End sidebar search formn*/}

                <div className="sidebar-item categories">
                  <h3 className="sidebar-title">Categories</h3>
                  <ul className="mt-3">
                    <li><a href="#">General <span>(1)</span></a></li>
                  </ul>
                </div>{/* End sidebar categories*/}

              </div>{/* End Blog Sidebar */}
            </div>

          </div>
        </div>
      </section>{/* End Blog Details Section */}

    </main>
  );
}
