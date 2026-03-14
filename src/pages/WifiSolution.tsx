import React from 'react';
import { motion } from 'motion/react';
import { Wifi, Router, Zap, CheckCircle2, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

import { PRICING_INTERNET } from '../constants';

export default function WifiSolution() {
  const meshPlans = PRICING_INTERNET.filter(plan => plan.name.startsWith('MESH'));

  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Giải pháp Home Wifi <span className="text-viettel-red">Mesh</span></h1>
              <p className="text-xl text-slate-300 mb-8">
                Xóa tan "điểm chết" Wifi trong nhà bạn. Phủ sóng mọi ngóc ngách với công nghệ Mesh hiện đại nhất.
              </p>
              <Link to="/contact" className="bg-viettel-red text-white px-8 py-4 rounded-xl font-bold hover:bg-viettel-dark transition-all inline-block">
                Tư vấn giải pháp ngay
              </Link>
            </motion.div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000" 
                alt="Wifi Mesh" 
                className="rounded-3xl shadow-2xl opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Tại sao nên dùng Home Wifi Viettel?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { title: 'Phủ sóng rộng', desc: 'Hệ thống nhiều thiết bị kết nối tạo thành mạng lưới thống nhất.', icon: <Wifi /> },
              { title: 'Chuyển vùng mượt mà', desc: 'Tự động kết nối thiết bị với node mạnh nhất khi di chuyển.', icon: <Zap /> },
              { title: 'Dễ dàng cài đặt', desc: 'Quản lý tập trung qua ứng dụng My Viettel cực kỳ tiện lợi.', icon: <Router /> }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 text-center">
                <div className="text-viettel-red mb-6 flex justify-center">{item.icon}</div>
                <h4 className="font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Các gói cước Home Wifi (MESH)</h2>
            <p className="text-slate-600">Lựa chọn gói cước phù hợp với diện tích căn nhà của bạn.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {meshPlans.map((plan, i) => (
              <div key={i} className="border border-slate-100 rounded-3xl p-8 bg-slate-50 hover:border-viettel-red hover:shadow-xl transition-all group">
                <h3 className="text-2xl font-bold text-viettel-red mb-2">{plan.name}</h3>
                <div className="text-4xl font-black text-slate-900 mb-4">{plan.speed}</div>
                <div className="text-xl font-bold text-slate-700 mb-8">{plan.price}<span className="text-sm font-normal text-slate-500">/tháng</span></div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start space-x-2 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="w-full py-3 rounded-xl bg-white border-2 border-viettel-red text-viettel-red font-bold group-hover:bg-viettel-red group-hover:text-white transition-all text-center block">
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
