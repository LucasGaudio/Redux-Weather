import { GET_WEATHER, SET_ERROR } from "../types";

const setError = err => {
	return {
		type: SET_ERROR,
		payload: err,
	};
};

export const getWeather = (city, onSuccess = () => {}, onError = () => {}) => {
	return async dispatch => {
		try {
			const res = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}`
			);

			const secondRes = await fetch(
				`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_KEY}`
			);

			if (!res.ok && !secondRes.ok) {
				const resData = await res.json();

				throw new Error(resData.message);
			}

			const resData = await res.json();
			const secondResData = await secondRes.json();
			console.log(resData);
			dispatch({
				type: GET_WEATHER,
				payload: resData,
				secondPayload: secondResData,
			});

			console.log(secondResData);
			onSuccess();
		} catch (err) {
			dispatch(setError(err.message));
			onError();
		}
	};
};
