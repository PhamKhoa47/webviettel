import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <div className="max-w-xl rounded-3xl border border-slate-200 bg-white p-12 shadow-xl shadow-slate-200/50">
        <p className="text-sm uppercase tracking-[0.4em] text-viettel-red">404</p>
        <h1 className="mt-6 text-4xl font-black text-slate-900">Trang không tìm thấy</h1>
        <p className="mt-4 text-slate-600">
          Có thể đường dẫn đã sai hoặc trang đã bị chuyển đổi. Quay lại trang chủ để tiếp tục.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-2xl bg-viettel-red px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-viettel-dark"
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
