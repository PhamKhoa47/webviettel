import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants';
import { ArrowRight, Calendar, User, Tag, Activity, Cpu, Phone, ShieldCheck, Smartphone, MapPin } from 'lucide-react';
import { LOCATIONS, slugify } from '../data/locations';
import { BLOG_POSTS } from '../data/posts';

export default function Blog() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(238,0,0,0.1)_0%,transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-8 backdrop-blur-md">
              <Activity className="text-viettel-red" size={16} />
              <span className="text-slate-900/80 text-[10px] font-black uppercase tracking-[0.3em]">Tin tức công nghệ mới nhất</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-none tracking-tighter uppercase">
              TIN TỨC <br /><span className="text-viettel-red">& BLOG</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Cập nhật những thông tin mới nhất về công nghệ, chuyển đổi số và kinh nghiệm khởi nghiệp tại Đắk Lắk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {BLOG_POSTS.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <Link to={`/blog/post/${post.slug}`} className="block flex-grow">
                  <div className="relative h-72 mb-8 overflow-hidden rounded-[2rem] border border-slate-200">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 bg-viettel-red text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xl">
                      {post.category}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="flex items-center space-x-6 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
                    <div className="flex items-center"><Calendar size={14} className="mr-2 text-viettel-red" /> {post.date}</div>
                    <div className="flex items-center"><User size={14} className="mr-2 text-viettel-red" /> {post.author}</div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-viettel-red transition-colors leading-tight uppercase tracking-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 font-medium text-sm mb-8 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                </Link>
                
                <div className="mt-auto">
                  <Link to={`/blog/post/${post.slug}`} className="text-viettel-red font-black uppercase tracking-widest text-xs inline-flex items-center group/link">
                    Đọc thêm 
                    <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">LẮP ĐẶT INTERNET VIETTEL <br /><span className="text-viettel-red">TẠI ĐẮK LẮK</span></h2>
            <div className="w-24 h-1 bg-viettel-red mx-auto" />
            <p className="mt-6 text-slate-600 font-medium">Chọn khu vực của bạn để xem chi tiết dịch vụ và ưu đãi</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {LOCATIONS.map((loc, i) => (
              <Link 
                key={i} 
                to={`/blog/${slugify(loc)}`}
                className="glass-card p-4 border-slate-100 hover:border-viettel-red/50 hover:bg-viettel-red/5 transition-all group flex items-center"
              >
                <MapPin size={16} className="text-viettel-red mr-3 shrink-0 group-hover:animate-bounce" />
                <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors truncate">{loc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-viettel-red/10" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-viettel-red/20 blur-[120px] rounded-full -mr-48 -mb-48" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase">CẬP NHẬT <br /><span className="text-viettel-red">TIN TỨC CÔNG NGHỆ</span></h2>
            <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto font-medium">
              Đăng ký nhận bản tin để không bỏ lỡ các chương trình khuyến mãi và giải pháp công nghệ mới nhất từ Viettel Đắk Lắk.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
              <input type="email" placeholder="Địa chỉ email của bạn" className="flex-1 bg-white border border-slate-200 px-8 py-5 rounded-2xl text-slate-900 focus:border-viettel-red focus:bg-slate-100 outline-none transition-all font-bold" />
              <button className="btn-primary px-12 py-5 text-lg">
                Đăng ký ngay
              </button>
            </div>
            <div className="mt-12 flex items-center justify-center space-x-8">
              <a href={`tel:${BRAND.phone}`} className="flex items-center text-slate-900/60 hover:text-viettel-red transition-colors font-black uppercase tracking-widest text-xs">
                <Phone size={16} className="mr-2" />
                Hotline: {BRAND.phone}
              </a>
              <div className="w-1 h-1 bg-slate-100 rounded-full" />
              <span className="text-slate-900/60 font-black uppercase tracking-widest text-xs">Hỗ trợ 24/7</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
