import { Grid, Typography, makeStyles } from "@material-ui/core";
import dayjs from "dayjs";

import * as recommendations from "../recommendation.json";

const useStyles = makeStyles(() => ({
	title: {
		fontSize: "1.4rem",
		fontWeight: "bold",
		marginBottom: 20,
	},
	timeText: {
		fontSize: "1.2rem",
		marginBottom: 20,
	},
	boxLabel: {
		fontSize: "0.9rem",
		letterSpacing: 1,
		marginBottom: 5,
	},
	image: {
		marginBottom: 10,
	},
	recommendationText: {
		fontSize: "1.4rem",
		textAlign: "center",
	},
	tempText: {
		fontSize: "2.8rem",
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

	const celcius = (data.main.temp - 273.15).toFixed(0);
	const celciusFeelsLike = (data.main.feels_like - 273.15).toFixed(0);

	const currentTime = dayjs(data.data).format("HH:mm");

	const currentHour = dayjs(data.date).format("H");

	const timeOfDay = currentHour > 7 && currentHour < 19 ? "day" : "night";

	const currentWeather = data.weather[0].id;

	return (
		<Grid item container direction="column" alignItems="center">
			<Typography className={classes.title}>
				{data.name} - {data.sys.country}
			</Typography>

			<Typography className={classes.timeText}>{currentTime}</Typography>

			<Typography className={classes.tempText}>{celcius}ºC</Typography>
			<Typography className={classes.boxLabel}>Feels like {celciusFeelsLike}ºC</Typography>

			<Grid item>
				<Grid item container direction="column" alignItems="center">
					<Typography className={classes.boxLabel}>
						{data.weather[0].description}
					</Typography>
					<img
						src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
						alt={data.weather[0].description}
						className={classes.image}
					/>
				</Grid>
			</Grid>

			<Grid item>
				<Typography className={classes.recommendationText}>
					{recommendations.default[timeOfDay][currentWeather].recommendation}
				</Typography>
			</Grid>

			<Grid item container justify="space-between" className={classes.extraInfo}>
				<Typography className={classes.boxLabel}>
					Humidity: {data.main.humidity}%
				</Typography>

				<Typography className={classes.boxLabel}>
					Pressure: {data.main.pressure}hPa
				</Typography>

				<Typography className={classes.boxLabel}>Wind: {data.wind.speed} m/s</Typography>
			</Grid>
		</Grid>
	);
}
