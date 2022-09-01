import React from 'react';
import style from  './WelcomePage.module.css'

const WelcomePage = () => {
    return (
        <div className={style.p}>
            <p className={style.script}><span>Welcome</span></p>
            <p className={style.shadow}>To</p>
            <p className={style.shadow}>ToDo</p>
            <p className={style.shadow}>LIST</p>
            <p className={style.script}><span>APP</span></p>
        </div>
    );
};

export default WelcomePage;