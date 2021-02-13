import { createMuiTheme } from "@material-ui/core/styles";
//import { Typography } from '@material-ui/core';

const weatherBlue = "#44ccee";

const weatherDarkBlue = "#206374";

export default createMuiTheme({
	palette: {
		common: {
			weatherBlue: `${weatherBlue}`,
			weatherDarkBlue: `${weatherDarkBlue}`,
		},
		primary: {
			main: `${weatherBlue}`,
		},
		secondary: {
			main: `${weatherDarkBlue}`,
		},
	},

	typography: {
		tab: {
			fontFamily: "Raleway",
			textTransform: "none",
			fontWeight: 700,
			color: "white",
			fontSize: "1rem",
		},
		estimate: {
			fontFamily: "Pacifico",
			fontSize: "1rem",
			textTransform: "none",
			color: "white",
		},
		h2: {
			fontFamily: "Raleway",
			fontWeight: 700,
			fontSize: "2.5rem",
			color: `${weatherBlue}`,
			lineHeight: 1.5,
		},
		h3: {
			fontFamily: "Pacifico",
			fontSize: "2.5rem",
			color: weatherBlue,
		},
		h4: {
			fontFamily: "Raleway",
			fontSize: "2.5rem",
			color: weatherBlue,
			fontWeight: 700,
		},
		h6: {
			fontFamily: "Raleway",
			color: weatherBlue,
			fontWeight: 500,
			lineHeight: 1,
		},
		subtitle1: {
			fontSize: "1.25rem",
			fontWeight: 300,
		},
		subtitle2: {
			fontSize: "1.25rem",
			fontWeight: 300,
			color: "white",
		},
		body1: {
			fontSize: "1.25rem",
			fontWeight: 300,
		},
		caption: {
			fontSize: "1rem",
			fontWeight: 300,
		},
		learnButton: {
			borderColor: weatherBlue,
			color: weatherBlue,
			borderWidth: 2,
			textTransform: "none",
			borderRadius: 50,
			fontFamily: "Roboto",
			fontWeight: "bold",
		},
	},

	overrides: {
		MuiInputLabel: {
			root: {
				color: weatherBlue,
				fontSize: "1rem",
			},
		},
		MuiInput: {
			root: {
				fontWeight: 300,
			},
			underline: {
				"&:before": {
					borderBottom: `2px solid ${weatherBlue}`,
				},
				"&:hover:not($disabled):not($focused):not($error):before": {
					borderBottom: `2px solid ${weatherBlue}`,
				},
			},
		},
	},
});
