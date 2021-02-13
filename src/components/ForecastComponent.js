import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	text: {
		marginBottom: 20,
		fontFamily: "Sarabun",
	},
	descriptionText: {
		fontFamily: "Sarabun",
		fontWeight: 500,
	},
	icon: {
		fontSize: "3em",
		marginBottom: 20,
		marginRight: 0,
	},
}));

export default function ForecastComponent({ forecast, weatherIcon, day, description }) {
	const classes = useStyles();

	return (
		<Grid item>
			<Grid item container direction="column" alignItems="center">
				<Typography className={classes.text}>{day}</Typography>
				<i className={`${weatherIcon} ${classes.icon}`} />
				<Typography className={classes.descriptionText}>{description}</Typography>
				<Typography className={classes.text}>{forecast}ºC</Typography>
			</Grid>
		</Grid>
	);
}
