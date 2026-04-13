import React from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { FileText, CheckCircle2, AlertCircle, Scale, Gavel, Info } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pt-32 pb-20">
      <SEO 
        title="Điều khoản dịch vụ - Viettel Đắk Lắk"
        description="Điều khoản và điều kiện sử dụng dịch vụ tại website Viettel Đắk Lắk. Quy định về quyền lợi và trách nhiệm của người dùng."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-viettel-red/10 border border-viettel-red/20 rounded-full mb-6">
              <Scale className="text-viettel-red" size={16} />
              <span className="text-viettel-red text-[10px] font-black uppercase tracking-[0.3em]">Quy định & Pháp lý</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              ĐIỀU KHOẢN <span className="text-viettel-red">DỊCH VỤ</span>
            </h1>
            <p className="text-slate-600 font-medium">Cập nhật lần cuối: Ngày 12 tháng 04 năm 2026</p>
          </div>

          <div className="glass-card p-8 md:p-12 space-y-12 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tight">
                <Info className="text-viettel-red" size={24} />
                1. Chấp nhận điều khoản
              </h2>
              <p>
                Bằng việc truy cập và sử dụng website viettel.daklak.vn, bạn đồng ý tuân thủ và bị ràng buộc bởi các điều khoản và điều kiện sử dụng này. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, vui lòng không sử dụng website của chúng tôi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tight">
                <FileText className="text-viettel-red" size={24} />
                2. Mô tả dịch vụ
              </h2>
              <p>
                Website viettel.daklak.vn là trang thông tin giới thiệu các sản phẩm, dịch vụ của Viettel tại khu vực Đắk Lắk, bao gồm nhưng không giới hạn: Internet cáp quang, Chữ ký số, Hóa đơn điện tử, Hợp đồng điện tử và các giải pháp doanh nghiệp khác. Chúng tôi cung cấp thông tin tư vấn và hỗ trợ đăng ký dịch vụ chính thức của Viettel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tight">
                <CheckCircle2 className="text-viettel-red" size={24} />
                3. Trách nhiệm người dùng
              </h2>
              <p className="mb-4">Khi sử dụng website, bạn cam kết:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cung cấp thông tin chính xác, đầy đủ khi đăng ký tư vấn hoặc sử dụng dịch vụ.</li>
                <li>Không sử dụng website cho bất kỳ mục đích bất hợp pháp hoặc bị cấm theo các điều khoản này.</li>
                <li>Không gây tổn hại, làm gián đoạn hoặc quá tải hạ tầng của website.</li>
                <li>Tự bảo mật thông tin cá nhân và chịu trách nhiệm về các hoạt động diễn ra dưới tên truy cập của mình (nếu có).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tight">
                <Gavel className="text-viettel-red" size={24} />
                4. Sở hữu trí tuệ
              </h2>
              <p>
                Tất cả nội dung trên website này, bao gồm văn bản, đồ họa, logo, biểu tượng, hình ảnh và phần mềm, là tài sản của Viettel hoặc các bên cấp phép và được bảo vệ bởi luật sở hữu trí tuệ Việt Nam và quốc tế. Việc sao chép, sửa đổi hoặc sử dụng lại nội dung mà không có sự đồng ý bằng văn bản là nghiêm cấm.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tight">
                <AlertCircle className="text-viettel-red" size={24} />
                5. Giới hạn trách nhiệm
              </h2>
              <p>
                Chúng tôi nỗ lực đảm bảo thông tin trên website là chính xác và cập nhật. Tuy nhiên, chúng tôi không bảo đảm rằng website sẽ không có lỗi hoặc không bị gián đoạn. Viettel Đắk Lắk không chịu trách nhiệm cho bất kỳ thiệt hại trực tiếp hoặc gián tiếp nào phát sinh từ việc sử dụng hoặc không thể sử dụng website này.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tight">
                <Scale className="text-viettel-red" size={24} />
                6. Thay đổi điều khoản
              </h2>
              <p>
                Chúng tôi có quyền thay đổi các điều khoản này bất cứ lúc nào mà không cần thông báo trước. Việc bạn tiếp tục sử dụng website sau khi các thay đổi được đăng tải đồng nghĩa với việc bạn chấp nhận các điều khoản mới.
              </p>
            </section>

            <section className="pt-8 border-t border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Thông tin liên hệ</h2>
              <p className="mb-2">Mọi thắc mắc về điều khoản dịch vụ, vui lòng liên hệ:</p>
              <p className="font-bold text-slate-900">Viettel Đắk Lắk</p>
              <p>Hotline: 0989113602</p>
              <p>Website: viettel.daklak.vn</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
