let path = require('path')

module.exports = {
	'syntax': 'postcss-scss',
  plugins: {
		'postcss-import': {},
		'postcss-css-variables': {},
    'autoprefixer': {},
		'postcss-at-rules-variables': {},
		'postcss-advanced-variables': {},
		'postcss-atroot': {},
		'postcss-extend': {},
		'postcss-css-variables': {},
		'postcss-calc': {},
		'postcss-functions': {
			glob: path.join(path.resolve(__dirname), 'src/styles/postcss/functions', '*.js')
		}
  }
}
