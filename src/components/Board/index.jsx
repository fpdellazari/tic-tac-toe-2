import { useState } from "react";

import Square from "../Square";
import './styles.css';

export default function Board({ xIsNext, squares, onPlay }) {
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Vencedor: " + winner;
    } else {
        status = "Próximo Jogador: " + (xIsNext ? "X" : "O");
    }

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) return;
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        onPlay(nextSquares);
    }

    const squaresList = squares.map((value, index) => {
        return (
            <Square value={value} onSquareClick={() => handleClick(index)} />
        );
    })

    return (
        <>
            <div className="status">{status}</div>
            <div className='board-body'>
                {squaresList}
            </div>
        </>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}