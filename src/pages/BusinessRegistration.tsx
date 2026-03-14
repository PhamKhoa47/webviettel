import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, FileText, Scale, Clock, CheckCircle2, Zap } from 'lucide-react';

export default function BusinessRegistration() {
  return (
    <div className="pt-20">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070" 
            alt="Thành lập doanh nghiệp" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Dịch vụ Thành lập Doanh nghiệp</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Khởi đầu kinh doanh thuận lợi với dịch vụ tư vấn pháp lý chuyên nghiệp. Nhanh chóng, uy tín, trọn gói, chi phí tối ưu.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Bảng giá dịch vụ trọn gói</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Gói Cơ bản', price: '1.350.000 VND', features: ['Tư vấn tên, loại hình', 'Soạn thảo hồ sơ', 'Nộp hồ sơ Sở KH&ĐT', 'Nhận kết quả'] },
              { title: 'Gói VIP', price: '3.500.000 VND', features: ['Tất cả tính năng Gói Cơ bản', 'Chữ ký số 1 năm', 'Hóa đơn điện tử 300 số', 'Tư vấn thuế ban đầu', 'Hỗ trợ mở tài khoản ngân hàng'] }
            ].map((pkg, i) => (
              <div key={i} className="p-8 rounded-3xl border-2 border-slate-100 hover:border-viettel-red transition-all">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.title}</h3>
                <div className="text-3xl font-black text-viettel-red mb-6">{pkg.price}</div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center space-x-3 text-slate-700">
                      <Zap size={18} className="text-emerald-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block text-center w-full py-4 rounded-xl bg-viettel-red text-white font-bold hover:bg-viettel-dark transition-all">
                  Đăng ký ngay
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Hồ sơ cần chuẩn bị</h2>
              <ul className="space-y-4">
                {[
                  'Bản sao CCCD/Hộ chiếu của các thành viên góp vốn.',
                  'Thông tin tên công ty dự kiến.',
                  'Địa chỉ trụ sở chính của công ty.',
                  'Ngành nghề kinh doanh dự kiến.',
                  'Vốn điều lệ và tỷ lệ góp vốn.'
                ].map((text, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-viettel-red" size={20} />
                    <span className="text-slate-700">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 p-8 bg-viettel-red/5 rounded-3xl border border-viettel-red/10">
                <h4 className="font-bold text-viettel-red mb-2">Lưu ý:</h4>
                <p className="text-slate-600 text-sm">Chúng tôi sẽ hỗ trợ soạn thảo toàn bộ hồ sơ pháp lý, bạn chỉ cần cung cấp thông tin cơ bản.</p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Quy trình thực hiện</h2>
              {[
                { title: 'Tư vấn & Tiếp nhận', desc: 'Tư vấn loại hình doanh nghiệp, tên, vốn, ngành nghề.' },
                { title: 'Soạn thảo hồ sơ', desc: 'Hoàn thiện hồ sơ theo quy định của Sở Kế hoạch & Đầu tư.' },
                { title: 'Nộp hồ sơ & Nhận kết quả', desc: 'Nhận Giấy chứng nhận đăng ký doanh nghiệp và con dấu.' },
                { title: 'Hỗ trợ sau thành lập', desc: 'Đăng ký chữ ký số, hóa đơn điện tử, khai thuế ban đầu.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6">
                  <div className="bg-slate-100 p-4 rounded-2xl text-slate-900 font-bold">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
