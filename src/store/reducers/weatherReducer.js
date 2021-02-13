import { GET_WEATHER, SET_ERROR } from "../types";

const initialState = {
	data: null,
	newData: null,
	error: "",
};
// eslint-disable-next-line
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_WEATHER:
			return {
				data: action.payload,
				newData: action.secondPayload,
				error: "",
			};

		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
