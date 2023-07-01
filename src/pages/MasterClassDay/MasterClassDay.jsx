import React, { useState } from 'react'
import NavBar from '../../component/NavBar/NavBar'
import './MasterClassDay.css'

const emojiArray = ['./sad-Face.svg', './confused-Face.svg', './Neutral-Face.svg', './Grinning-Face.svg', './Star-Struck.svg']

const MasterClassDay = () => {
    const [name, setName] = useState('Gurmeher')

    return (
        <section className='masterClass-day'>
            <NavBar />
            <div>
                <div className='masterClass-day__body'>
                    <img src="./girl.svg" alt="girl" className='masterClass-day__body_image' />
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
