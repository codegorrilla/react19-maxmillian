import { useState, useEffect } from 'react';

const TIMER = 3000;

export default function ProgressBar({ timer }) {
	const [remainingTime, setRemainingTime] = useState(timer);
	useEffect(() => {
		const interval = setInterval(() => {
			console.log('INTERVAL');
			setRemainingTime((prevTime) => prevTime - 10);
		}, 10);

		//cleanup function
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<progress
			value={remainingTime}
			max={timer}
		/>
	);
}
