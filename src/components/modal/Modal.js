import React from 'react';
import Win from "./Win";
import Restart from "./Restart";

const Modal = () => {
    return (
        <div className={"modal"}>
            <div className={"modal__content"}>
                <div className={'container'}>
                    {/*<Win/>*/}
                    <Restart/>
                </div>
            </div>
        </div>
    );
};

export default Modal;
