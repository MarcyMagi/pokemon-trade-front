/* eslint-env node */
module.exports = {
	'root': true,
	'extends': [
		'plugin:vue/vue3-essential',
		'eslint:recommended'
	],
	'env': {
		'vue/setup-compiler-macros': true
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}
