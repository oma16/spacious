import React,{useState} from 'react';
import { Modal,Button,Form} from "react-bootstrap";
import pform from '../assets/plus-circle.svg'




const Pform = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [image, setImage] =useState('');
  const [description, setDescription] =useState('');
  const [planetname, setPlanetname] =useState('');
  
  const handleSubmit = (e) =>{
      e.preventDefault();
      const planet = {image,planetname,description};
      console.log(planet)
      

  }


  return (
    <>
      
      <div className=" position-relative">
                <img src={pform} alt="" className="imgpos position-fixed" onClick={handleShow} />
            </div>
     

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="header">Planet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Image</Form.Label>
    <Form.Control type="url" required  value={image} onChange ={(e)=>setImage(e.target.value)} />
    <Form.Text id="passwordHelpBlock" muted>Paste the URL of a JPG or PNG of max 20 kb</Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text"  value={planetname} onChange ={(e)=>setPlanetname(e.target.value)} />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3}  value={description} onChange ={(e)=>setDescription(e.target.value)}/>
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary">CREATE PLANET</Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Pform;
