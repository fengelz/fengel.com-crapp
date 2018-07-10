const config = require('@rise-digital/eslint-config-rise')
module.exports = config({
    rules: {
      'react/prop-types': 0,
    },
    env: {
      node: true,
    },
    globals: {
      logger: true,
    }
})