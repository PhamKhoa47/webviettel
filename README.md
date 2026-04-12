# Web Viettel

Trang web giới thiệu giải pháp số và dịch vụ Viettel tại Đắk Lắk.

## Running locally

### Prerequisites
- Node.js 20+ recommended
- npm 10+ recommended

### Install
```bash
npm install
```

### Start development server
```bash
npm run dev
```

### Build production bundle
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## Deployment

Ứng dụng được cấu hình để deploy lên GitHub Pages. Với domain custom `viettel.daklak.vn`, giữ cấu hình `base: '/'` trong `vite.config.ts` và `public/CNAME` chứa domain.

```bash
npm run deploy
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run format
```

## Notes

- `public/CNAME` đang dùng `viettel.daklak.vn`
- `vite.config.ts` đã được tối ưu cho deploy trên GitHub Pages
- `tsconfig.json` bật chế độ `strict` để tăng an toàn kiểu dữ liệu
