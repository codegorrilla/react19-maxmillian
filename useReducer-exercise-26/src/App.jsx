import { useReducer } from 'react';

export function counterReducer(state, action) {
	if (action.type === 'Increment') {
		return {
			count: state.count + 1,
		};
	}

	if (action.type === 'Decrement') {
		return {
			count: state.count - 1,
		};
	}

	if (action.type === 'Reset') {
		return { count: 0 };
	}

	return state;
}

function App() {
	const [counterState, dispatch] = useReducer(counterReducer, { count: 0 });

	function handleIncrement() {
		dispatch({
			type: 'Increment',
		});
	}

	function handleDecrement() {
		dispatch({
			type: 'Decrement',
		});
	}

	function handleReset() {
		dispatch({
			type: 'Reset',
		});
	}

	return (
		<div id='app'>
			<h1>The (Final?) Counter</h1>
			<p id='actions'>
				<button onClick={() => handleIncrement()}>Increment</button>
				<button onClick={() => handleDecrement()}>Decrement</button>
				<button onClick={() => handleReset()}>Reset</button>
			</p>
			<p id='counter'>{counterState.count}</p>
		</div>
	);
}

export default App;
