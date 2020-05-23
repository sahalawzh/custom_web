const path = require('path')
const isProd = process.env.NODE_ENV === 'production'

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 基本路径 baseURL已经过时
  publicPath: './',  
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  // compiler: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: (config) => {
		config.resolve.alias
			.set('@$', resolve('src'))
			.set('component', resolve('src/components'))
			.set('pages', resolve('src/pages'))
			.set('vue$', 'vue/dist/vue.esm.js')
		config.plugins.delete('prefetch')
	},
  configureWebpack: (config) => {
    if (isProd) {
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = [
        'console.log'
      ]
      config.optimization.splitChunks = {
        cacheGroups: {
          vendors: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'initial'
          }
        }
      }
    }
  },
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置
  css: {
		// 是否使用css分离插件 ExtractTextPlugin
		extract: isProd,
		// 开启 CSS source maps?
		sourceMap: false,
		// css预设器配置项
		loaderOptions: {
			postcss: {
				config: {
					path: './config'
				}
      },
      sass: {
        prependData: `
          @import "@/styles/common/mixins/bem.scss";
          @import "@/styles/common/variable/index.scss";
        `
      }
    },
		// 启用 CSS modules for all css / pre-processor files.
		modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
   open: true,
   host: 'localhost',//如果是真机测试，就使用这个IP
   port: 8086,
   https: false,
   hotOnly: false,
   proxy: null, // 设置代理
   before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {
   // ...
  }
 }