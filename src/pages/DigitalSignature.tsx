import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Clock, CheckCircle2, FileText, Briefcase, Activity, Lock, Cpu, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING_CA, BRAND } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DigitalSignature() {
  const pricingRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pricing cards animation
      gsap.fromTo(".pricing-card", 
        { y: 60, opacity: 0 },
        {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: pricingRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }
      );

      // Features animation
      gsap.fromTo(".feature-item", 
        { y: 0, opacity: 0 },
        {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
        scale: 0.9,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* Header */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070" 
            alt="Digital Signature Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 via-slate-50/90 to-slate-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(238,0,0,0.15)_0%,transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-8 backdrop-blur-md">
              <Lock className="text-viettel-red" size={16} />
              <span className="text-slate-900/80 text-[10px] font-black uppercase tracking-[0.3em]">Chứng thực số quốc gia</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-none tracking-tighter uppercase">
              CHỮ KÝ SỐ <br /><span className="text-viettel-red">VIETTEL-CA</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Giải pháp chứng thực chữ ký số hàng đầu Việt Nam. An toàn tuyệt đối, bảo mật đa lớp và được pháp luật công nhận 100%.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="btn-primary px-10 py-4 text-lg">
                Đăng ký ngay
              </Link>
              <a href="#pricing" className="px-10 py-4 bg-white border border-slate-200 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-100 transition-all">
                Xem bảng giá
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: 'Bảo mật tuyệt đối', 
                desc: 'Sử dụng công nghệ mã hóa RSA 2048-bit tiên tiến nhất, đảm bảo tính toàn vẹn của dữ liệu.',
                color: 'text-blue-400',
                bg: 'bg-blue-400/10'
              },
              { 
                icon: Zap, 
                title: 'Tiết kiệm thời gian', 
                desc: 'Ký kết văn bản, kê khai thuế, bảo hiểm xã hội mọi lúc mọi nơi mà không cần gặp mặt trực tiếp.',
                color: 'text-orange-400',
                bg: 'bg-orange-400/10'
              },
              { 
                icon: Clock, 
                title: 'Hỗ trợ 24/7', 
                desc: 'Đội ngũ chuyên gia Viettel Đắk Lắk luôn sẵn sàng hỗ trợ kỹ thuật bất cứ khi nào bạn cần.',
                color: 'text-emerald-400',
                bg: 'bg-emerald-400/10'
              }
            ].map((item, i) => (
              <div key={i} className="feature-item glass-card p-10 border-slate-100 group hover:border-slate-300 transition-all duration-500">
                <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">ỨNG DỤNG ĐA NỀN TẢNG</h2>
            <p className="text-slate-600 font-medium">Chữ ký số Viettel-CA tương thích với mọi hệ thống hành chính công</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Kê khai Thuế', icon: FileText, desc: 'Tổng cục Thuế' },
              { title: 'Hải quan điện tử', icon: Briefcase, desc: 'Tổng cục Hải quan' },
              { title: 'Bảo hiểm xã hội', icon: ShieldCheck, desc: 'BHXH Việt Nam' },
              { title: 'Giao dịch Ngân hàng', icon: Zap, desc: 'Internet Banking' }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 border-slate-100 flex flex-col items-center text-center group hover:bg-slate-100 transition-all duration-500">
                <div className="w-14 h-14 bg-viettel-red/10 text-viettel-red rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <item.icon size={28} />
                </div>
                <h4 className="font-black text-slate-900 uppercase tracking-tight mb-2">{item.title}</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" ref={pricingRef} className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6">BẢNG GIÁ DỊCH VỤ</h2>
            <div className="w-24 h-1 bg-viettel-red mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_CA.map((plan, i) => (
              <div key={i} className="pricing-card glass-card p-10 border-slate-100 hover:border-viettel-red/50 transition-all relative overflow-hidden group flex flex-col">
                {i === 2 && (
                  <div className="absolute top-0 right-0 bg-viettel-red text-white text-[10px] font-black px-6 py-2 rounded-bl-2xl uppercase tracking-[0.2em] z-20">
                    Phổ biến nhất
                  </div>
                )}
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Gói {plan.duration}</h3>
                  
                  <div className="mb-8 p-6 bg-white rounded-2xl border border-slate-100">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Đăng ký mới</div>
                    <div className="text-4xl font-black text-viettel-red tracking-tighter">{plan.price}</div>
                  </div>

                  <div className="mb-8 space-y-2">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Gia hạn dịch vụ</div>
                    <div className="text-xl font-bold text-slate-900/80">{plan.renewalPrice}</div>
                  </div>

                  <div className="mb-10 py-3 px-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                    <p className="text-emerald-400 font-black text-xs uppercase tracking-wider text-center">{plan.promo}</p>
                  </div>

                  <ul className="space-y-5 mb-12">
                    {[
                      'Hỗ trợ cài đặt tận nơi',
                      'Bảo hành Token trọn đời',
                      'Hỗ trợ kỹ thuật 24/7',
                      'Tương thích mọi HĐH'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-sm font-medium text-slate-600">
                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto relative z-10">
                  <Link to="/contact" className="w-full btn-primary py-5 text-lg group overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center">
                      Đăng ký ngay
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
                
                {/* Decorative background element */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-viettel-red/5 blur-[100px] rounded-full group-hover:bg-viettel-red/10 transition-colors" />
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
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase">SẴN SÀNG <br /><span className="text-viettel-red">CHUYỂN ĐỔI SỐ?</span></h2>
            <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto font-medium">
              Liên hệ ngay với chuyên viên Viettel Đắk Lắk để được tư vấn giải pháp chữ ký số tối ưu nhất cho doanh nghiệp của bạn.
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
