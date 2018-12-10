const path = require('path');

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({actions: {createPages}}) => {
  // @TODO: create any pages dynamically
  // https://www.gatsbyjs.org/docs/using-unstructured-data/
}

exports.onCreateWebpackConfig = ({actions: {setWebpackConfig}}) => {
  setWebpackConfig({
    resolve: {
      alias: {
        Components: path.resolve(__dirname, 'src/components')
      }
    }
  });
}
