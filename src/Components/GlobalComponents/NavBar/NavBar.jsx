import React from 'react'
import style from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={style.navSection}>
            <div className={style.navbar}>
                <ul className={style.flex}>
                    <li><img src="./assets/backIcon.svg" /></li>
                    <li><img src="./assets/tresemmeBanner.svg" /></li>
                    <li><img src="./assets/cart.svg" /></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
