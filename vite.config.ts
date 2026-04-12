import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    // Đảm bảo dùng './' để chạy tốt trên GitHub Pages với tên miền riêng
    base: './', 
    plugins: [
      react(),
      ...tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          // Tối ưu hóa việc chia nhỏ file JS
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('lucide-react')) return 'icons';
              if (id.includes('motion') || id.includes('framer-motion')) return 'motion';
              if (id.includes('gsap')) return 'gsap';
              if (
                id.includes('react') || 
                id.includes('react-dom') || 
                id.includes('react-router-dom')
              ) {
                return 'vendor';
              }
            }
          },
        },
      },
      chunkSizeWarningLimit: 1000,
      // Sửa nhẹ cú pháp 'as const' nếu thiếu gia viết trong file .js 
      // (nếu là .ts thì giữ nguyên)
      minify: 'esbuild',
      sourcemap: false,
      // Đảm bảo assets được gom vào một thư mục cố định
      assetsDir: 'assets',
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
