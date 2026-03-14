import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { BRAND } from '../constants';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mvzwqwnv");

  if (state.succeeded) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center p-12 bg-white rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Cảm ơn bạn!</h2>
          <p className="text-slate-600">Yêu cầu của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại sớm nhất.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Liên hệ với chúng tôi</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn 24/7. Hãy để lại thông tin để được tư vấn giải pháp tốt nhất.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Thông tin liên hệ</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-viettel-red/10 p-4 rounded-2xl text-viettel-red">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Điện thoại</h4>
                    <p className="text-slate-600">{BRAND.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-viettel-red/10 p-4 rounded-2xl text-viettel-red">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600">{BRAND.email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-viettel-red/10 p-4 rounded-2xl text-viettel-red">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Địa chỉ</h4>
                    <p className="text-slate-600">{BRAND.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-viettel-red/10 p-4 rounded-2xl text-viettel-red">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Giờ làm việc</h4>
                    <p className="text-slate-600">{BRAND.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12 h-64 bg-slate-100 rounded-3xl overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.680000000000!2d108.05679715027108!3d12.695234618245056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQxJzQyLjgiTiAxMDjCsDAzJzI0LjUiRQ!5e0!3m2!1svi!2s!4v1710630000000!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Viettel Đắk Lắk Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Gửi tin nhắn cho chúng tôi</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Họ và tên</label>
                    <input id="name" name="name" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-viettel-red focus:ring-2 focus:ring-viettel-red/20 outline-none transition-all" placeholder="Nguyễn Văn A" required />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại</label>
                    <input id="phone" name="phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-viettel-red focus:ring-2 focus:ring-viettel-red/20 outline-none transition-all" placeholder="0989xxxxxx" required />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input id="email" name="email" type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-viettel-red focus:ring-2 focus:ring-viettel-red/20 outline-none transition-all" placeholder="email@example.com" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2">Dịch vụ quan tâm</label>
                  <select id="service" name="service" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-viettel-red focus:ring-2 focus:ring-viettel-red/20 outline-none transition-all bg-white">
                    <option>Internet Viettel</option>
                    <option>Chữ ký số</option>
                    <option>Hóa đơn điện tử</option>
                    <option>Giải pháp doanh nghiệp</option>
                    <option>Khác</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Lời nhắn</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-viettel-red focus:ring-2 focus:ring-viettel-red/20 outline-none transition-all" placeholder="Tôi muốn tư vấn về..." required></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button type="submit" disabled={state.submitting} className="w-full bg-viettel-red text-white py-4 rounded-xl font-bold text-lg hover:bg-viettel-dark transition-all flex items-center justify-center">
                  {state.submitting ? 'Đang gửi...' : 'Gửi yêu cầu ngay'}
                  <Send size={20} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
