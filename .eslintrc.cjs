module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true
	},
	extends: [
		'eslint:recommended', 
		'plugin:react/recommended', 
		'next/core-web-vitals', 
		'prettier',
		'plugin:@typescript-eslint/recommended'
	],
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		},
		{
			files: ['**/*.{spec,test}.{js,jsx,ts,tsx}'],
			env: {
				jest: true,
				node: true
			}
		}
	],

	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	parser: '@typescript-eslint/parser',
	plugins: [
		'react',
		'@typescript-eslint'
	],
	rules: {
		'react/prop-types': 'off',
		'@next/next/no-html-link-for-pages': 'off',
		'next/no-html-link-for-pages': 'off',
		'react/no-html-link-for-pages': 'off',
		'import/no-anonymous-default-export': 'off',
		'@next/next/no-img-element': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'no-console': 'error',
		// Prefer the TypeScript-aware rule for unused vars and allow leading _ to ignore args
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		// Allow require() imports in scripts and some runtime files (mongodb conditional require)
		'@typescript-eslint/no-require-imports': 'off',
		// Allow `any` in some places; tighten later if desired
		'@typescript-eslint/no-explicit-any': 'off'
	},

	settings: {
		react: {
			version: 'detect'
		}
	}
}
