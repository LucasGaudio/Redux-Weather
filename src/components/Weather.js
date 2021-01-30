import {
	Grid,
	Typography,
	makeStyles,
	useTheme,
	CircularProgress,
	Card,
	CardContent,
} from "@material-ui/core";

import WeatherData from "./WeatherData";

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
		height: "35em",
		width: "30em",
	},
	circularProgress: {
		display: "flex",
		"& > * + *": {
			marginLeft: theme.spacing(2),
		},
	},
}));

export default function Weather({ loading, data, error }) {
	const classes = useStyles();
	const theme = useTheme();

	if (error) {
		return (
			<Grid item className={classes.container}>
				<Typography className={classes.error}>{error}</Typography>
			</Grid>
		);
	}

	if (!loading && !data) {
		return null;
	}

	return (
		<Grid item container justify="center" alignItems="center">
			<Card className={classes.card}>
				<Grid
					item
					container
					direction="column"
					justify="center"
					alignItems="center"
					className={classes.container}
				>
					<CardContent>
						{loading ? (
							<CircularProgress value={75} className={classes.circularProgress} />
						) : (
							<WeatherData data={data} />
						)}
					</CardContent>
				</Grid>
			</Card>
		</Grid>
	);
}
