import React from 'react';
import Navibar from './Navibar';
import {Container,Row,Col,Spinner} from 'react-bootstrap';

import loader from '../assets/planet-loader.svg'

const PreLoading = () => {
    
    return (
        
        <div>
            <Container>
           <Navibar/>
           <Row>
               <div className =" mt-5 d-flex justify-content-center align-content-center " >
                 <Spinner animation="grow" />             
               </div>
           
           <div className =" mt-5 d-flex justify-content-center align-content-center " >
            
            <Col md={{ span: 4, offset:0 }} className="load w-25 px-2 pt-4 pb-4 mt-5 bg-white d-flex justify-content-center align-content-center  ">
               <img  src={loader} className="img-fluid" alt="planet-loader" />
            </Col>
               
               </div>
        </Row>
           </Container>
        </div>
    )
}

export default PreLoading
