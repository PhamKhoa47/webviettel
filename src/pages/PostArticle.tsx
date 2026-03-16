import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { BRAND } from '../constants';
import { BLOG_POSTS } from '../data/posts';

export default function PostArticle() {
  const { slug } = useParams<{ slug: string }>();
  
  const post = BLOG_POSTS.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Viettel Đắk Lắk`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.excerpt);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = post.excerpt;
        document.head.appendChild(meta);
      }
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50/80 to-slate-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(238,0,0,0.15)_0%,transparent_70%)]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-viettel-red transition-colors font-bold text-sm mb-8 uppercase tracking-widest">
              <ArrowLeft size={16} className="mr-2" />
              Quay lại tin tức
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-full backdrop-blur-md">
                <Tag className="text-viettel-red" size={16} />
                <span className="text-slate-900/80 text-[10px] font-black uppercase tracking-[0.3em]">{post.category}</span>
              </div>
              <div className="flex items-center text-slate-500 text-sm font-medium">
                <Calendar size={16} className="mr-2 text-viettel-red" />
                {post.date}
              </div>
              <div className="flex items-center text-slate-500 text-sm font-medium">
                <User size={16} className="mr-2 text-viettel-red" />
                {post.author}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tighter uppercase">
              {post.title}
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed border-l-4 border-viettel-red pl-6">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 border-slate-100">
            <div 
              className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:font-medium prose-li:text-slate-700 prose-li:font-medium prose-strong:text-slate-900"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="bg-gradient-to-br from-viettel-red/20 to-slate-50 border border-viettel-red/30 rounded-3xl p-8 mt-16 text-center">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">Bạn cần tư vấn thêm?</h3>
              <p className="text-slate-700 mb-6 font-medium">Đội ngũ chuyên gia của Viettel Đắk Lắk luôn sẵn sàng hỗ trợ bạn 24/7.</p>
              
              <a href={`tel:${BRAND.phone}`} className="inline-flex items-center justify-center bg-viettel-red text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-lg transition-all shadow-2xl shadow-viettel-red/20 hover:-translate-y-1">
                <Phone size={24} className="mr-3" />
                Hotline: {BRAND.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
