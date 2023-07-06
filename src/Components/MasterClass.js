import React, { useState } from 'react'
import './MasterClass.css'
import Navbar from './Navbar'
import BookNowCard from './BookNowCard'
import { useNavigate } from 'react-router-dom'
function MasterClass() {

    const navigate = useNavigate();
    const stepInside = () =>{
     navigate("/BookingPage");
   }
    const [activeTab, setActiveTab] = useState('upcoming');

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };


    return (
        <>
            <div className='master-class-1'>
                <div className="img-background-1">
                    <Navbar />
                    <div className="screen-container-1">
                        <div >
                            <div >
                                <div className={` ${activeTab === 'upcoming' ? 'active' : ''}`} />
                                <div className={` ${activeTab === 'archived' ? 'active' : ''}`} />
                            </div>
                            <div className="tabs">
                                <div
                                    className={`tab ${activeTab === 'upcoming' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('upcoming')}
                                >
                                    Upcoming MasterClass
                                </div>
                                <div
                                    className={`tab ${activeTab === 'archived' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('archived')}
                                >
                                    Archived Masterclass
                                </div>
                            </div>
                            {activeTab === 'upcoming' && <div className='selected-masterclass' onClick={stepInside}>

                                <BookNowCard />
                                <BookNowCard />

                            </div>}
                            {activeTab === 'archived' && <div className='selected-masterclass' onClick={stepInside}>

                                <BookNowCard />

                            </div>}
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default MasterClass