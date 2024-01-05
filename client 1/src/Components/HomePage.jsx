import React from "react";
//import axios from "axios";
import Header from './Header';
import Footer from './Footer';
import Navbar from "./Navbar";
import Container from "@mui/material/Container";
import homecss from './CSS files/Home.module.css';

const HomePage = () =>{
    return(
        <div>
            <Header/>
            <Navbar/>
            <div className={homecss.mainDiv}>
                <label className={homecss.mainHead} > WELCOME</label>
                <div style = {{display: "flex", justifyContent: "space-around"}}>
                    <Container fixed>
                        <div className={homecss.container} >
                            {" "}
                            <img src={require('./Images/datasci.jfif')} alt="LOGO" className={homecss.img}/>
                            <h5>Seminar on topic 'Big data analytics for cybersecurity'</h5>{" "}
                            on Jan 6{" "}  
                        </div>
                    </Container>
                    <Container fixed>
                        <div className={homecss.container} >
                            {" "}
                            <img src={require('./Images/conf.jfif')} alt="LOGO" className={homecss.img}/>
                            <h5>Conference on Future of IT Industies.</h5>{" "} 
                        </div>
                    </Container>
                    <Container fixed>
                        <div className={homecss.container} >
                            {" "}
                            <img src={require('./Images/quiz.jfif')} alt="LOGO" className={homecss.img}/>
                            <h5>Quiz organized for Msc Comp. Sci. Part1 studence </h5>{" "}
                            Others can enjoy Quiz {" "}
                        </div>
                    </Container>
                </div>
                <div style = {{display: "flex", justifyContent: "space-around"}}>
                <Container fixed>
                        <div className={homecss.container} >
                            {" "}
                            <img src={require('./Images/placement.jfif')} alt="LOGO" className={homecss.img}/>
                            KPMG is hiring for various role.Contact placement cell for more information{" "} 
                        </div>
                    </Container>
                    <Container fixed>
                        <div className={homecss.container} >
                            {" "}
                            <img src={require('./Images/sports.jfif')} alt="LOGO" className={homecss.img}/>
                            BCA Studence Won Kabadi match...{" "} 
                        </div>
                    </Container>
                    <Container fixed>
                        <div className={homecss.container} >
                            {" "}
                            <img src={require('./Images/CollegeLogo.jpg')} alt="LOGO" className={homecss.img}/>
                            Admission open for various courses of Computer Science Dept.{" "}
                        </div>
                    </Container>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage
