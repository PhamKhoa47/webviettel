import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Wifi, Zap, Shield, Headphones, ArrowRight, CheckCircle2, MapPin, Clock, HelpCircle, Globe, Cpu, Activity, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING_INTERNET, BRAND, DAK_LAK_DISTRICTS } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function InternetViettel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pricing-card', 
        { y: 50, opacity: 0 },
        {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pricing-grid',
          start: 'top 80%',
        }
      }
      );

      gsap.fromTo('.benefit-item', 
        { y: 0, x: -30, opacity: 0 },
        {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.benefits-section',
          start: 'top 85%',
        }
      }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col w-full bg-slate-50 text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=2000" 
            alt="Fiber Optic Internet Dak Lak" 
            className="w-full h-full object-cover opacity-20 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-slate-50/80 to-slate-50" />
          
          {/* Animated background elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-viettel-red/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-8 backdrop-blur-md">
              <Activity className="text-viettel-red animate-pulse" size={16} />
              <span className="text-slate-900/80 text-[10px] font-black uppercase tracking-[0.3em]">Hạ tầng Gpon Thế Hệ Mới</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter">
              INTERNET <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-viettel-red to-red-400">SIÊU TỐC ĐỘ</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
              Trải nghiệm chuẩn Wifi 6 tiên tiến nhất tại Đắk Lắk. Tốc độ vượt trội, ổn định tuyệt đối cho mọi nhu cầu giải trí và làm việc.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#pricing" className="btn-primary px-10 py-5 text-lg group">
                <span>Khám phá gói cước</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href={`tel:${BRAND.phone}`} className="px-10 py-5 rounded-2xl font-black text-lg border border-slate-200 hover:bg-white transition-all flex items-center backdrop-blur-md">
                <Phone className="mr-3 text-viettel-red" size={20} />
                {BRAND.phone}
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Cuộn xuống</span>
          <div className="w-px h-12 bg-gradient-to-b from-viettel-red to-transparent" />
        </div>
      </section>

      {/* Stats/Benefits Section */}
      <section className="py-32 benefits-section relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: 'Siêu Tốc Độ', desc: 'Băng thông lên đến 1Gbps, không giới hạn.', color: 'text-yellow-400' },
              { icon: Globe, title: 'Phủ Sóng Rộng', desc: 'Có mặt tại 100% xã, huyện Đắk Lắk.', color: 'text-blue-400' },
              { icon: Shield, title: 'Bảo Mật Cao', desc: 'Hệ thống an ninh mạng chuẩn quân đội.', color: 'text-emerald-400' },
              { icon: Cpu, title: 'Thiết Bị Wifi 6', desc: 'Trang bị Modem thế hệ mới nhất.', color: 'text-viettel-red' }
            ].map((item, i) => (
              <div key={i} className="benefit-item glass-card p-8 group hover:border-viettel-red/50 transition-all duration-500">
                <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 ${item.color} group-hover:bg-viettel-red group-hover:text-white transition-all duration-500`}>
                  <item.icon size={28} />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase">Bảng Giá Cước <span className="text-viettel-red">Ưu Đãi</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">Lựa chọn gói cước phù hợp nhất với nhu cầu của bạn tại khu vực Đắk Lắk.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 pricing-grid">
            {PRICING_INTERNET.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card glass-card p-8 flex flex-col relative group transition-all duration-500 ${
                  index === 2 ? 'border-viettel-red/50 bg-viettel-red/5' : ''
                }`}
              >
                {index === 2 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-viettel-red text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap z-20">
                    Phổ biến nhất
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-sm font-black text-viettel-red mb-4 uppercase tracking-widest">{plan.name}</h3>
                  <div className="text-3xl font-black text-slate-900 mb-2 tracking-tighter">{plan.speed}</div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-black text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 text-xs ml-2 font-bold uppercase tracking-widest">/tháng</span>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-100 mb-8" />

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3 text-slate-600 group/item">
                      <CheckCircle2 size={16} className="text-viettel-red shrink-0 mt-0.5" />
                      <span className="text-xs font-medium leading-relaxed group-hover/item:text-slate-900 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className={`w-full py-4 rounded-2xl font-black text-center transition-all text-xs uppercase tracking-widest ${
                    index === 2 
                      ? 'bg-viettel-red text-white hover:bg-viettel-dark shadow-lg shadow-viettel-red/20' 
                      : 'bg-white text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  Đăng ký ngay
                </Link>
              </div>
            ))}
          </div>
          
          {/* Promo Box */}
          <div className="mt-24 glass-card p-12 border-viettel-red/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-viettel-red/10 blur-[80px] rounded-full -mr-32 -mt-32 group-hover:bg-viettel-red/20 transition-all duration-700" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-viettel-red/20 text-viettel-red rounded-full mb-4">
                  <Zap size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Khuyến mãi cực sốc</span>
                </div>
                <h4 className="text-3xl font-black text-slate-900 mb-4 tracking-tight uppercase">Ưu đãi lắp đặt <br />trong tháng này</h4>
                <p className="text-slate-600 font-medium">Đăng ký ngay để nhận trọn bộ quà tặng và ưu đãi cước phí tốt nhất.</p>
              </div>
              
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Tặng đến 2 tháng cước khi đóng trước.',
                  'Miễn phí 100% phí lắp đặt & vật tư.',
                  'Trang bị Modem Wifi 6 thế hệ mới.',
                  'Tặng kèm bộ giải mã TV360 4K.',
                  'Hỗ trợ kỹ thuật ưu tiên trong 2h.',
                  'Tặng SIM 4G Viettel tốc độ cao.'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-slate-100 hover:border-viettel-red/30 transition-all duration-300">
                    <div className="w-2 h-2 bg-viettel-red rounded-full shadow-[0_0_10px_rgba(238,0,0,0.8)]" />
                    <span className="text-sm font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-viettel-red/20 blur-2xl rounded-[3rem] animate-pulse" />
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                  alt="Dak Lak Network" 
                  className="relative rounded-[2rem] shadow-2xl border border-slate-200"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute -bottom-8 -right-8 glass-card p-8 border-viettel-red/30 max-w-xs">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                    <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Hạ tầng sẵn sàng</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">Hệ thống cáp quang đã phủ sóng 100% trung tâm các huyện và xã tại Đắk Lắk.</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase">Khu vực hỗ trợ <br /><span className="text-viettel-red">Toàn Tỉnh Đắk Lắk</span></h2>
              <p className="text-slate-600 mb-12 text-lg font-medium leading-relaxed">
                Viettel tự hào là nhà mạng có hạ tầng cáp quang sâu rộng nhất, đảm bảo kết nối ổn định ngay cả ở những khu vực vùng sâu vùng xa.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {DAK_LAK_DISTRICTS.map((district, i) => (
                  <div key={i} className="flex items-center space-x-3 text-slate-700 group cursor-default">
                    <div className="w-1.5 h-1.5 bg-viettel-red rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-sm font-bold group-hover:text-slate-900 transition-colors">{district}</span>
                  </div>
                ))}
              </div>
              <div className="mt-16 flex items-center space-x-6">
                <Link to="/contact" className="btn-primary px-8 py-4">
                  Kiểm tra hạ tầng
                </Link>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Hỗ trợ nhanh</span>
                  <span className="text-slate-900 font-bold">24/7 Toàn Tỉnh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase">Giải đáp thắc mắc</h2>
            <p className="text-slate-600 font-medium">Những thông tin bạn cần biết khi đăng ký dịch vụ.</p>
          </div>
          
          <div className="space-y-6">
            {[
              { q: 'Thủ tục đăng ký tại Đắk Lắk cần những gì?', a: 'Cực kỳ đơn giản! Cá nhân chỉ cần CCCD bản gốc hoặc ảnh chụp. Doanh nghiệp cần Giấy phép kinh doanh và CCCD người đại diện.' },
              { q: 'Thời gian lắp đặt thực tế là bao lâu?', a: 'Viettel cam kết lắp đặt trong vòng 24h. Tại TP. Buôn Ma Thuột, đội ngũ kỹ thuật thường có mặt và hoàn tất ngay trong buổi.' },
              { q: 'Thiết bị Wifi 6 có ưu điểm gì?', a: 'Wifi 6 cung cấp tốc độ nhanh hơn 3 lần, khả năng kết nối nhiều thiết bị cùng lúc mà không lag, và vùng phủ sóng rộng hơn chuẩn cũ.' },
              { q: 'Tôi có thể thanh toán cước ở đâu?', a: 'Tiện lợi qua My Viettel, Viettel Money, chuyển khoản hoặc tại hàng trăm điểm giao dịch Viettel trên toàn tỉnh.' }
            ].map((faq, i) => (
              <div key={i} className="glass-card p-8 border-slate-100 hover:border-slate-200 transition-all group">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-viettel-red/10 rounded-2xl flex items-center justify-center text-viettel-red shrink-0 group-hover:bg-viettel-red group-hover:text-white transition-all duration-500">
                    <HelpCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900 mb-3 uppercase tracking-tight">{faq.q}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-viettel-red/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">Sẵn sàng kết nối <br /><span className="text-viettel-red">Thế Giới Số?</span></h2>
            <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto font-medium">Đừng để kết nối chậm làm gián đoạn công việc và giải trí của bạn. Đăng ký ngay hôm nay!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="btn-primary px-12 py-5 text-lg">
                Đăng ký trực tuyến
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
