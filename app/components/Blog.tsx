'use client';

import Link from 'next/link';
import { getRecentBlogPosts } from '../data/blogData';
import { useLocale } from './LocaleProvider';

const Blog = () => {
    const { t } = useLocale();
    const recentPosts = getRecentBlogPosts(3);

    return (
        <section id="blog" className="py-5 position-relative overflow-hidden">
            {/* Background Decoration */}
            <div className="why-bg-decoration">
                <div className="blob blob-1" style={{ top: '-10%', left: '-10%', opacity: 0.15 }}></div>
                <div className="blob blob-2" style={{ bottom: '-10%', right: '-10%', opacity: 0.15 }}></div>
            </div>

            <div className="container position-relative z-1">
                <div className="text-center mb-5" data-aos="fade-up">
                    <p className="text-uppercase text-primary fw-bold mb-2 letter-spacing-1">
                        {t('blog.subtitle')}
                    </p>
                    <h2 className="display-4 fw-bold mb-4">
                        {t('blog.title')} <span className="text-gradient">{t('blog.titleGradient')}</span>
                    </h2>
                    <p className="lead text-white-80 mx-auto" style={{ maxWidth: '700px' }}>
                        {t('blog.description')}
                    </p>
                </div>

                <div className="row g-4">
                    {recentPosts.map((post, index) => (
                        <div
                            key={post.id}
                            className="col-lg-4 col-md-6"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                                <div className="blog-card glass-panel h-100 p-0 overflow-hidden">
                                    <div className="blog-image-wrapper position-relative overflow-hidden">
                                        <div
                                            className="blog-image"
                                            style={{
                                                backgroundImage: `url(${post.image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                height: '220px',
                                                transition: 'transform 0.3s ease'
                                            }}
                                        >
                                            <div className="blog-category-badge position-absolute top-0 start-0 m-3">
                                                <span className="badge bg-primary">{post.category}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <div className="d-flex align-items-center gap-3 mb-3 text-white-60 small">
                                            <span>
                                                <i className="bi bi-calendar3 me-2"></i>
                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                            <span>
                                                <i className="bi bi-clock me-2"></i>
                                                {post.readTime}
                                            </span>
                                        </div>

                                        <h3 className="h5 fw-bold text-white mb-3" style={{ minHeight: '60px' }}>
                                            {post.title}
                                        </h3>

                                        <p className="text-white-70 mb-4" style={{ minHeight: '72px' }}>
                                            {post.excerpt}
                                        </p>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex gap-2 flex-wrap">
                                                {post.tags.slice(0, 3).map((tag, i) => (
                                                    <span key={i} className="badge badge-tag">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="blog-read-more">
                                                <i className="bi bi-arrow-right fs-5 text-primary"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="300">
                    <Link href="/blog" className="btn btn-primary btn-lg">
                        {t('blog.viewAll')}
                        <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Blog;
