import {createContext, useContext, useEffect, useState} from "react";
import {calcSquares} from "../helpers/calcSquares";
import {ModalContext} from "./ModalContext";


const GameContext = createContext(undefined);


const GameState = (props) => {
    const {showModal, setModalMode, hideModal} = useContext(ModalContext);

    const [screen, setScreen] = useState('start');// start || game
    const [activeUser, setActiveUser] = useState("x");// x || o
    const [playMode, setPlayMode] = useState("user");// user || cpu
    const [squares, setSquares] = useState(new Array(9).fill(''));
    const [xnext, setXnext] = useState(false);
    const [winner, setWinner] = useState(null);
    const [winnerLine, setWinnerLine] = useState(null);
    const [ties, setTies] = useState({x: 0, o: 0});

    useEffect(()=> {
        checkNoWinner();
    },[xnext,winner,screen])

    const changePlayMode = (mode) => {
        setPlayMode(mode);
        setScreen('game');
    };

    const handleSquareClick = (ix) => {
        if (squares[ix] || winner){
            return;
        }

        const currentUser = xnext ? 'o' : 'x';
        if (playMode === 'cpu' && currentUser !== activeUser) {
            return
        }

        let copySquares = [...squares];
        copySquares[ix] = !xnext ? 'x' : 'o';
        setSquares(copySquares);
        setXnext(!xnext);

        // check winner
        checkWinner(copySquares);
    }

    const checkWinner = (copySquares) => {
        const isWinner = calcSquares(copySquares);
        if (isWinner) {
            setWinner(isWinner.winner);
            setWinnerLine(isWinner.line);

            // set ties
            const ti = {...ties}
            ti[isWinner.winner] += 1;
            setTies(ti);
            showModal();
            setModalMode("winner");
        }
    }

    const checkNoWinner = () => {
        const moves = squares.filter(sq => sq ==="")
        if (moves.length === 0){
            setWinner("no");
            showModal();
            setModalMode("winner");
        }
    }

    const handleReset = () => {
        setSquares(new Array(9).fill(''));
        setXnext(false);
        setWinner(null);
        setWinnerLine(null);
        setActiveUser('x');
        setTies({x: 0, o: 0});
        hideModal();
        setScreen("start");

    }
    const handleNextRound = () => {
        setSquares(new Array(9).fill(''));
        setXnext(winner === 'x');
        setWinner(null);
        setWinnerLine(null);
        hideModal();
    }
    return (
        <GameContext.Provider value={{
            screen,
            activeUser,
            changePlayMode,
            setActiveUser,
            handleSquareClick,
            squares,
            xnext,
            ties,
            handleReset,
            handleNextRound,
            winner,
            winnerLine
        }}>
            {props.children}
        </GameContext.Provider>
    );
};

export {GameState, GameContext};
