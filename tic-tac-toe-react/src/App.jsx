import { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations.js';
import GameOver from './components/GameOver.jsx';

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function derivedActiveplayer(gameTurns) {
	let currentPlayer = 'X';
	if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
		currentPlayer = '0';
	}
	return currentPlayer;
}

export default function App() {
	//const [activePlayer, setActivePlayer] = useState('X');

	const [players, setPlayers] = useState({
		X: 'Player 1',
		0: 'Player 2',
	});
	const [gameTurns, setGameTurns] = useState([]);

	const activePlayer = derivedActiveplayer(gameTurns);

	let gameBoard = [...initialGameBoard.map((array) => [...array])];
	for (const turn of gameTurns) {
		const { square, player } = turn;
		const { row, col } = square;
		gameBoard[row][col] = player;
	}

	let winner;

	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol =
			gameBoard[combination[0].row][combination[0].column];
		const secondSquareSymbol =
			gameBoard[combination[1].row][combination[1].column];
		const thirdSquareSymbol =
			gameBoard[combination[2].row][combination[2].column];

		if (
			firstSquareSymbol &&
			firstSquareSymbol === secondSquareSymbol &&
			firstSquareSymbol === thirdSquareSymbol
		) {
			winner = players[firstSquareSymbol];
		}
	}

	const hasDraw = gameTurns.length === 9 && !winner;

	const handleSelectSquare = (rowIndex, colIndex) => {
		//setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? '0' : 'X'));
		setGameTurns((prevTurns) => {
			const currentPlayer = derivedActiveplayer(prevTurns);
			// if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
			// 	currentPlayer = '0';
			// }
			const updatedTurns = [
				{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
				...prevTurns,
			];

			return updatedTurns;
		});
	};

	function handleRestart() {
		setGameTurns([]);
	}

	function handlePlayerNameChange(symbol, newName) {
		setPlayers((prevPlayers) => {
			return {
				...prevPlayers,
				[symbol]: newName,
			};
		});
	}

	return (
		<main>
			<div id='game-container'>
				<ol
					id='players'
					className='highlight-player'
				>
					<Player
						initialName='Player 1'
						symbol='X'
						isActive={activePlayer === 'X'}
						onChangeName={handlePlayerNameChange}
					/>
					<Player
						initialName='Player 2'
						symbol='O'
						isActive={activePlayer === '0'}
						onChangeName={handlePlayerNameChange}
					/>
				</ol>
				{(winner || hasDraw) && (
					<GameOver
						winner={winner}
						onRestart={handleRestart}
					/>
				)}
				<GameBoard
					onSelectSquare={handleSelectSquare}
					board={gameBoard}
				/>
				<Log turns={gameTurns} />
			</div>
		</main>
	);
}
