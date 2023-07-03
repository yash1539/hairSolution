import React, { useState } from 'react'
import style from './Introduction.module.css'
import NavBar from '../../Components/GlobalComponents/NavBar/NavBar'

const Introduction = () => {
    const [name, setName] = useState("")

    return (
        <section className={style.introduction}>
            {/* navbar */}
            <NavBar isHidden={true} />

            {/* body  */}
            <main className={style.introduction_body}>
                <div>
                    <img src="./assets/girl.svg" alt="tia" />
                </div>
                <div>
                    <p>Hi there! I'm Tia, your personal stylist, So I can make your experience more personalised, please tell me your name</p>
                </div>
            </main>

            <div className={style.inputSection}>
                <div className={style.inputSection_react}>
                    <img src="./assets/Star-Struck.svg" />
                </div>
                <div>
                    <input type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder='Enter your Name'
                        className={style.inputField} />
                </div>
                <div>
                    <img src="./assets/arrow-right.svg" alt="arrow-key" />
                </div>
            </div>

        </section>
    )
}

export default Introduction
