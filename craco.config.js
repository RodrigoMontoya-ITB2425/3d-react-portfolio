module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        const svgRule = webpackConfig.module.rules.find(
          (rule) => rule.test && rule.test.test('.svg')
        );
        if (svgRule) {
          svgRule.use[0].options.throwIfNamespace = false;
        }
        return webpackConfig;
      },
    },
  };
  