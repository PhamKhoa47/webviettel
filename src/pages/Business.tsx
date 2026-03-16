import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants';
import { Rocket, Briefcase, Store, CheckCircle2, Shield, Zap, Users, Headphones, Globe, TrendingUp, Activity, ArrowRight, Cpu, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Business() {
  const packagesRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Packages animation
      gsap.fromTo(".package-card", 
        { y: 60, opacity: 0 },
        {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: packagesRef.current,
          start: "top 80%",
        },
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }
      );

      // Benefits animation
      gsap.fromTo(".benefit-item", 
        { y: 0, opacity: 0 },
        {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: benefitsRef.current,
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

  const packages = [
    {
      title: 'Gói Khởi nghiệp (Startup)',
      icon: <Rocket size={32} />,
      items: [
        'Thành lập doanh nghiệp trọn gói',
        'Chữ ký số Viettel-CA (1 năm)',
        'Hóa đơn điện tử (300 hóa đơn)',
        'Tư vấn pháp lý ban đầu',
        'Hỗ trợ khai thuế quý đầu'
      ],
      color: 'text-blue-400',
      bg: 'bg-blue-400/10'
    },
    {
      title: 'Gói Chuyển đổi số',
      icon: <Briefcase size={32} />,
      items: [
        'Internet Cáp quang tốc độ cao',
        'Hợp đồng điện tử vContract',
        'Chữ ký số Cloud-CA',
        'Giải pháp lưu trữ Cloud',
        'Bảo mật mạng doanh nghiệp'
      ],
      color: 'text-viettel-red',
      bg: 'bg-viettel-red/10'
    },
    {
      title: 'Gói Bán lẻ (Retail)',
      icon: <Store size={32} />,
      items: [
        'Internet Viettel tốc độ cao',
        'Phần mềm bán hàng Tendoo',
        'Hóa đơn điện tử S-Invoice',
        'Tích hợp thanh toán QR',
        'Báo cáo doanh thu tự động'
      ],
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10'
    }
  ];

  const benefits = [
    { title: 'Hạ tầng vững chắc', desc: 'Hệ thống cáp quang và trung tâm dữ liệu chuẩn quốc tế.', icon: <Shield /> },
    { title: 'Tối ưu chi phí', desc: 'Các gói cước linh hoạt, tiết kiệm ngân sách vận hành.', icon: <TrendingUp /> },
    { title: 'Hỗ trợ 24/7', desc: 'Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ mọi lúc.', icon: <Headphones /> },
    { title: 'Kết nối toàn cầu', desc: 'Giải pháp số giúp doanh nghiệp vươn ra thị trường.', icon: <Globe /> }
  ];

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
              <Cpu className="text-viettel-red" size={16} />
              <span className="text-slate-900/80 text-[10px] font-black uppercase tracking-[0.3em]">Hệ sinh thái số Viettel</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-none tracking-tighter uppercase">
              GIẢI PHÁP <br /><span className="text-viettel-red">DOANH NGHIỆP</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Viettel Đắk Lắk đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số, tối ưu hóa quy trình và bứt phá doanh thu với công nghệ tiên phong.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section ref={packagesRef} className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6">GÓI GIẢI PHÁP TIÊU BIỂU</h2>
            <div className="w-24 h-1 bg-viettel-red mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div key={i} className="package-card glass-card p-10 border-slate-100 hover:border-slate-300 transition-all duration-500 group relative overflow-hidden">
                <div className={`w-16 h-16 ${pkg.bg} ${pkg.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {pkg.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">{pkg.title}</h3>
                <ul className="space-y-5 mb-12">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex items-start space-x-4 text-slate-600 font-medium">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="w-full py-4 rounded-xl bg-white border border-slate-200 text-slate-900 font-black uppercase tracking-widest text-xs hover:bg-viettel-red hover:text-white hover:border-viettel-red transition-all text-center block">
                  Liên hệ nhận ưu đãi
                </Link>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white blur-3xl rounded-full group-hover:bg-viettel-red/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-black text-slate-900 mb-20 text-center uppercase tracking-tighter">TẠI SAO CHỌN CHÚNG TÔI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="benefit-item glass-card p-8 border-slate-100 hover:bg-slate-100 transition-all group">
                <div className="text-viettel-red mb-6 group-hover:scale-110 transition-transform duration-500">{b.icon}</div>
                <h4 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">{b.title}</h4>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-slate-900 mb-20 text-center uppercase tracking-tighter">CÂU HỎI THƯỜNG GẶP</h2>
          <div className="space-y-6">
            {[
              { q: 'Doanh nghiệp mới thành lập có được ưu đãi không?', a: 'Có, chúng tôi có các gói giải pháp đặc biệt dành riêng cho doanh nghiệp khởi nghiệp với chi phí tối ưu và hỗ trợ pháp lý trọn gói.' },
              { q: 'Thời gian triển khai giải pháp là bao lâu?', a: 'Thông thường từ 1-3 ngày làm việc tùy thuộc vào độ phức tạp của giải pháp và nhu cầu cụ thể của doanh nghiệp.' },
              { q: 'Có hỗ trợ kỹ thuật sau khi bàn giao không?', a: 'Chắc chắn, đội ngũ kỹ thuật của chúng tôi hỗ trợ 24/7 qua hotline và các kênh trực tuyến, đảm bảo hệ thống luôn vận hành ổn định.' }
            ].map((faq, i) => (
              <div key={i} className="glass-card p-8 border-slate-100 hover:border-slate-300 transition-all">
                <h4 className="text-lg font-black text-slate-900 mb-4 uppercase tracking-tight">{faq.q}</h4>
                <p className="text-slate-600 font-medium leading-relaxed">{faq.a}</p>
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
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase">SẴN SÀNG <br /><span className="text-viettel-red">BỨT PHÁ DOANH THU?</span></h2>
            <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto font-medium">
              Liên hệ ngay với chuyên viên Viettel Đắk Lắk để được tư vấn các giải pháp số hóa toàn diện cho doanh nghiệp của bạn.
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

      {/* Process Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-20 uppercase tracking-tighter">QUY TRÌNH TRIỂN KHAI</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: '01', title: 'Tư vấn nhu cầu', desc: 'Khảo sát và tư vấn giải pháp phù hợp nhất.' },
              { step: '02', title: 'Thiết kế giải pháp', desc: 'Xây dựng phương án kỹ thuật tối ưu.' },
              { step: '03', title: 'Triển khai lắp đặt', desc: 'Thi công nhanh chóng, chuyên nghiệp.' },
              { step: '04', title: 'Bàn giao & Hỗ trợ', desc: 'Hướng dẫn sử dụng và hỗ trợ 24/7.' }
            ].map((p, i) => (
              <div key={i} className="relative group">
                <div className="text-7xl font-black text-slate-900/5 mb-6 group-hover:text-viettel-red/20 transition-colors duration-500">{p.step}</div>
                <h4 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">{p.title}</h4>
                <p className="text-slate-600 text-sm font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
