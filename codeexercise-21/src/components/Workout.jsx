import { useState, useRef } from 'react';

export default function Workout({ title, description, time, onComplete }) {
	const timer = useRef();
	const [timerRunning, setTimerRunning] = useState(false);
	const [timerStopped, setTimerStopped] = useState(false);

	function handleStartWorkout() {
		// Todo: Start timer
		timer.current = setTimeout(() => {
			onComplete();
			setTimerStopped(true);
		}, time);

		//console.log(`Timer started: ${time / 1000} seconds`);

		setTimerRunning(true);
	}

	function handleStopWorkout() {
		// Todo: Stop timer
		clearTimeout(timer.current);
		onComplete();
	}

	return (
		<article className='workout'>
			<h3>{title}</h3>
			<p>{description}</p>
			<p>{time}</p>
			<p>
				<button
					className={timerRunning && 'active'}
					onClick={handleStartWorkout}
				>
					Start
				</button>
				<button
					className={timerStopped ? 'active' : undefined}
					onClick={handleStopWorkout}
				>
					Stop
				</button>
			</p>
		</article>
	);
}
