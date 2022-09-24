import React from 'react';

const Restart = () => {
    return (
        <div color={"restart"}>
            <h3 className={"restart__title"}>Restart Game</h3>
            <div className={"restart__btns"}>
                <button className={"btn btn-sm"}>no,cancel</button>
                <button className={"btn btn-sm btn-yellow"}>res,restart</button>
            </div>
        </div>
    );
};

export default Restart;
