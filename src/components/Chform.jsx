import React,{useState} from 'react';
import { Modal,Button,Form} from "react-bootstrap";




const Chform = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      
      <div className=" position-relative">
                <img src="./Strapi assets/assets/plus-circle.svg" alt="" className="position-fixed bottom-0 end-0 translate-middle-x mx-5" onClick={handleShow} />
            </div>
     

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="navibar">Character</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Image</Form.Label>
    <Form.Control type="url"  />
    <Form.Text id="passwordHelpBlock" muted>Paste the URL of a JPG or PNG of max 20 kb</Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text"  />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Friends</Form.Label>
    <Form.Select>
    <option>Default select</option>
  </Form.Select>
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary">CREATE CHARACTER</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Chform;
