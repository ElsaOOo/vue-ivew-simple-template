const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      'style-resources': {
        options: {
          patterns: [
            path.resolve(__dirname, './src/assets/common.less'),
          ],
        },
      },
    },
  },
};
