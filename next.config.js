const envList = require(`./env.${process.env.NODE_ENV || 'development'}.js`)

module.exports = {
  env: envList,
}
