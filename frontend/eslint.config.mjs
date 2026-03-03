import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
	rules: {
		"@stylistic/indent": ["error", "tab"],
		"@stylistic/quotes": ["error", "double"],
		"@stylistic/semi": ["error", "always"],
		"@stylistic/no-tabs": "off",
		"@stylistic/member-delimiter-style": ["error", {
			multiline: { delimiter: "semi", requireLast: true },
			singleline: { delimiter: "semi", requireLast: false },
		}],

		"vue/html-indent": ["error", "tab"],
		"vue/singleline-html-element-content-newline": "off",
		"vue/max-attributes-per-line": "off",
	},
});
