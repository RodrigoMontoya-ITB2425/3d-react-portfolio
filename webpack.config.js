module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  { removeViewBox: false },
                  { throwIfNamespace: false }, // Disable namespace error
                ],
              },
            },
          },
        ],
      },
    ],
  }