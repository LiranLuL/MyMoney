import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import React, { useState, useEffect } from "react";

function ModalWin({ isShow, handleClose }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(isShow);
  }, [isShow]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header >
        <Modal.Title>Expenses</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Categories</Form.Label>
            <Form.Control type="text"  autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export { ModalWin };
