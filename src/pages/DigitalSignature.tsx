import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Clock, CheckCircle2, FileText, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING_CA } from '../constants';

export default function DigitalSignature() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070" 
            alt="Digital Signature Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-viettel-red/90 to-slate-900/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Chữ ký số Viettel-CA</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Giải pháp chứng thực chữ ký số hàng đầu Việt Nam. An toàn, bảo mật và hợp pháp 100%.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Bảo mật tuyệt đối</h3>
              <p className="text-slate-600">Sử dụng công nghệ mã hóa tiên tiến nhất, đảm bảo tính toàn vẹn của dữ liệu.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Tiết kiệm thời gian</h3>
              <p className="text-slate-600">Ký kết văn bản, kê khai thuế mọi lúc mọi nơi mà không cần gặp mặt trực tiếp.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Hỗ trợ 24/7</h3>
              <p className="text-slate-600">Đội ngũ chuyên gia Viettel luôn sẵn sàng hỗ trợ kỹ thuật bất cứ khi nào bạn cần.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Ứng dụng của Chữ ký số</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Kê khai Thuế', icon: <FileText /> },
              { title: 'Hải quan điện tử', icon: <Briefcase /> },
              { title: 'Bảo hiểm xã hội', icon: <ShieldCheck /> },
              { title: 'Giao dịch Ngân hàng', icon: <Zap /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm flex items-center space-x-4">
                <div className="text-viettel-red">{item.icon}</div>
                <span className="font-bold text-slate-800">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Bảng giá dịch vụ Viettel-CA</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_CA.map((plan, i) => (
              <div key={i} className="border-2 border-slate-100 rounded-3xl p-8 hover:border-viettel-red transition-all relative overflow-hidden group">
                {i === 2 && (
                  <div className="absolute top-0 right-0 bg-viettel-red text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-widest">
                    Phổ biến nhất
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-4">Gói {plan.duration}</h3>
                <div className="mb-6">
                  <div className="text-sm text-slate-500 mb-1">Đăng ký mới:</div>
                  <div className="text-4xl font-black text-viettel-red">{plan.price}</div>
                </div>
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="text-sm text-slate-500 mb-1">Gia hạn:</div>
                  <div className="text-2xl font-bold text-slate-800">{plan.renewalPrice}</div>
                </div>
                <p className="text-emerald-600 font-bold text-sm mb-8">{plan.promo}</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Hỗ trợ cài đặt tận nơi</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Bảo hành Token trọn đời</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Hỗ trợ kỹ thuật 24/7</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold group-hover:bg-viettel-red transition-colors text-center block">
                  Đăng ký ngay
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
