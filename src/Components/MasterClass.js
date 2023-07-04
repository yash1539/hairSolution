import React from 'react'
import './MasterClass.css'
import Navbar from './Navbar'
import BookNowCard from './BookNowCard'
function MasterClass() {
    return (
        <>
            <div className='master-class-1'>
                <div className="img-background-1">
                    <Navbar />
                    <div className="screen-container-1">
                        <div className='tab-screen'>
                            <p type="submit" className="Upcoming-button">
                                Upcoming Masterclass
                            </p>
                            <p type="submit" className="Upcoming-button">
                                Archived Masterclass
                            </p>
                        </div>
                        <div className='selected-masterclass'>

                        <BookNowCard />
                        <BookNowCard />

                        </div>
                        {/* <div className='card-main-container'>
                            <div className='cards'>
                                <BookNowCard />
                            </div>
                            <div className='cards'>
                                <BookNowCard />
                            </div>

                        </div>
                        <div className='card-main-container card-section-2'>
                            <div className='cards'>
                                <BookNowCard />
                            </div>
                            <div className='cards'>
                                <BookNowCard />
                            </div>

                        </div> */}
                        <div className="Card-masterclass">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MasterClass