import Inspect from 'vite-plugin-inspect';
import svgr from 'vite-plugin-svgr';

export default {
  plugins: [svgr(), Inspect()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@data': '/src/data',
      '@pages': '/src/pages',
      '@routes': '/src/routes',
      '@interfaces': '/src/interfaces',
      '@ui': '/src/UI',
      '@services': '/src/services',
      '@helpers': '/src/helpers',
      '@hooks': '/src/hooks',
      '@images': '/public/images',
      '@locales': '/public/locales',
      '@store': '/src/store',
      '@api': '/src/api',
      '@constants': '/src/constants',
    },
  },
};
