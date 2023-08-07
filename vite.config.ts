import Inspect from "vite-plugin-inspect";

export default {
  plugins: [Inspect()],
  resolve: {
    alias: {
      components: "/src/components",
      modules: "/src/modules",
      assets: "/src/assets",
      data: "/src/data",
      pages: "/src/pages",
      routes: "/src/routes",
      types: "/src/types",
      ui: "/src/UI",
    },
  },
};
