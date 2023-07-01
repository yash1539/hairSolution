import React, { useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import './MasterClassDay.css'
import girlImage from '../../Images/MasterClassDay/girl.svg'
import sadFace from '../../Images/MasterClassDay/sad-Face.svg'
import ConfusedFace from '../../Images/MasterClassDay/confused-Face.svg'
import NeutralFace from '../../Images/MasterClassDay/Neutral-Face.svg'
import GrinningFace from '../../Images/MasterClassDay/Grinning-Face.svg'
import StarStruck from '../../Images/MasterClassDay/Star-Struck.svg'
const emojiArray = [sadFace, ConfusedFace, NeutralFace, GrinningFace, StarStruck]

const MasterClassDay = () => {
    const [name, setName] = useState('Gurmeher')

    return (
        <section className='masterClass-day'>
            <NavBar />
            <div>
                <div className='masterClass-day__body'>
                    <img src={girlImage} alt="girl" className='masterClass-day__body_image' />
                    <h3 className='masterClass-day__body_title'>Hair Care Masterclass</h3>
                    <article className='masterClass-day__body_message'>
                        <p> Thank you,{name}, for attending the masterclass! We appreciate your presence and would love to hear your feedback.</p>
                    </article>
                    <div className='masterClass-day__body_feedback'>
                        {
                            emojiArray.map((src, index) => {
                                return (
                                    <div key={index}>
                                        <img src={src} alt="emoji" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className='masterClass-day__body_button' role="submit-feedback">
                        SUBMIT FEEDBACK
                    </button>
                </div>
            </div>
        </section>
    )
}

export default MasterClassDay