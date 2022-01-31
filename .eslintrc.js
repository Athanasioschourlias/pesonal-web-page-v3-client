module.exports = {
	root: true,
	// https://eslint.org/docs/rules/no-undef#nodejs
	env: {
		node: true,
	},
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
	},
	plugins: ["@typescript-eslint"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:vue/vue3-recommended",
		"prettier",
	],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1,
			},
		],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "never"],
		"no-confusing-arrow": [
			"error",
			{
				allowParens: true,
			},
		],
		"max-len": [
			"error",
			{
				code: 100,
				tabWidth: 4,
				comments: 120,
				ignoreStrings: true,
				ignoreComments: true,
				ignoreTemplateLiterals: true,
			},
		],
		"keyword-spacing": [
			"error",
			{
				overrides: {
					if: {
						after: false,
					},
					for: {
						after: false,
					},
					while: {
						after: false,
					},
				},
			},
		],
	},
}
