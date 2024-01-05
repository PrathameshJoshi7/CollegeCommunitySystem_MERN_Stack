import Container from "@mui/material/Container";
import homecss from './CSS files/Home.module.css';
const ContainerPage = () =>{
    return(          
        <Container fixed>
            <div className={homecss.container} >
                {" "}
                <img src={require('./Images/conf.jfif')} alt="LOGO" className={homecss.img}/>
                Conference on Future of IT Industies.{" "}
                
            </div>
        </Container>
    )
}

export default ContainerPage