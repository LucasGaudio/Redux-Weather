import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuerry from "@material-ui/core/useMediaQuery";
import { Grid, Typography } from "@material-ui/core";

import * as icons from "../json/icons.json";
import dayjs from "dayjs";

import "../assets/css/weather-icons.min.css";

import ForecastComponent from "./ForecastComponent";

const useStyles = makeStyles(theme => ({
	firstText: {
		fontSize: "1.4rem",
		fontWeight: "bold",
		marginBottom: 15,
		marginTop: 15,
		color: theme.palette.secondary.main,
		fontFamily: "Sarabun",
	},
}));

export default function WeatherForecast({ newData }) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSM = useMediaQuerry(theme.breakpoints.down("sm"));

	const currentHour = dayjs(newData.date).format("H");
	const currentDate = dayjs(newData.list[6].dt_txt).format("ddd");

	console.log(currentDate);

	const timeOfDay = currentHour > 7 && currentHour < 19 ? "day" : "night";

	const prefix = "wi wi-";

	const weatherIcon1 = prefix + icons.default[timeOfDay][newData.list[6].weather[0].id].icon;
	const weatherIcon2 = prefix + icons.default[timeOfDay][newData.list[14].weather[0].id].icon;
	const weatherIcon3 = prefix + icons.default[timeOfDay][newData.list[22].weather[0].id].icon;
	const weatherIcon4 = prefix + icons.default[timeOfDay][newData.list[30].weather[0].id].icon;
	const weatherIcon5 = prefix + icons.default[timeOfDay][newData.list[38].weather[0].id].icon;

	const forecast1 = (newData.list[6].main.temp - 273.15).toFixed(0);
	const forecast2 = (newData.list[14].main.temp - 273.15).toFixed(0);
	const forecast3 = (newData.list[22].main.temp - 273.15).toFixed(0);
	const forecast4 = (newData.list[30].main.temp - 273.15).toFixed(0);
	const forecast5 = (newData.list[38].main.temp - 273.15).toFixed(0);

	return (
		<Grid item>
			<Grid
				item
				container
				justify={matchesSM ? "center" : "space-around"}
				style={{
					marginTop: 15,
				}}
			>
				<Typography className={classes.firstText}>Forecast</Typography>
				<Typography />
				<Typography />
				<Typography />
			</Grid>
			<Grid item>
				<Grid item container justify="space-around" alignItems="center">
					<ForecastComponent
						forecast={forecast1}
						weatherIcon={weatherIcon1}
						day={dayjs(newData.list[6].dt_txt).format("ddd")}
						description={newData.list[6].weather[0].description}
					/>
					<ForecastComponent
						forecast={forecast2}
						weatherIcon={weatherIcon2}
						day={dayjs(newData.list[14].dt_txt).format("ddd")}
						description={newData.list[14].weather[0].description}
					/>
					<ForecastComponent
						forecast={forecast3}
						weatherIcon={weatherIcon3}
						day={dayjs(newData.list[22].dt_txt).format("ddd")}
						description={newData.list[22].weather[0].description}
					/>
					<ForecastComponent
						forecast={forecast4}
						weatherIcon={weatherIcon4}
						day={dayjs(newData.list[30].dt_txt).format("ddd")}
						description={newData.list[30].weather[0].description}
					/>
					<ForecastComponent
						forecast={forecast5}
						weatherIcon={weatherIcon5}
						day={dayjs(newData.list[38].dt_txt).format("ddd")}
						description={newData.list[38].weather[0].description}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
}
