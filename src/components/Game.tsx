import { useState } from 'react';
import './Game.css';

export default function Game() {
  const size = 3;
  const players = ['X', 'O'];
  const [board, setBoard]: [string[], React.Dispatch<React.SetStateAction<string[]>>] = useState(newBoard());

  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [warning, setWarning] = useState('');
  const [winner, setWinner] = useState('');

  function reset() {
    setBoard(newBoard());
    setWinner('');
    setWarning('');
    setCurrentPlayer(0);
  }

  function newBoard(): string[] {
    return Array.from(Array(size * size).fill('_'));
  }

  function addWarning(msg = '') {
    setWarning(msg);
    setTimeout(() => setWarning(''), 5000);
  }

  function selectSquare(pos: number): string[] {
    let newBoard: string[] = [];
    if (!players.includes(board[pos]) && pos >= 0 && pos < board.length) {
      newBoard = board.toSpliced(pos, 1, players[currentPlayer]);
      setBoard(newBoard);
    } else {
      addWarning('Square already taken. Please pick another square.');
    }
    return newBoard;
  }

  function makeMove(ev: React.MouseEvent<HTMLElement>) {
    const button = ev.target as HTMLElement;
    const pos = Number(button.dataset.pos);

    if (!players.includes(winner)) {
      const newBoard = !isNaN(pos) ? selectSquare(pos) : [];
      if (newBoard.length) {
        if (haveWinner(newBoard)) {
          console.log('winner', players[currentPlayer]);
          setWinner(players[currentPlayer]);
        } else {
          setCurrentPlayer((cur) => (cur + 1) % players.length);
        }
      }
    } else {
      addWarning('Already have a winner. Hit reset to play again.');
    }
  }

  function haveWinner(_board: string[]) {
    const currPlayerOccupied = (pos: number) =>
      _board[pos] === players[currentPlayer];

    return (
      [0, 1, 2].every(currPlayerOccupied) ||
      [3, 4, 5].every(currPlayerOccupied) ||
      [6, 7, 8].every(currPlayerOccupied) ||
      [0, 3, 6].every(currPlayerOccupied) ||
      [1, 4, 7].every(currPlayerOccupied) ||
      [2, 5, 8].every(currPlayerOccupied) ||
      [0, 4, 8].every(currPlayerOccupied) ||
      [2, 4, 6].every(currPlayerOccupied)
    );
  }

  return (
    <div className="game" onClick={makeMove}>
      <section className="board">
        {board.map((square: string, idx: number) => (
          <button data-pos={idx}>{square}</button>
        ))}
      </section>
      <p>Current player: {players[currentPlayer]}</p>
      <button onClick={reset}>Reset</button>
      {winner && <h2>Winner: {winner}</h2>}
      {warning && <p className="warn">{warning}</p>}
    </div>
  );
}
