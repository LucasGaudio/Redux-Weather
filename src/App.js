import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getWeather } from "./store/actions/weatherActions";
import Form from "./components/Form";
import Weather from "./components/Weather";

function App() {
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();
	const { data, error } = useSelector(state => state.weather);

	useEffect(() => {
		dispatch(getWeather("Rio de Janeiro"));
	}, [dispatch]);

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
		<div>
			<Form search={search} onSetSearch={setSearch} onSubmit={searchSubmitHandler} />
			<Weather loading={loading} data={data} error={error} />
		</div>
	);
}

export default App;
