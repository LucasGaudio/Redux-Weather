import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/ui/Theme";

import "./index.css";

import { getWeather } from "./store/actions/weatherActions";
import Form from "./components/Form";
import Weather from "./components/Weather";

function App() {
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();
	const { data, newData, error } = useSelector(state => state.weather);

	useEffect(() => {
		dispatch(getWeather("Rio de Janeiro"));
		// eslint-disable-next-line
	}, []);

	const searchSubmitHandler = () => {
		setLoading(true);
		dispatch(
			getWeather(
				search,
				() => setLoading(false),
				() => setLoading(false)
			)
		);
	};

	return (
		<ThemeProvider theme={theme}>
			<Form search={search} onSetSearch={setSearch} onSubmit={searchSubmitHandler} />
			<Weather loading={loading} data={data} newData={newData} error={error} />
		</ThemeProvider>
	);
}

export default App;
