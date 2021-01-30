import { useEffect } from "react";
import { Grid, Typography, makeStyles, useTheme, TextField } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	container: {
		padding: 20,
	},
	introText: {
		fontSize: 20,
		textAlign: "center",
		marginBottom: 20,
	},
	input: {
		fontSize: "1rem",
		marginBottom: 10,
	},
}));

export default function Form({ search, onSetSearch, onSubmit }) {
	const classes = useStyles();

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (search) {
				onSubmit();
			}
		}, 500);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [search]);

	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			className={classes.container}
		>
			<Typography className={classes.introText}>Enter a city name</Typography>
			<Grid item>
				<TextField
					className={classes.input}
					id="standard-basic"
					label="City name"
					value={search}
					onChange={e => onSetSearch(e.target.value)}
				/>
			</Grid>
		</Grid>
	);
}
