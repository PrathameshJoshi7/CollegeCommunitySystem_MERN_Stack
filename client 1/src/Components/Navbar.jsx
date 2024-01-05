import React, { useState } from 'react';
import Navbarcss from './CSS files/Navbar.module.css';
import { NavLink} from 'react-router-dom';

const Navbar=()=> {
    const [dropDown,setdropDown]=useState(false);
    const showDropDownProfile = ()=>{
        setdropDown(!dropDown);
    }
    return (      
            <div className={Navbarcss.maindiv}>
                <ul className={Navbarcss.mainouterclass}>
                    <NavLink to='/HomePage'className={Navbarcss.items}>Home</NavLink><label id={Navbarcss.verticalLine}>|</label>
                    <NavLink to='/Forum'className={Navbarcss.items}>Forum</NavLink><label id={Navbarcss.verticalLine}>|</label>
                    <NavLink to='/FinalQuesAns'className={Navbarcss.items}>Q&A</NavLink><label id={Navbarcss.verticalLine}>|</label>
                    <NavLink to='/HomePage'className={Navbarcss.items}>Notes</NavLink><label id={Navbarcss.verticalLine}>|</label>
                    {/* <a href='/HomePage' className={Navbarcss.items}>Home</a><label id={Navbarcss.verticalLine}>|</label>
                    <a href='/' className={Navbarcss.items}>Forum</a><label id={Navbarcss.verticalLine}>|</label>
                    <a href='/QueAns' className={Navbarcss.items}>Q&A</a><label id={Navbarcss.verticalLine}>|</label>
                    <a href='/' className={Navbarcss.items}>Notes</a><label id={Navbarcss.verticalLine}>|</label> */}
                    <div className={Navbarcss.profilediv}>
                    <img src={require("./Images/PersonIcon.jpg")} alt="profile" className={Navbarcss.profileIcon} onClick={showDropDownProfile} />
                    {dropDown &&(
                        <div className={Navbarcss.menuProfile}>
                        <ul>
                          {/* <label><a href='/' className={Navbarcss.profileItems}>Profile</a></label><br/> */}
                          <label><a href='/'  className={Navbarcss.profileItems}>Logout</a></label>
                        </ul>
                        </div> 
                    )}
                    </div>
                    
                </ul>
            </div>

    )
}

export default Navbar
