import { useEffect } from "react";
import {
	Grid,
	Typography,
	makeStyles,
	InputBase,
	FormControl,
	InputLabel,
} from "@material-ui/core";
import { fade, withStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
	container: {
		padding: 20,
		[theme.breakpoints.down("xs")]: {
			padding: 0,
		},
	},
	introText: {
		fontSize: "1.7rem",
		fontWeight: 700,
		textAlign: "center",
		color: theme.palette.secondary.dark,
		fontFamily: "Sarabun",
		marginBottom: 5,
		[theme.breakpoints.down("xs")]: {
			marginTop: 10,
		},
	},
	spanIntro: {
		fontFamily: "Sarabun",
		fontWeight: 700,
		color: theme.palette.secondary.main,
	},
	input: {
		fontSize: "1rem",
		marginBottom: 10,
		width: "60em",
		backgroundColor: "#fff",
		borderRadius: 25,
		position: "relative",
	},
	margin: {
		margin: theme.spacing(1),
	},
	inputLabel: {
		color: theme.palette.secondary.main,
		fontFamily: "Sarabun",
	},
}));

export default function Form({ search, onSetSearch, onSubmit }) {
	const classes = useStyles();

	const BootstrapInput = withStyles(theme => ({
		root: {
			"label + &": {
				marginTop: theme.spacing(3),
			},
		},
		input: {
			borderRadius: 25,
			position: "relative",
			backgroundColor: theme.palette.common.white,
			border: "1px solid #ced4da",
			fontSize: 18,
			width: "47em",
			height: "1.6em",
			padding: "10px 12px",
			transition: theme.transitions.create(["border-color", "box-shadow"]),
			// Use the system font instead of the default Roboto font.
			fontFamily: [
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(","),
			"&:focus": {
				boxShadow: `${fade(theme.palette.secondary.main, 0.25)} 0 0 0 0.2rem`,
				borderColor: theme.palette.secondary.main,
			},
			[theme.breakpoints.down("sm")]: {
				width: "28em",
			},
			[theme.breakpoints.down("xs")]: {
				width: "20em",
				fontSize: 16,
				marginBottom: 10,
			},
		},
	}))(InputBase);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (search) {
				onSubmit();
			}
		}, 500);

		return () => {
			clearTimeout(timeoutId);
		};
		// eslint-disable-next-line
	}, [search]);

	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			className={classes.container}
		>
			<Typography className={classes.introText}>
				Redux<span className={classes.spanIntro}>Weather</span>
			</Typography>

			<Grid item>
				<FormControl className={classes.margin}>
					<InputLabel
						shrink
						htmlFor="bootstrap-input"
						className={classes.inputLabel}
						disabled={true}
						style={{ fontSize: "1.3rem", fontWeight: "bold", padding: "0px 12px" }}
					>
						Enter a city name
					</InputLabel>
					<BootstrapInput
						id="bootstrap-input"
						value={search}
						onChange={e => onSetSearch(e.target.value)}
						autoFocus={true}
						margin="normal"
					/>
				</FormControl>
			</Grid>
		</Grid>
	);
}
