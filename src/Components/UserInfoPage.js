import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import InputField from './InputField'

const text = "Hi there! I'm Tia, your personal stylist, So I can make your experience more personalised, please tell me your name"

const UserInfoPage = () => {

  return (
    <div className="img-background">
       <Navbar  />
    <div className="screen-container">
        <Card text={text}/>
        <InputField placeholder={"Enter your Name"}/>
    </div>
    </div>
  )
}

export default UserInfoPage
