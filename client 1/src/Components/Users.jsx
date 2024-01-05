import React from 'react'
import ForumSideBar from './ForumSideBar'
import ForumRightBar from './ForumRightBar'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'


function Users() {
  return (
    <div>
        <Header />
        <Navbar />
      <div className="forum-main-container">
      <ForumSideBar />
      <div className="forum-main-container1">
            <ForumRightBar />
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Users
