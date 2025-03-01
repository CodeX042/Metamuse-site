import antfu from "@antfu/eslint-config";
import tailwind from "eslint-plugin-tailwindcss";

export default antfu(
	{
		type: "app",
		typescript: true,
		formatters: true,
		stylistic: {
			indent: "tab",
			semi: true,
			quotes: "double",
		},
		ignores: ["**/migrations/*"],
	},
	...tailwind.configs["flat/recommended"],

	{
		rules: {
			"d": "off",
			"no-console": ["warn"],
			"antfu/no-top-level-await": ["off"],
			"node/prefer-global/process": ["off"],
			"node/no-process-env": ["error"],
			"unicorn/prefer-number-properties": ["off"],
			"perfectionist/sort-imports": [
				"error",
				{
					internalPattern: ["@/**"],
				},
			],
			"tailwindcss/classnames-order": ["warn", {
				officialSorting: true,
			}],
			"eslint-comments/no-unlimited-disable": ["off"],
			"tailwindcss/no-custom-classname": "off",
			"unicorn/filename-case": [
				"error",
				{
					case: "kebabCase",
					ignore: ["README.md", "routeTree.gen.ts"],
				},
			],
		},
	},
);
