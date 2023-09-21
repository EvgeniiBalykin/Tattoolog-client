import Inspect from 'vite-plugin-inspect';
import svgr from 'vite-plugin-svgr';

export default {
  plugins: [svgr(), Inspect()],
  resolve: {
    alias: {
      components: '/src/components',
      assets: '/src/assets',
      data: '/src/data',
      pages: '/src/pages',
      routes: '/src/routes',
      types: '/src/types',
      ui: '/src/UI',
      services: '/src/services',
      helpers: '/src/helpers',
      hooks: '/src/hooks',
      images: '/src/images',
      store: '/src/store',
      api: '/src/api',
    },
  },
};
