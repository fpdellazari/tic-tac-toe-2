import './styles.css';

export default function Square({ value, isHighLighted, onSquareClick }) {
    return (
        <button className="square" style={{ backgroundColor: isHighLighted ? 'chartreuse' : 'inherit' }} onClick={onSquareClick}>{value}</button>
    );
}