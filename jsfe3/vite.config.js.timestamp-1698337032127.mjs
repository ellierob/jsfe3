// vite.config.js
import { defineConfig, loadEnv } from "file:///app/node_modules/vite/dist/node/index.js";
import react from "file:///app/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  // export default ({ mode }) => {
  // @dev added by
  // esbuild: {
  //   loader: "jsx",
  // },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     loader: {
  //       "js": "jsx",
  //     },
  //   },
  // },
  // process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  // return defineConfig({
  envPrefix: "REACT_APP_",
  // resolve: {
  //   alias: [
  //     {
  //       find: 'common',
  //       replacement: resolve(__dirname, "src/common"),
  //     },
  //   ],
  // },
  plugins: [react()]
  // })
  // }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvYXBwL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9hcHAvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgLy8gZXhwb3J0IGRlZmF1bHQgKHsgbW9kZSB9KSA9PiB7XG5cbiAgLy8gQGRldiBhZGRlZCBieVxuICAvLyBlc2J1aWxkOiB7XG4gIC8vICAgbG9hZGVyOiBcImpzeFwiLFxuICAvLyB9LFxuICAvLyBvcHRpbWl6ZURlcHM6IHtcbiAgLy8gICBlc2J1aWxkT3B0aW9uczoge1xuICAvLyAgICAgbG9hZGVyOiB7XG4gIC8vICAgICAgIFwianNcIjogXCJqc3hcIixcbiAgLy8gICAgIH0sXG4gIC8vICAgfSxcbiAgLy8gfSxcbiAgLy8gcHJvY2Vzcy5lbnYgPSB7IC4uLnByb2Nlc3MuZW52LCAuLi5sb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpIH07XG4gIC8vIHJldHVybiBkZWZpbmVDb25maWcoe1xuICBlbnZQcmVmaXg6IFwiUkVBQ1RfQVBQX1wiLFxuICAvLyByZXNvbHZlOiB7XG4gIC8vICAgYWxpYXM6IFtcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgZmluZDogJ2NvbW1vbicsXG4gIC8vICAgICAgIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvY29tbW9uXCIpLFxuICAvLyAgICAgfSxcbiAgLy8gICBdLFxuICAvLyB9LFxuXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgLy8gfSlcbiAgLy8gfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOEwsU0FBUyxjQUFjLGVBQWU7QUFDcE8sT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWdCMUIsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVVYLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQTtBQUFBO0FBR25CLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
