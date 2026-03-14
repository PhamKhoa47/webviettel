import React from 'react';
import { motion } from 'motion/react';
import { Wifi, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING_INTERNET } from '../constants';

export default function InternetViettel() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1594426693974-146f53d281d8?auto=format&fit=crop&q=80&w=2070" 
            alt="Fiber Optic" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Internet Cáp Quang Viettel</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tốc độ vượt trội, ổn định tuyệt đối. Công nghệ cáp quang hiện đại nhất cho gia đình và doanh nghiệp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table - Internet Only */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Gói cước Internet Mới Nhất</h2>
            <p className="text-slate-600">Lựa chọn gói cước phù hợp với nhu cầu sử dụng của bạn.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {PRICING_INTERNET.map((plan, i) => (
              <div key={i} className="border border-slate-100 rounded-3xl p-6 bg-slate-50 hover:border-viettel-red hover:shadow-xl transition-all group flex flex-col">
                <h3 className="text-xl font-bold text-viettel-red mb-2">{plan.name}</h3>
                <div className="text-3xl font-black text-slate-900 mb-4">{plan.speed}</div>
                <div className="text-lg font-bold text-slate-700 mb-6">{plan.price}<span className="text-sm font-normal text-slate-500">/tháng</span></div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start space-x-2 text-xs text-slate-600">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="w-full py-3 rounded-xl bg-white border-2 border-viettel-red text-viettel-red font-bold group-hover:bg-viettel-red group-hover:text-white transition-all text-sm text-center block">
                  Đăng ký ngay
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <img 
              src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1000" 
              alt="Wifi Router" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Ưu điểm khi lắp mạng Viettel</h2>
              <div className="space-y-6">
                {[
                  'Tốc độ cao, ổn định, không bị ảnh hưởng bởi thời tiết.',
                  'Băng thông quốc tế lớn, truy cập website nước ngoài mượt mà.',
                  'Trang bị Modem Wifi 2 băng tần thế hệ mới nhất.',
                  'Thủ tục đơn giản, lắp đặt nhanh chóng trong 24h.',
                  'Hỗ trợ kỹ thuật kịp thời, tận tâm tại Đắk Lắk.'
                ].map((text, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="bg-viettel-red text-white p-1 rounded-full">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-slate-700 font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Quy trình lắp đặt</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Tiếp nhận yêu cầu', desc: 'Khách hàng đăng ký qua hotline hoặc website.' },
              { step: '02', title: 'Khảo sát hạ tầng', desc: 'Nhân viên kỹ thuật kiểm tra khả năng lắp đặt.' },
              { step: '03', title: 'Ký kết hợp đồng', desc: 'Làm thủ tục tại nhà hoặc văn phòng khách hàng.' },
              { step: '04', title: 'Lắp đặt & Bàn giao', desc: 'Kỹ thuật triển khai và hướng dẫn sử dụng.' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-viettel-red/10 text-viettel-red rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">
                  {item.step}
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Câu hỏi thường gặp</h2>
          <div className="space-y-4">
            {[
              { q: 'Thủ tục đăng ký cần những gì?', a: 'Đối với cá nhân chỉ cần CCCD. Đối với doanh nghiệp cần GPKD và CCCD người đại diện.' },
              { q: 'Thời gian lắp đặt mất bao lâu?', a: 'Viettel cam kết lắp đặt trong vòng 24h - 48h kể từ khi ký hợp đồng.' },
              { q: 'Có được tặng thêm tháng sử dụng không?', a: 'Có. Khi đóng trước 6 tháng tặng 1 tháng, đóng trước 12 tháng tặng 2 tháng.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="text-viettel-red shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{item.q}</h4>
                    <p className="text-slate-600 text-sm">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
