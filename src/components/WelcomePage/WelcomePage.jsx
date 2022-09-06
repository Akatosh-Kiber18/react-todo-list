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
            <img style={{
                marginLeft: "43%",
            }}
                 src="https://i.gifer.com/origin/f5/f5baef4b6b6677020ab8d091ef78a3bc_w200.gif" alt="duck"/>
        </div>
    );
};

export default WelcomePage;