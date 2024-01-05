import React from 'react'
import { NavLink } from 'react-router-dom'
import Question from './Images/icons8-forum.gif'
import Tags from './Images/icons8-tags.gif'
import Users from './Images/icons8-users.gif'
import './CSS files/ForumSideBar.css';

const ForumSideBar = () => {
  return ( 
    <div className='left-sidebar'>
      <nav className='side-navbar'>
        <div className='item-hover'>
        <NavLink to='/Forum' className='home'>
            <p>Home</p>
        </NavLink>
        </div>
        <div className='side-nav-div'>
            <div className='item-hover'>
            <NavLink to="/Questions" className='side-nav-link'>
                <img src={Question} alt="Question"/>
                <p>Questions</p>
            </NavLink >
            </div>
            <div className='item-hover'>
            <NavLink to="/Tags" className='side-nav-link'>
                <img src={Tags} alt="Tags" />
                <p>Tags</p>
            </NavLink>
            </div>
            <div className='item-hover'>
            <NavLink to="/Users" className='side-nav-link'>
                <img src={Users} alt="Users" />
                <p>Users</p>
            </NavLink>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default ForumSideBar
