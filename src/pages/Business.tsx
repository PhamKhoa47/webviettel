import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Rocket, Briefcase, Store, CheckCircle2, Shield, Zap, Users, Headphones, Globe, TrendingUp } from 'lucide-react';

export default function Business() {
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
      color: 'bg-blue-500'
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
      color: 'bg-viettel-red'
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
      color: 'bg-emerald-500'
    }
  ];

  const benefits = [
    { title: 'Hạ tầng vững chắc', desc: 'Hệ thống cáp quang và trung tâm dữ liệu chuẩn quốc tế.', icon: <Shield /> },
    { title: 'Tối ưu chi phí', desc: 'Các gói cước linh hoạt, tiết kiệm ngân sách vận hành.', icon: <TrendingUp /> },
    { title: 'Hỗ trợ 24/7', desc: 'Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ mọi lúc.', icon: <Headphones /> },
    { title: 'Kết nối toàn cầu', desc: 'Giải pháp số giúp doanh nghiệp vươn ra thị trường.', icon: <Globe /> }
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Giải pháp Doanh nghiệp Toàn diện</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Viettel Đắk Lắk đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số, tối ưu hóa quy trình và bứt phá doanh thu.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Các gói giải pháp tiêu biểu</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div key={i} className="rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all group">
                <div className={`${pkg.color} p-8 text-white flex flex-col items-center`}>
                  <div className="mb-4">{pkg.icon}</div>
                  <h3 className="text-xl font-bold text-center">{pkg.title}</h3>
                </div>
                <div className="p-8 bg-slate-50">
                  <ul className="space-y-4 mb-8">
                    {pkg.items.map((item, j) => (
                      <li key={j} className="flex items-start space-x-3 text-slate-700">
                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-medium text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="block text-center w-full py-4 rounded-xl bg-white border-2 border-slate-200 text-slate-900 font-bold hover:border-viettel-red hover:text-viettel-red transition-all">
                    Liên hệ nhận ưu đãi
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Tại sao chọn giải pháp của chúng tôi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-viettel-red mb-4">{b.icon}</div>
                <h4 className="font-bold text-slate-900 mb-2">{b.title}</h4>
                <p className="text-slate-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Câu hỏi thường gặp</h2>
          <div className="space-y-6">
            {[
              { q: 'Doanh nghiệp mới thành lập có được ưu đãi không?', a: 'Có, chúng tôi có các gói giải pháp đặc biệt dành riêng cho doanh nghiệp khởi nghiệp với chi phí tối ưu.' },
              { q: 'Thời gian triển khai giải pháp là bao lâu?', a: 'Thông thường từ 1-3 ngày làm việc tùy thuộc vào độ phức tạp của giải pháp.' },
              { q: 'Có hỗ trợ kỹ thuật sau khi bàn giao không?', a: 'Chắc chắn, đội ngũ kỹ thuật của chúng tôi hỗ trợ 24/7 qua hotline và các kênh trực tuyến.' }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-viettel-red text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Sẵn sàng chuyển đổi số cùng Viettel?</h2>
          <p className="text-lg mb-8 opacity-90">Liên hệ ngay với chúng tôi để nhận tư vấn giải pháp phù hợp nhất cho doanh nghiệp của bạn.</p>
          <Link to="/contact" className="inline-block bg-white text-viettel-red px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-lg">
            Liên hệ ngay
          </Link>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-16">Quy trình triển khai</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Tư vấn nhu cầu', desc: 'Khảo sát và tư vấn giải pháp phù hợp.' },
              { step: '02', title: 'Thiết kế giải pháp', desc: 'Xây dựng phương án kỹ thuật tối ưu.' },
              { step: '03', title: 'Triển khai lắp đặt', desc: 'Thi công nhanh chóng, chuyên nghiệp.' },
              { step: '04', title: 'Bàn giao & Hỗ trợ', desc: 'Hướng dẫn sử dụng và hỗ trợ 24/7.' }
            ].map((p, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-black text-slate-100 mb-4">{p.step}</div>
                <h4 className="font-bold text-slate-900 mb-2">{p.title}</h4>
                <p className="text-slate-600 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
