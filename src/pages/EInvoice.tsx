import React from 'react';
import { motion } from 'motion/react';
import { FileText, CheckCircle2, Shield, Zap, LayoutDashboard, Database, Users, BarChart3 } from 'lucide-react';
import { PRICING_EINVOICE } from '../constants';

export default function EInvoice() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Hóa đơn điện tử <span className="text-viettel-red">S-Invoice</span></h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Giải pháp hóa đơn điện tử thông minh, an toàn và tuân thủ đầy đủ quy định của Bộ Tài chính và Tổng cục Thuế.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-viettel-red text-white px-8 py-4 rounded-xl font-bold hover:bg-viettel-dark transition-all shadow-lg shadow-viettel-red/20">
                  Nhận báo giá ngay
                </button>
                <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                  Xem demo
                </button>
              </div>
            </motion.div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?auto=format&fit=crop&q=80&w=1000" 
                alt="Digital Invoice" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Lợi ích cho doanh nghiệp</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Tiết kiệm chi phí', desc: 'Giảm 90% chi phí in ấn, vận chuyển và lưu trữ hóa đơn giấy.', icon: <Zap /> },
              { title: 'An toàn bảo mật', desc: 'Lưu trữ trên hạ tầng Data Center đạt chuẩn quốc tế của Viettel.', icon: <Shield /> },
              { title: 'Dễ dàng quản lý', desc: 'Tra cứu, báo cáo tình hình sử dụng hóa đơn nhanh chóng.', icon: <LayoutDashboard /> },
              { title: 'Tích hợp linh hoạt', desc: 'Dễ dàng kết nối với các phần mềm kế toán, bán hàng hiện có.', icon: <Database /> }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                <div className="text-viettel-red mb-6">{item.icon}</div>
                <h4 className="font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Bảng giá dịch vụ Hoá Đơn Điện Tử - Vinvoice 2.0</h2>
          
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="py-4 px-6 font-bold">STT</th>
                    <th className="py-4 px-6 font-bold">Gói cước</th>
                    <th className="py-4 px-6 font-bold">Số lượng hoá đơn</th>
                    <th className="py-4 px-6 font-bold text-right">Giá bán (VNĐ)</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING_EINVOICE.map((plan, i) => (
                    <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 text-slate-600">{i + 1}</td>
                      <td className="py-4 px-6 font-bold text-slate-900">{plan.package}</td>
                      <td className="py-4 px-6 text-slate-600">{plan.quantity}</td>
                      <td className="py-4 px-6 font-bold text-viettel-red text-right">{plan.price}</td>
                    </tr>
                  ))}
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 text-slate-600">7</td>
                    <td className="py-4 px-6 font-bold text-slate-900">SL &gt; 5000</td>
                    <td colSpan={2} className="py-4 px-6 text-slate-600 text-center italic">Xin vui lòng liên hệ nhân viên kinh doanh</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-emerald-50 p-6 text-center border-t border-emerald-100">
              <p className="text-emerald-800 font-bold">Phí khởi tạo hoá đơn trên hệ thống: <span className="text-xl">1.000.000đ</span></p>
              <p className="text-sm text-emerald-600 mt-2">* Giá trên đã bao gồm VAT</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
