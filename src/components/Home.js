import React from 'react'
// import Navibar from './Navibar';
// import Navs from './Navs';
import {Container,Row,Col,Button} from 'react-bootstrap';


import '../Strapi assets/assets/planet-loader.svg'


const Home = () => {
    return (
        <div>
            <Container>
               
            
              <Row>
           <div className ="mt-5 d-flex justify-content-center align-content-center">
           <Col md={{ span: 4, offset: 0 }} className=" px-2 pt-4 pb-4  d-flex justify-content-center align-content-center  ">
               <img  src="../Strapi assets/assets/planet-loader.svg" className="img-fluid" alt="planet-loader" />
               </Col>
               
               </div>
        </Row>
           <div className ="mt-3 d-flex row justify-content-center align-content-center">
                  
                
                <p className='space mt-3'>Space doesn’t have to be so empty.</p>
                <Button href="#" className='pt-2'>CREATE PLANET</Button>
               
               </div>
        
           </Container>
        </div>
    )
}

export default Home
