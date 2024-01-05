import React from 'react'
import '../CSS files/Forum.css'
import Header from '../Header'
import Footer from '../Footer'
import ForumRightBar from '../ForumRightBar'
import ForumMain from '../MainHomeBar/ForumMain'
import ForumSideBar from '../ForumSideBar'
import Navbar from '../Navbar'

const Questions = () => {
  return (
    <div>
    <Header />
    <Navbar />
    <div className="forum-main-container">
      <ForumSideBar/>
      <div className="forum-main-container1">
        <ForumMain />
        <ForumRightBar />
      </div>
    </div>
  <Footer />
  </div>
  )
}

export default Questions
