import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2, Phone, Wifi, MapPin, Zap, MessageSquare, Shield, Globe, Users, Activity, Cpu, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, BRAND, PRICING_INTERNET, DAK_LAK_DISTRICTS } from '../constants';
import * as Icons from 'lucide-react';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.fromTo('.hero-content > *', 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power4.out'
        }
      );

      gsap.to('.hero-bg', {
        scale: 1.1,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'none'
      });

      // Section Fade-ins
      const sections = [pricingRef, servicesRef, benefitsRef, testimonialsRef, formRef];
      sections.forEach((section) => {
        if (section.current) {
          gsap.fromTo(section.current.querySelectorAll('.animate-on-scroll'), 
            { y: 50, opacity: 0 },
            {
              scrollTrigger: {
                trigger: section.current,
                start: 'top 80%',
                toggleActions: 'play none none none'
              },
              y: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.15,
              ease: 'power3.out'
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col w-full bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
            alt="Technology Background" 
            className="hero-bg w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 via-slate-50/90 to-slate-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(238,0,0,0.15)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="hero-content max-w-5xl">
            <div className="inline-flex items-center space-x-2 mb-8 px-4 py-2 bg-white border border-slate-200 rounded-full backdrop-blur-md">
              <Activity className="text-viettel-red animate-pulse" size={16} />
              <span className="text-slate-900/80 text-[10px] font-black uppercase tracking-[0.3em]">Viettel Đắk Lắk - Công Nghệ Dẫn Đầu</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-slate-900 leading-none mb-10 tracking-tighter uppercase">
              KẾT NỐI <br />
              <span className="text-viettel-red">TƯƠNG LAI</span> <br />
              TẠI ĐẮK LẮK
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {['Internet Cáp Quang', 'Truyền Hình 4K', 'Chữ Ký Số', 'Hóa Đơn Điện Tử'].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-slate-900/60 group">
                  <div className="w-6 h-6 rounded-full bg-viettel-red/10 flex items-center justify-center text-viettel-red group-hover:bg-viettel-red group-hover:text-white transition-all">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#register" className="btn-primary px-12 py-5 text-lg shadow-2xl shadow-viettel-red/20 group">
                Đăng ký ngay <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={`tel:${BRAND.phone}`}
                className="px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm text-slate-900 border border-slate-200 hover:bg-white transition-all flex items-center justify-center"
              >
                <Phone className="mr-3" size={20} />
                {BRAND.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-20 right-20 hidden lg:block animate-float">
          <div className="glass-card p-8 border-viettel-red/30">
            <Wifi className="text-viettel-red mb-4" size={32} />
            <div className="text-4xl font-black text-slate-900">1000<span className="text-viettel-red">Mbps</span></div>
            <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Tốc độ tối đa</div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 animate-on-scroll">
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter mb-6">BẢNG GIÁ <span className="text-viettel-red">INTERNET</span></h2>
            <p className="text-slate-600 text-xl font-medium">Gói cước cáp quang tốc độ cao dành cho gia đình & doanh nghiệp.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
            {PRICING_INTERNET.map((plan, i) => (
              <div 
                key={i} 
                className={cn(
                  "flex flex-col p-10 rounded-3xl border transition-all duration-500 hover:shadow-2xl",
                  i === 1 || i === 3 ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-900 border-slate-200 hover:border-viettel-red/30"
                )}
              >
                {i === 1 && (
                  <div className="inline-block px-4 py-1 bg-viettel-red text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-6 self-start">
                    Phổ biến nhất
                  </div>
                )}
                <h3 className={cn("text-2xl font-black uppercase tracking-tight mb-4", i === 1 || i === 3 ? "text-white" : "text-slate-900")}>{plan.name}</h3>
                <div className="text-sm font-bold text-slate-500 mb-6">{plan.speed}</div>
                <div className={cn("text-5xl font-black tracking-tighter mb-10", i === 1 || i === 3 ? "text-white" : "text-viettel-red")}>
                  {plan.price}
                  <span className="text-sm font-medium text-slate-500 ml-2">/tháng</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-sm flex items-center font-medium">
                      <CheckCircle2 size={16} className={cn("mr-3", i === 1 || i === 3 ? "text-viettel-red" : "text-emerald-500")} /> {f}
                    </li>
                  ))}
                  <li className="text-sm flex items-center font-medium text-slate-500">
                    <CheckCircle2 size={16} className="mr-3 text-slate-400" /> Tặng 1 tháng khi đóng trước 12 tháng
                  </li>
                  <li className="text-sm flex items-center font-medium text-slate-500">
                    <CheckCircle2 size={16} className="mr-3 text-slate-400" /> Phí hòa mạng: 300.000 VNĐ
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className={cn(
                    "w-full py-5 text-center font-black uppercase tracking-widest rounded-2xl transition-all duration-300",
                    i === 1 || i === 3 
                      ? "bg-viettel-red text-white hover:bg-viettel-dark" 
                      : "bg-slate-900 text-white hover:bg-viettel-red"
                  )}
                >
                  Đăng ký ngay
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 animate-on-scroll">
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter mb-6">DỊCH VỤ <span className="text-viettel-red">TOÀN DIỆN</span></h2>
            <div className="w-24 h-1 bg-viettel-red mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon] || Globe;
              return (
                <div
                  key={service.id}
                  className="animate-on-scroll group p-12 glass-card border-slate-100 hover:border-viettel-red/50 transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-viettel-red mb-10 group-hover:bg-viettel-red group-hover:text-white transition-all duration-500">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight group-hover:text-viettel-red transition-colors">{service.title}</h3>
                  <p className="text-slate-600 mb-10 leading-relaxed font-medium">{service.description}</p>
                  <Link to={service.path} className="inline-flex items-center font-black text-xs uppercase tracking-[0.2em] text-viettel-red group-hover:translate-x-2 transition-transform">
                    Tìm hiểu thêm <ArrowRight size={16} className="ml-3" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-12 leading-none uppercase tracking-tighter">
                TẠI SAO CHỌN <br />
                <span className="text-viettel-red">VIETTEL?</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { icon: Zap, title: 'Lắp đặt nhanh', desc: 'Cam kết triển khai trong 24h tại Buôn Ma Thuột.' },
                  { icon: Shield, title: 'Hỗ trợ 24/7', desc: 'Đội ngũ kỹ thuật túc trực xử lý sự cố tức thì.' },
                  { icon: Globe, title: 'Giá tốt nhất', desc: 'Nhiều ưu đãi hấp dẫn, tặng modem Wifi 6.' },
                  { icon: Users, title: 'Nhân viên bản địa', desc: 'Am hiểu địa bàn, hỗ trợ tận tâm tại Đắk Lắk.' }
                ].map((benefit, i) => (
                  <div key={i} className="flex flex-col space-y-4 group">
                    <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-viettel-red group-hover:bg-viettel-red group-hover:text-white transition-all duration-500">
                      <benefit.icon size={28} />
                    </div>
                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">{benefit.title}</h4>
                    <p className="text-slate-600 leading-relaxed font-medium">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-on-scroll group">
              <div className="absolute -inset-4 bg-viettel-red/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Support Team" 
                className="relative z-10 rounded-[3rem] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 border border-slate-200"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 glass-card p-6 border-viettel-red/30 animate-float">
                <div className="text-4xl font-black text-viettel-red">24/7</div>
                <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Hỗ trợ kỹ thuật</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-32 relative overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 animate-on-scroll">
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter mb-6">KHÁCH HÀNG <span className="text-viettel-red">TIN TƯỞNG</span></h2>
            <div className="w-24 h-1 bg-viettel-red mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Anh Nguyễn Minh Tuấn', role: 'Chủ quán Cafe, BMT', content: 'Mạng Viettel cực kỳ ổn định, lắp đặt xong là khách khen wifi mạnh hẳn.' },
              { name: 'Chị Lê Thị Thu Thảo', role: 'Kế toán trưởng', content: 'Hóa đơn điện tử và chữ ký số Viettel rất dễ dùng, hỗ trợ kỹ thuật nhiệt tình.' },
              { name: 'Anh Phạm Văn Hùng', role: 'Giám đốc DN', content: 'Dịch vụ chuyên nghiệp, nhân viên tại Đắk Lắk hỗ trợ rất nhanh chóng.' }
            ].map((t, i) => (
              <div key={i} className="animate-on-scroll p-10 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-viettel-red/20 transition-all duration-500 relative group">
                <div className="absolute top-8 right-8 text-viettel-red/10 group-hover:text-viettel-red/20 transition-colors">
                  <MessageSquare size={48} />
                </div>
                <p className="text-slate-700 text-lg italic mb-10 relative z-10 font-medium leading-relaxed">"{t.content}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-black text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase tracking-tight text-sm">{t.name}</h4>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" ref={formRef} className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card p-12 md:p-24 border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-viettel-red/5 blur-[120px] rounded-full -mr-48 -mt-48" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
              <div className="animate-on-scroll">
                <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-10 leading-none uppercase tracking-tighter">
                  ĐĂNG KÝ <br /><span className="text-viettel-red">TƯ VẤN NHANH</span>
                </h2>
                <p className="text-slate-600 text-xl mb-12 font-medium leading-relaxed">
                  Để lại thông tin, chuyên viên Viettel tại Đắk Lắk sẽ liên hệ tư vấn ngay cho bạn trong 15 phút.
                </p>
                
                <div className="space-y-10">
                  <div className="flex items-center space-x-6 group">
                    <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-viettel-red group-hover:bg-viettel-red group-hover:text-white transition-all duration-500">
                      <Phone size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Hotline hỗ trợ</p>
                      <p className="text-3xl font-black text-slate-900 tracking-tighter">{BRAND.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 group">
                    <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-viettel-red group-hover:bg-viettel-red group-hover:text-white transition-all duration-500">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Địa chỉ</p>
                      <p className="text-2xl font-black text-slate-900 tracking-tight">Viettel Đắk Lắk, TP. Buôn Ma Thuột</p>
                    </div>
                  </div>
                </div>
              </div>

              <form 
                className="animate-on-scroll space-y-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Cảm ơn bạn đã gửi yêu cầu. Chúng tôi sẽ liên hệ lại sớm nhất!');
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Họ và tên</label>
                    <input type="text" placeholder="Nhập họ tên" className="w-full px-8 py-5 rounded-2xl bg-white border border-slate-200 focus:border-viettel-red focus:bg-slate-100 outline-none transition-all text-slate-900 font-medium" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Số điện thoại</label>
                    <input type="tel" placeholder="Nhập số điện thoại" className="w-full px-8 py-5 rounded-2xl bg-white border border-slate-200 focus:border-viettel-red focus:bg-slate-100 outline-none transition-all text-slate-900 font-medium" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Địa chỉ lắp đặt</label>
                  <input type="text" placeholder="Nhập địa chỉ (Huyện, Xã, Thôn...)" className="w-full px-8 py-5 rounded-2xl bg-white border border-slate-200 focus:border-viettel-red focus:bg-slate-100 outline-none transition-all text-slate-900 font-medium" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Dịch vụ quan tâm</label>
                  <div className="relative">
                    <select className="w-full px-8 py-5 rounded-2xl bg-white border border-slate-200 focus:border-viettel-red focus:bg-slate-100 outline-none transition-all text-slate-900 font-medium appearance-none">
                      <option className="bg-slate-50">Internet Cáp Quang</option>
                      <option className="bg-slate-50">Combo Internet + Truyền Hình</option>
                      <option className="bg-slate-50">Chữ Ký Số Viettel-CA</option>
                      <option className="bg-slate-50">Hóa Đơn Điện Tử</option>
                      <option className="bg-slate-50">Hợp Đồng Điện Tử</option>
                      <option className="bg-slate-50">Phần Mềm Bán Hàng</option>
                      <option className="bg-slate-50">Thành Lập Doanh Nghiệp</option>
                    </select>
                    <MousePointer2 className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full py-6 text-xl mt-6 shadow-2xl shadow-viettel-red/20 uppercase tracking-widest font-black">
                  Gửi yêu cầu đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center space-x-6 group">
              <div className="w-20 h-20 bg-viettel-red rounded-3xl flex items-center justify-center text-white font-black text-3xl shadow-2xl shadow-viettel-red/20 group-hover:rotate-6 transition-transform">
                {BRAND.representative[0]}
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight">{BRAND.representative}</h3>
                <p className="text-xs font-black text-viettel-red uppercase tracking-[0.3em]">{BRAND.position}</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-3">Hotline Tư Vấn 24/7</p>
              <a href={`tel:${BRAND.phone}`} className="text-5xl md:text-7xl font-black text-slate-900 hover:text-viettel-red transition-colors tracking-tighter">
                {BRAND.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
