import { useState, useEffect } from "react";

export default function useSetTimeOut(value, delay) {
	const [timeOutValue, setTimeOutValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setTimeOutValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [delay, value]);

	return timeOutValue;
}
