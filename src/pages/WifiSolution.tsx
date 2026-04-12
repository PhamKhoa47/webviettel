import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Wifi, Router, Zap, CheckCircle2, Shield, Activity, Cpu, Globe, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { PRICING_INTERNET } from '../constants';

gsap.registerPlugin(ScrollTrigger);

export default function WifiSolution() {
  const meshPlans = PRICING_INTERNET.filter(plan => plan.name.startsWith('MESH'));
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.mesh-card', 
        { y: 60, opacity: 0 },
        {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.mesh-grid',
          start: 'top 80%',
        }
      }
      );

      gsap.fromTo('.pricing-card', 
        { y: 0, opacity: 0 },
        {
        y: 0,
        opacity: 1,
        scale: 0.9,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.pricing-grid',
          start: 'top 80%',
        }
      }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-slate-50 text-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(238,0,0,0.1)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-8 backdrop-blur-md">
                <Activity className="text-viettel-red" size={16} />
                <span className="text-slate-900/80 text-[10px] font-black uppercase tracking-[0.3em]">Giải pháp phủ sóng toàn diện</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-none tracking-tighter uppercase">
                HOME WIFI <br /><span className="text-viettel-red">MESH</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 font-medium leading-relaxed max-w-xl">
                Xóa tan "điểm chết" Wifi trong nhà bạn. Phủ sóng mọi ngóc ngách với công nghệ Mesh hiện đại nhất từ Viettel Đắk Lắk.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/contact" className="btn-primary px-10 py-5 text-sm">
                  Tư vấn giải pháp ngay
                </Link>
                <div className="flex items-center space-x-4 px-6 py-4 bg-white border border-slate-200 rounded-2xl backdrop-blur-md">
                  <Globe className="text-viettel-red" size={24} />
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Phủ sóng</div>
                    <div className="text-slate-900 font-bold">100% Diện tích</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-viettel-red/20 blur-[100px] rounded-full animate-pulse" />
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000" 
                alt="Wifi Mesh" 
                className="relative z-10 rounded-[3rem] shadow-2xl border border-slate-200 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 glass-card p-8 border-slate-200 animate-bounce-slow">
                <Wifi className="text-viettel-red mb-2" size={32} />
                <div className="text-2xl font-black">Wi-Fi 6</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Thế hệ mới</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">TẠI SAO NÊN DÙNG <span className="text-viettel-red">HOME WIFI?</span></h2>
            <div className="w-24 h-1 bg-viettel-red mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mesh-grid">
            {[
              { title: 'Phủ sóng rộng', desc: 'Hệ thống nhiều thiết bị kết nối tạo thành mạng lưới thống nhất, không góc chết.', icon: <Wifi size={40} /> },
              { title: 'Chuyển vùng mượt mà', desc: 'Tự động kết nối thiết bị với node mạnh nhất khi di chuyển trong nhà.', icon: <Zap size={40} /> },
              { title: 'Dễ dàng cài đặt', desc: 'Quản lý tập trung qua ứng dụng My Viettel cực kỳ tiện lợi và thông minh.', icon: <Router size={40} /> }
            ].map((item, i) => (
              <div key={i} className="mesh-card glass-card p-12 group hover:bg-slate-100 transition-all duration-500 border-slate-100">
                <div className="text-viettel-red mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(238,0,0,0.05)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">CÁC GÓI CƯỚC <span className="text-viettel-red">MESH</span></h2>
            <p className="text-xl text-slate-600 font-medium">Lựa chọn gói cước phù hợp với diện tích căn nhà của bạn tại Đắk Lắk.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pricing-grid">
            {meshPlans.map((plan, i) => (
              <div key={i} className="pricing-card glass-card p-12 border-slate-200 hover:border-viettel-red/50 transition-all duration-500 group relative overflow-hidden">
                {i === 1 && (
                  <div className="absolute top-0 right-0 bg-viettel-red text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-bl-2xl">
                    Phổ biến nhất
                  </div>
                )}
                <h3 className="text-2xl font-black text-viettel-red mb-6 uppercase tracking-widest">{plan.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-6xl font-black text-slate-900 tracking-tighter">{plan.speed}</span>
                </div>
                <div className="text-2xl font-black text-slate-900/80 mb-10">
                  {plan.price}
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-2">/ Tháng</span>
                </div>
                
                <div className="h-px bg-slate-100 w-full mb-10" />
                
                <ul className="space-y-6 mb-12">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start space-x-4 text-sm font-medium text-slate-600">
                      <CheckCircle2 size={18} className="text-viettel-red shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className="w-full py-5 rounded-2xl bg-white border border-slate-200 text-slate-900 font-black uppercase tracking-widest text-xs hover:bg-viettel-red hover:text-white hover:border-viettel-red transition-all text-center block">
                  Đăng ký ngay
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase">SẴN SÀNG <br /><span className="text-viettel-red">PHỦ SÓNG WIFI MESH?</span></h2>
            <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto font-medium">
              Liên hệ ngay với chuyên viên Viettel Đắk Lắk để được tư vấn giải pháp Wifi Mesh tối ưu nhất cho ngôi nhà hoặc doanh nghiệp của bạn.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="btn-primary px-12 py-5 text-lg">
                Đăng ký ngay
              </Link>
              <a href={`tel:${BRAND.phone}`} className="px-12 py-5 rounded-2xl font-black text-lg border border-slate-200 hover:bg-white transition-all flex items-center justify-center backdrop-blur-md">
                <Phone className="mr-3 text-viettel-red" size={20} />
                {BRAND.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
