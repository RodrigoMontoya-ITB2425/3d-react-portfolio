const path = require('path');

module.exports = {
  // Modo de desarrollo (se puede cambiar a 'production' para un build optimizado)
  mode: 'development',
  
  // Punto de entrada: el archivo principal de tu aplicación
  entry: './src/index.js',  // Asegúrate de que la ruta coincida con tu archivo de entrada
  
  // Salida: dónde se guardarán los archivos procesados
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Nombre del archivo de salida
  },
  
  // Configuración de los loaders (transpilación de JSX, por ejemplo)
  module: {
    rules: [
      {
        test: /\.js$/, // Aplica esta configuración a los archivos .js
        exclude: /node_modules/, // No aplicar a node_modules
        use: {
          loader: 'babel-loader', // Usar babel para transpilar el código
        },
      },
      {
        test: /\.css$/, // Para procesar archivos CSS
        use: ['style-loader', 'css-loader'], // Cargar los estilos en JS
      },
    ],
  },

  // Configuración del servidor de desarrollo
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000, // Puerto donde se ejecutará el servidor
  },
  
  // Resolución de extensiones de archivo (opcional)
  resolve: {
    extensions: ['.js', '.jsx'], // Asegúrate de que se reconozcan .jsx también
  },
};