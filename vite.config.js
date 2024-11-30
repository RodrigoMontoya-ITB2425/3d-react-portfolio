export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html',
    },
    manifest: true, 
  },
});
