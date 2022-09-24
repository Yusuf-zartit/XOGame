import {createContext, useState} from "react";


const GameContext = createContext(undefined);


const GameState = (props) => {
    const [screen, setScreen] = useState('start');// start || game
    const [activeUser, setActiveUser] = useState("x");// x || o
    const [playMode, setPlayMode] = useState("user");// user || cpu

    const changePlayMode = (mode)=>{
        setPlayMode(mode);
        setScreen('game');
    }

    return (
        <GameContext.Provider value={{
            screen,
            activeUser,
            changePlayMode,
            setActiveUser
        }}>
            {props.children}
        </GameContext.Provider>
    );
};

export {GameState, GameContext};
