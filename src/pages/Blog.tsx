import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Hướng dẫn đăng ký thành lập doanh nghiệp mới nhất 2024',
      excerpt: 'Toàn bộ quy trình và hồ sơ cần chuẩn bị để khởi nghiệp thuận lợi...',
      category: 'Khởi nghiệp',
      date: '12/03/2024',
      image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      title: 'Tại sao doanh nghiệp nên chuyển sang Hợp đồng điện tử?',
      excerpt: 'Tiết kiệm chi phí, thời gian và tăng tính bảo mật cho các giao dịch...',
      category: 'Chuyển đổi số',
      date: '10/03/2024',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      title: 'Top 5 gói cước Internet Viettel tốt nhất cho văn phòng',
      excerpt: 'Lựa chọn băng thông phù hợp để đảm bảo công việc luôn thông suốt...',
      category: 'Internet Viettel',
      date: '08/03/2024',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Tin tức & Blog</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Cập nhật những thông tin mới nhất về công nghệ, chuyển đổi số và kinh nghiệm khởi nghiệp.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {posts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative h-64 mb-6 overflow-hidden rounded-3xl">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-viettel-red text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-xs text-slate-500 mb-4">
                  <div className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</div>
                  <div className="flex items-center"><User size={14} className="mr-1" /> Admin</div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-viettel-red transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">{post.excerpt}</p>
                <Link to="#" className="text-viettel-red font-bold inline-flex items-center text-sm">
                  Đọc thêm <ArrowRight size={16} className="ml-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
