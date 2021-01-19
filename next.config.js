const withReactSvg = require('next-react-svg')
const path = require('path')
 
module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/assets/svg'),
  // eslint-disable-next-line no-unused-vars
  webpack(config, options) {
    // config.resolve.alias['@'] = path.resolve(__dirname);
    return config
  }
})
