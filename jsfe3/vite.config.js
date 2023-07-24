import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
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

  plugins: [react()],
  // })
  // }
})
