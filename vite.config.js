import svgr from 'vite-plugin-svgr'

export default {
  plugins: [
    svgr({
      svgrOptions: {
        throwIfNamespace: false, // Deshabilita el chequeo de namespace
      },
    }),
  ],
}

