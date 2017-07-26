const got = require('got')

module.exports = (pluginConfig, config, cb) => {
  console.log('get-last-release')
  console.log('plugin config', pluginConfig)

  if (pluginConfig.url) {
    got(pluginConfig.url, {json: true})
      .then(r => r.body)
      .then(build => {
        console.log('build')
        console.log(build)
        cb(null, {gitHead: build.id})
      })
  } else {
    cb(new Error('missing last relese'))
  }
}
