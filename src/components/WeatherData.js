import { Grid, Typography, makeStyles, useTheme } from "@material-ui/core";
import useMediaQuerry from "@material-ui/core/useMediaQuery";

import dayjs from "dayjs";

import * as recommendations from "../json/recommendation.json";
import * as icons from "../json/icons.json";

import "../assets/css/weather-icons.min.css";

const useStyles = makeStyles(theme => ({
	firstText: {
		fontSize: "1.4rem",
		fontWeight: "bold",
		marginBottom: 15,
		color: theme.palette.secondary.main,
		fontFamily: "Sarabun",
	},
	title: {
		fontSize: "1.4rem",
		fontWeight: "bold",
		color: theme.palette.primary.dark,
		fontFamily: "Sarabun",
	},
	timeText: {
		fontSize: "1.2rem",
		marginBottom: 20,
	},
	extraText: {
		fontSize: "1.2rem",
		marginBottom: 5,
		fontFamily: "Sarabun",
	},
	extraContainer: {
		marginBottom: 10,
		[theme.breakpoints.down("sm")]: {
			marginTop: 20,
		},
	},
	image: {
		marginBottom: 10,
		height: "6em",
		color: theme.palette.primary.main,
	},
	recommendationText: {
		fontSize: "1.2rem",
		textAlign: "center",
		maxWidth: "20em",
		fontFamily: "Sarabun",
		fontWeight: 500,
	},
	tempText: {
		fontSize: "5.2rem",
		color: theme.palette.primary.dark,
		fontFamily: "Sarabun",
		fontWeight: 200,
	},
	boxText: {
		fontSize: 16,
		fontWeight: "bold",
	},
	extraInfo: {
		marginTop: 20,
	},
}));

export default function WeatherData({ data }) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSM = useMediaQuerry(theme.breakpoints.down("sm"));

	const celcius = (data.main.temp - 273.15).toFixed(0);

	const currentHour = dayjs(data.date).format("H");

	const timeOfDay = currentHour > 7 && currentHour < 19 ? "day" : "night";

	const currentWeather = data.weather[0].id;

	const prefix = "wi wi-";

	const weatherIcon = prefix + icons.default[timeOfDay][currentWeather].icon;

	return (
		<Grid
			item
			container
			direction={matchesSM ? "column" : "row"}
			justify="space-around"
			alignItems="center"
		>
			<Grid item>
				<Grid
					item
					container
					direction="column"
					justify="space-around"
					alignItems={matchesSM ? "center" : "flex-start"}
				>
					<Typography className={classes.firstText}>Current Weather</Typography>
					<Typography className={classes.title}>
						{data.name} - {data.sys.country}
					</Typography>

					{/* <Typography className={classes.timeText}>{currentTime}</Typography> */}
					<Grid item>
						<Grid item container alignItems="center">
							<i alt={data.weather[0].description} className={weatherIcon} />

							<Typography className={classes.tempText}>{celcius}ºC</Typography>
						</Grid>
					</Grid>

					<Typography className={classes.recommendationText}>
						{recommendations.default[timeOfDay][currentWeather].recommendation}
					</Typography>
				</Grid>
			</Grid>

			<Grid item>
				<Grid item container direction="column">
					<Grid item className={classes.extraContainer}>
						<Grid item container alignItems="center">
							<i className="extra wi-humidity" />
							<Typography className={classes.extraText}>
								Humidity: {data.main.humidity}%
							</Typography>
						</Grid>
					</Grid>

					<Grid item className={classes.extraContainer}>
						<Grid item container alignItems="center">
							<i className="extra wi-barometer" />
							<Typography className={classes.extraText}>
								Pressure: {data.main.pressure}hPa
							</Typography>
						</Grid>
					</Grid>

					<Grid item className={classes.extraContainer}>
						<Grid item container alignItems="center">
							<i className="extra wi-strong-wind" />
							<Typography className={classes.extraText}>
								Wind: {data.wind.speed} m/s
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
