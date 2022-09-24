import React from 'react';
import Xicon from "../icons/Xicon";

const Win = () => {
    return (
        <div className={"score"}>
            <p>you win!</p>
            <h3 className={"score__title"}>
                {" "}
                <Xicon /> Takes the round{" "}
            </h3>
            <div className={"score__btns"}>
                <button className={"btn btn-sum"}>Quit</button>
                <button className={"btn btn-sum btn-yellow"}>Next Round</button>
            </div>
        </div>
    );
};

export default Win;
