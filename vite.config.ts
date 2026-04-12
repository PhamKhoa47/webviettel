import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  const version = Date.now(); // Tạo version dựa trên thời gian build

  return {
    base: '/',
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'html-version-fixer',
        transformIndexHtml(html) {
          // Tự động thêm ?v=timestamp vào các file js, css và ảnh trong index.html
          return html.replace(
            /(href|src)="([^"]+\.(js|css|png|jpg|jpeg|svg|webp|ico|tsx))"/g,
            (match, p1, p2) => {
              // Chỉ thêm nếu chưa có query và là đường dẫn nội bộ (bắt đầu bằng / hoặc src)
              if (!p2.includes('?') && (p2.startsWith('/') || p2.startsWith('src'))) {
                return `${p1}="${p2}?v=${version}"`;
              }
              return match;
            }
          );
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
