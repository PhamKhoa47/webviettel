import React from 'react';
import { motion } from 'motion/react';
import { FileCheck, ShieldCheck, Zap, CheckCircle2, Clock, Smartphone, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EContract() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2070" 
            alt="Hợp đồng điện tử vContract" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-viettel-red/90 to-slate-900/80" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Hợp đồng điện tử <span className="text-yellow-400">vContract</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Giải pháp số hóa toàn diện quy trình ký kết hợp đồng. Ký kết mọi lúc, mọi nơi, trên mọi thiết bị với tính pháp lý được đảm bảo 100% theo quy định của pháp luật Việt Nam.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-white text-viettel-red px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-lg text-center block">
                  Đăng ký tư vấn
                </Link>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                  Tìm hiểu thêm
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tính năng nổi bật của vContract</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Hệ thống đáp ứng đầy đủ các tiêu chuẩn khắt khe nhất về an toàn thông tin và pháp lý.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Pháp lý đảm bảo', desc: 'Tuân thủ Luật Giao dịch điện tử 2005 và Nghị định 130/2018/NĐ-CP.', icon: <ShieldCheck /> },
              { title: 'Ký kết đa nền tảng', desc: 'Hỗ trợ ký trên máy tính, máy tính bảng và điện thoại di động.', icon: <Smartphone /> },
              { title: 'Bảo mật tuyệt đối', desc: 'Mã hóa dữ liệu chuẩn quốc tế, chống giả mạo và thay đổi nội dung.', icon: <Lock /> },
              { title: 'Lưu trữ Cloud', desc: 'Lưu trữ an toàn trên hạ tầng Data Center chuẩn Tier III của Viettel.', icon: <Globe /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-viettel-red/10 text-viettel-red rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Quy trình ký kết 4 bước đơn giản</h2>
              <div className="space-y-8">
                {[
                  { step: '1', title: 'Khởi tạo hợp đồng', desc: 'Tải lên file hợp đồng (PDF, Word) hoặc sử dụng mẫu có sẵn trên hệ thống.' },
                  { step: '2', title: 'Thiết lập luồng ký', desc: 'Xác định thứ tự người ký, vị trí ký và gửi thông báo qua Email/SMS.' },
                  { step: '3', title: 'Ký số trực tuyến', desc: 'Đối tác xem xét và thực hiện ký bằng Chữ ký số USB Token, Cloud-CA hoặc OTP.' },
                  { step: '4', title: 'Hoàn thành & Lưu trữ', desc: 'Hợp đồng có hiệu lực tức thì và được lưu trữ an toàn, dễ dàng tra cứu.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-6">
                    <div className="bg-viettel-red text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-viettel-red/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8">Lợi ích vượt trội</h3>
                <ul className="space-y-6">
                  {[
                    'Tiết kiệm 90% chi phí in ấn, chuyển phát và lưu kho.',
                    'Rút ngắn thời gian ký kết từ vài ngày xuống chỉ còn vài phút.',
                    'Xóa bỏ khoảng cách địa lý, ký kết với đối tác toàn cầu.',
                    'Tra cứu và quản lý tập trung, không lo thất lạc, hư hỏng.',
                    'Nâng cao hình ảnh doanh nghiệp chuyên nghiệp, hiện đại.'
                  ].map((text, i) => (
                    <li key={i} className="flex items-start space-x-4">
                      <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={24} />
                      <span className="text-slate-300 text-lg leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
                  <p className="text-center font-medium">
                    Hơn <span className="text-viettel-red font-bold text-2xl">100.000+</span> doanh nghiệp đã tin dùng vContract
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
