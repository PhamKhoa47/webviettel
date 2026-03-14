import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, BRAND } from '../constants';
import * as Icons from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" 
            alt="Digital Transformation" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-viettel-red text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Viettel Đắk Lắk
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
              Internet Viettel – Giải pháp <span className="text-viettel-red">chuyển đổi số</span> doanh nghiệp
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Cung cấp hạ tầng viễn thông tốc độ cao và các giải pháp số toàn diện giúp doanh nghiệp tối ưu vận hành và bứt phá doanh thu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-viettel-red text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-viettel-dark transition-all flex items-center justify-center group"
              >
                Đăng ký tư vấn miễn phí
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href={`tel:${BRAND.phone}`}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                {BRAND.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dịch vụ tiêu biểu</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Hệ sinh thái giải pháp số đa dạng, đáp ứng mọi nhu cầu của cá nhân và doanh nghiệp.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-viettel-red shadow-sm mb-6 group-hover:bg-viettel-red group-hover:text-white transition-colors">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 line-clamp-2">{service.description}</p>
                  <Link to={service.path} className="text-viettel-red font-bold inline-flex items-center group-hover:underline transition-all">
                    Xem chi tiết <ArrowRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Tại sao nên chọn dịch vụ của chúng tôi?</h2>
              <div className="space-y-6">
                {[
                  { title: 'Hạ tầng viễn thông hàng đầu', desc: 'Mạng lưới cáp quang phủ khắp 63 tỉnh thành, tốc độ ổn định vượt trội.' },
                  { title: 'Giải pháp số toàn diện', desc: 'Hệ sinh thái đa dạng từ Internet, Chữ ký số đến Hóa đơn điện tử.' },
                  { title: 'Hỗ trợ 24/7 chuyên nghiệp', desc: 'Đội ngũ kỹ thuật và CSKH tại Đắk Lắk luôn sẵn sàng hỗ trợ tức thì.' },
                  { title: 'Chi phí tối ưu', desc: 'Nhiều gói cước linh hoạt, phù hợp với mọi quy mô doanh nghiệp.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="mt-1 bg-emerald-100 text-emerald-600 p-1 rounded-full">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-viettel-red/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-viettel-red/10 rounded-full blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" 
                alt="Business Team" 
                className="relative z-10 rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Khách hàng nói gì về chúng tôi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Anh Tuấn', role: 'Chủ quán Cafe', content: 'Internet Viettel rất ổn định, khách hàng của tôi rất hài lòng với tốc độ wifi tại quán.' },
              { name: 'Chị Lan', role: 'Giám đốc Startup', content: 'Dịch vụ chữ ký số và hóa đơn điện tử của Viettel giúp doanh nghiệp tôi tiết kiệm rất nhiều thời gian.' },
              { name: 'Anh Hùng', role: 'Quản lý cửa hàng', content: 'Phần mềm bán hàng Tendoo rất dễ sử dụng, báo cáo chi tiết giúp tôi quản lý kho cực kỳ hiệu quả.' }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-slate-600 italic mb-6">"{t.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-viettel-red rounded-full flex items-center justify-center text-white font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-viettel-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Sẵn sàng bứt phá cùng giải pháp số Viettel?</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">Liên hệ ngay để được tư vấn giải pháp tối ưu nhất cho doanh nghiệp của bạn.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-viettel-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl">
              Đăng ký tư vấn ngay
            </Link>
            <a href={`tel:${BRAND.phone}`} className="bg-viettel-dark text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-900 transition-all border border-white/20">
              Gọi hotline: {BRAND.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
