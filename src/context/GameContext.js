import {createContext, useState} from "react";


const GameContext = createContext(undefined);


const GameState = (props) => {
    const [screen, setScreen] = useState('start');// start || game
    const [activeUser, setActiveUser] = useState("x");// x || o
    const [playMode, setPlayMode] = useState("user");// user || cpu
    const [squares, setSquares] = useState(new Array(9).fill(''));
    const [xnext, setXnext] = useState(false);


    const changePlayMode = (mode) => {
        setPlayMode(mode);
        setScreen('game');
    };

    const handleSquareClick = (ix) => {

        let currentUser = xnext ? 'o' : 'x';
        if (playMode === 'cpu' && currentUser !== activeUser) {
            return
        }

        let copySquares = [...squares];
        copySquares[ix] = !xnext ? 'x' : 'o';
        setSquares(copySquares);
        setXnext(!xnext);
    }

    return (
        <GameContext.Provider value={{
            screen,
            activeUser,
            changePlayMode,
            setActiveUser,
            handleSquareClick,
            squares
        }}>
            {props.children}
        </GameContext.Provider>
    );
};

export {GameState, GameContext};
