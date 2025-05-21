import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
	return (
		<>
			<header>
				<h1>
					The <em>Almost</em> Final Countdown
				</h1>
				<p>Stop the timer once you estimate that time is (almost) up</p>
			</header>
			<Player />
			<div id='challenges'>
				<TimerChallenge
					title='Easy'
					targetTime={1}
				/>
				<TimerChallenge
					title='Medium'
					targetTime={5}
				/>
				<TimerChallenge
					title='Getting Tough'
					targetTime={10}
				/>
				<TimerChallenge
					title='Pros Only'
					targetTime={15}
				/>
			</div>
		</>
	);
}

export default App;
