import React, { useState } from 'react'
import style from './NavBar.module.css'

const NavBar = ({ isHidden }) => {
    return (
        <nav className={style.navSection}>
            <div className={style.navbar}>
                <div className={style.flex}>
                    <div>{!isHidden ? <img src="./assets/backIcon.svg" alt="backIcon" /> : ''}</div>
                    <div><img src="./assets/tresemmeBanner.svg" /></div>
                    <div>{!isHidden ? <img src="./assets/cart.svg" alt="cartIcon" /> : <button className={style.SkipButton}>SKIP</button>}</div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
