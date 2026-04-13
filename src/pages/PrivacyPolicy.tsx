import React from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { Shield, Lock, Eye, FileText, Bell, Globe } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pt-32 pb-20">
      <SEO 
        title="Chính sách bảo mật - Viettel Đắk Lắk"
        description="Chính sách bảo mật thông tin khách hàng tại Viettel Đắk Lắk. Cam kết bảo vệ dữ liệu cá nhân và quyền riêng tư của người dùng."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-viettel-red/10 border border-viettel-red/20 rounded-full mb-6">
              <Shield className="text-viettel-red" size={16} />
              <span className="text-viettel-red text-[10px] font-black uppercase tracking-[0.3em]">An toàn & Bảo mật</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              CHÍNH SÁCH <span className="text-viettel-red">BẢO MẬT</span>
            </h1>
            <p className="text-slate-600 font-medium">Cập nhật lần cuối: Ngày 12 tháng 04 năm 2026</p>
          </div>

          <div className="glass-card p-8 md:p-12 space-y-12 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tight">
                <Eye className="text-viettel-red" size={24} />
                1. Thu thập thông tin
              </h2>
              <p className="mb-4">
                Chúng tôi thu thập thông tin từ bạn khi bạn đăng ký trên trang web của chúng tôi, đặt hàng, đăng ký nhận bản tin hoặc điền vào biểu mẫu liên hệ. Thông tin thu thập có thể bao gồm:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Họ và tên</li>
                <li>Địa chỉ email</li>
                <li>Số điện thoại</li>
                <li>Địa chỉ lắp đặt/liên hệ</li>
                <li>Tên doanh nghiệp (nếu có)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tight">
                <Lock className="text-viettel-red" size={24} />
                2. Sử dụng thông tin
              </h2>
              <p className="mb-4">
                Bất kỳ thông tin nào chúng tôi thu thập từ bạn có thể được sử dụng theo một trong các cách sau:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Để cá nhân hóa trải nghiệm của bạn (thông tin của bạn giúp chúng tôi đáp ứng tốt hơn nhu cầu cá nhân của bạn).</li>
                <li>Để cải thiện trang web của chúng tôi (chúng tôi liên tục nỗ lực cải thiện các dịch vụ trang web dựa trên thông tin và phản hồi chúng tôi nhận được từ bạn).</li>
                <li>Để cải thiện dịch vụ khách hàng (thông tin của bạn giúp chúng tôi đáp ứng hiệu quả hơn các yêu cầu dịch vụ khách hàng và nhu cầu hỗ trợ của bạn).</li>
                <li>Để xử lý các giao dịch và đăng ký dịch vụ Viettel.</li>
                <li>Để gửi email định kỳ về cập nhật dịch vụ hoặc khuyến mãi.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tight">
                <Shield className="text-viettel-red" size={24} />
                3. Bảo vệ thông tin
              </h2>
              <p>
                Chúng tôi thực hiện một loạt các biện pháp bảo mật để duy trì sự an toàn cho thông tin cá nhân của bạn khi bạn nhập, gửi hoặc truy cập thông tin cá nhân của mình. Chúng tôi sử dụng các công nghệ mã hóa tiên tiến và hệ thống lưu trữ an toàn để đảm bảo dữ liệu của khách hàng không bị rò rỉ hoặc truy cập trái phép.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tight">
                <Globe className="text-viettel-red" size={24} />
                4. Tiết lộ cho bên thứ ba
              </h2>
              <p>
                Chúng tôi không bán, giao dịch hoặc chuyển giao cho các bên bên ngoài thông tin cá nhân có thể nhận dạng của bạn. Điều này không bao gồm các bên thứ ba đáng tin cậy hỗ trợ chúng tôi trong việc vận hành trang web, thực hiện kinh doanh hoặc phục vụ bạn, miễn là các bên đó đồng ý giữ bí mật thông tin này. Chúng tôi cũng có thể tiết lộ thông tin của bạn khi chúng tôi tin rằng việc tiết lộ đó là phù hợp để tuân thủ pháp luật, thực thi các chính sách trang web của chúng tôi hoặc bảo vệ quyền, tài sản hoặc sự an toàn của chúng tôi hoặc của người khác.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tight">
                <Bell className="text-viettel-red" size={24} />
                5. Sự đồng ý của bạn
              </h2>
              <p>
                Bằng cách sử dụng trang web của chúng tôi, bạn đồng ý với chính sách bảo mật của chúng tôi. Mọi thay đổi đối với chính sách này sẽ được cập nhật trực tiếp trên trang web này.
              </p>
            </section>

            <section className="pt-8 border-t border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Liên hệ với chúng tôi</h2>
              <p className="mb-2">Nếu có bất kỳ câu hỏi nào liên quan đến chính sách bảo mật này, bạn có thể liên hệ với chúng tôi theo thông tin dưới đây:</p>
              <p className="font-bold text-slate-900">Viettel Đắk Lắk</p>
              <p>Địa chỉ: Số 48 Lý Tự Trọng, P. Tân An, Đắk Lắk</p>
              <p>Hotline: 0989113602</p>
              <p>Email: khoapv47@gmail.com</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
