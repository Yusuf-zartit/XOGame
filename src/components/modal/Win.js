import React, {useContext} from 'react';
import Xicon from "../icons/Xicon";
import {GameContext} from "../../context/GameContext";
import Oicon from "../icons/Oicon";

const Win = () => {
    const {winner, handleReset, handleNextRound} = useContext(GameContext);

    return (
        <div className={"score"}>
            {winner && winner !== 'no' ? (
                <>
                    <p>you win!</p>
                    <h3 className={`score__title ${winner === "o" ? "text-yellow" : "text-blue"}`}>
                        {" "}
                        {winner === 'x' ? <Xicon/> : <Oicon/>}
                        Takes the round{" "}
                    </h3>
                </>
            ) : (
                <>
                    <h3 className={`score__title text-yellow`}>
                        No Winner
                    </h3>
                </>
            )}

            <div className={"score__btns"}>
                <button className={"btn btn-sum"} onClick={handleReset}>Quit</button>
                <button className={"btn btn-sum btn-yellow"} onClick={handleNextRound}>Next Round</button>
            </div>
        </div>
    );
};

export default Win;
