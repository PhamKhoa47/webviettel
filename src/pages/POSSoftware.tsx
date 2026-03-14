import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Database, Users, BarChart3, CheckCircle2, Smartphone, ShieldCheck, ShoppingCart, Bot, CreditCard, Globe } from 'lucide-react';

export default function POSSoftware() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2070" 
            alt="Tendoo POS System" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-slate-900/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white"
            >
              <span className="inline-block px-4 py-1.5 bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                Hơn 100.000+ chủ kinh doanh tin dùng
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Nền tảng quản lý bán hàng thông minh <span className="text-emerald-400">Tendoo</span>
              </h1>
              <p className="text-xl text-emerald-50/90 mb-8 leading-relaxed">
                Thành thạo sau 5 phút. Không cần thêm thiết bị cồng kềnh. Quản lý từ xa trên điện thoại. Giải pháp toàn diện cho cửa hàng bán lẻ, tạp hóa, nhà hàng.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-lg">
                  Dùng thử miễn phí 7 ngày
                </Link>
                <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                  Xem bảng giá
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1000" 
                alt="POS System Interface" 
                className="rounded-3xl shadow-2xl border-4 border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ecosystem Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Hệ sinh thái tính năng toàn diện</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Tendoo mang đến giải pháp quản lý từ A-Z, giúp bạn tối ưu vận hành và bứt phá doanh thu.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Quản lý bán hàng toàn trình', icon: <ShoppingCart />, desc: 'Bán hàng đa kênh, quản lý đơn hàng, kho bãi và liên kết vận chuyển thông minh.' },
              { title: 'Tích hợp trợ lý ảo AI', icon: <Bot />, desc: 'AI tư vấn kinh doanh, phân tích dữ liệu và đưa ra gợi ý tối ưu doanh thu tự động.' },
              { title: 'Tuân thủ quy định pháp luật', icon: <ShieldCheck />, desc: 'Hỗ trợ xuất hóa đơn điện tử, sổ sách kế toán, kê khai thuế đúng quy định nhà nước.' },
              { title: 'Kết nối tài chính & Thanh toán', icon: <CreditCard />, desc: 'Thanh toán QR động, thông báo tiền về tức thì, quản lý dòng tiền minh bạch.' },
              { title: 'Sàn Thương mại điện tử', icon: <Globe />, desc: 'Đồng bộ sản phẩm, tồn kho và đơn hàng với các sàn TMĐT phổ biến.' },
              { title: 'Lưu trữ dữ liệu an toàn', icon: <Database />, desc: 'Dữ liệu được bảo mật và lưu trữ trên hạ tầng điện toán đám mây chuẩn quốc tế.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Bảng giá & Ưu đãi</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Chọn gói cước phù hợp với quy mô kinh doanh của bạn. Tặng thêm 25% thời gian sử dụng khi đăng ký dài hạn.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Gói 7 ngày', 
                price: 'Miễn phí', 
                period: 'Trải nghiệm',
                features: ['Trải nghiệm tất cả tính năng', 'Quyết định linh hoạt sau trải nghiệm', 'Hỗ trợ kỹ thuật 24/7'],
                popular: false
              },
              { 
                name: 'Gói 1 năm', 
                price: 'Liên hệ', 
                period: '/năm',
                features: ['Quản lý bán hàng đa kênh', 'Tích hợp trợ lý ảo A.I', 'Hỗ trợ xuất hóa đơn điện tử', 'Đào tạo trực tiếp từ chuyên gia'],
                popular: true
              },
              { 
                name: 'Gói 3 năm', 
                price: 'Liên hệ', 
                period: '/3 năm',
                features: ['Tất cả tính năng Gói 1 năm', 'Tặng 25% số tháng sử dụng', 'Ưu tiên hỗ trợ kỹ thuật', 'Cập nhật tính năng miễn phí'],
                popular: false
              }
            ].map((plan, i) => {
              const cardClass = plan.popular ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10' : 'bg-slate-50 border border-slate-100';
              const textClass = plan.popular ? 'text-white' : 'text-slate-900';
              const priceClass = plan.popular ? 'text-emerald-400' : 'text-emerald-600';
              const periodClass = plan.popular ? 'text-slate-400' : 'text-slate-500';
              const iconClass = plan.popular ? 'text-emerald-400' : 'text-emerald-500';
              const featureTextClass = plan.popular ? 'text-slate-300' : 'text-slate-600';
              const btnClass = plan.popular ? 'bg-emerald-500 text-white hover:bg-emerald-400' : 'bg-white border-2 border-slate-200 text-slate-900 hover:border-emerald-500 hover:text-emerald-600';

              return (
                <div key={i} className={"rounded-3xl p-8 relative " + cardClass}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-3xl uppercase tracking-widest">
                      Khuyên dùng
                    </div>
                  )}
                  <h3 className={"text-xl font-bold mb-4 " + textClass}>{plan.name}</h3>
                  <div className="mb-8">
                    <span className={"text-4xl font-black " + priceClass}>{plan.price}</span>
                    <span className={"text-sm " + periodClass}>{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start space-x-3">
                        <CheckCircle2 size={20} className={"shrink-0 " + iconClass} />
                        <span className={featureTextClass}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={"block text-center w-full py-4 rounded-xl font-bold transition-all " + btnClass}>
                    Đăng ký ngay
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
