/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	important: "#root",
	theme: {
		extend: {
			flex: {
				2: "2 2 0%",
				3: "3 3 0%",
				4: "4 4 0%",
				5: "5 5 0%",
			},
			height: {
				LemaScreen: "calc(100vh - 48px)",
			},
		},
	},
	plugins: [],
};
