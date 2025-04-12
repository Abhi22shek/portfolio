import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { compression } from 'vite-plugin-compression2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({ 
      include: [/\.(js|css|html|svg)$/],
      threshold: 1024, // Only compress files > 1KB
    })
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: '/',
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-type-animation', 'clsx', '@splinetool/react-spline', 'react-fast-marquee'],
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'icons': ['react-icons'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    target: 'es2015',
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 5000,
  },
});
