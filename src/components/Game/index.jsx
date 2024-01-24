import { useState } from "react";
import Board from "../Board";
import './styles.css';

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Vá para o movimento #' + move;
        } else {
            description = 'Vá para o início do jogo';
        }

        let moveItem;
        if (move === currentMove && currentMove === 0 ) {
            moveItem = <span>Você está no início do jogo</span>
        } else if (move === currentMove) {
            moveItem = <span>Você está no movimento #{move}</span>
        } else {
            moveItem = <button onClick={() => jumpTo(move)}>{description}</button>
        }

        return (
            <li key={move}>                
                {moveItem}
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}