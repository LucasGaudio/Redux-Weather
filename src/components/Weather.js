import {
	Grid,
	Typography,
	makeStyles,
	CircularProgress,
	Card,
	CardContent,
} from "@material-ui/core";

import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";

const useStyles = makeStyles(theme => ({
	error: {
		color: "red",
		fontSize: 20,
		textAlign: "center",
	},
	card: {
		display: "flex",
		alignItems: "center",
		boxShadow: theme.shadows[10],
		borderRadius: 15,
		height: "22em",
		width: "55em",
		[theme.breakpoints.down("sm")]: {
			width: "33em",
			height: "35em",
		},
		[theme.breakpoints.down("xs")]: {
			width: "22em",
			height: "38em",
		},
	},
	forecastCard: {
		marginTop: 20,
		marginBottom: 20,
		[theme.breakpoints.up("md")]: {
			height: "16em",
		},
	},
	circularProgress: {
		display: "flex",
		"& > * + *": {
			marginLeft: theme.spacing(2),
		},
	},
}));

export default function Weather({ loading, data, newData, error }) {
	const classes = useStyles();

	if (error) {
		return (
			<Grid item className={classes.container}>
				<Typography className={classes.error}>{error}</Typography>
			</Grid>
		);
	}

	if (!loading && !data && !newData) {
		return null;
	}

	return (
		<Grid item container direction="column" justify="center" alignItems="center">
			<Card className={classes.card}>
				<Grid item container direction="column" className={classes.container}>
					<CardContent>
						{loading && !data && !newData ? (
							<Grid item container justify="center" alignItems="center">
								<CircularProgress value={75} className={classes.circularProgress} />
							</Grid>
						) : (
							<WeatherData data={data} />
						)}
					</CardContent>
				</Grid>
			</Card>

			<Card className={`${classes.card} ${classes.forecastCard}`}>
				<Grid item container direction="column" className={classes.container}>
					<CardContent>
						{loading && !data && !newData ? (
							<Grid item container justify="center" alignItems="center">
								<CircularProgress value={75} className={classes.circularProgress} />
							</Grid>
						) : (
							<WeatherForecast newData={newData} />
						)}
					</CardContent>
				</Grid>
			</Card>
		</Grid>
	);
}
