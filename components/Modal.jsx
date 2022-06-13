import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Dropdown from "components/Dorpdown";
import React, { useState, useEffect, useRef } from "react";
import { putCategorie } from "helpers/categories";
import UseGetUser from "hooks/useGetUser";
function ModalWin({ isShow, handleClose, categories }) {
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const inputEl = useRef(null);

  useEffect(() => {
    setShow(isShow);
  }, [isShow]);

  function onSaveClick() {
    const amount = inputEl.current.value === "" ? -1 : Number(inputEl.current.value);
    if (selectedValue && amount>=0) {
      putCategorie(UseGetUser().username, amount, selectedValue.name);
      setSelectedValue(undefined);
      handleClose();
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Expenses</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>Choose categories</Form.Label>
          <Dropdown setSelectedValue={setSelectedValue} categories={categories} />
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>How</Form.Label>
            <Form.Control ref={inputEl} type="text" placeholder="Amount" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" style={{backgroundColor:"#ff8906"}} onClick={onSaveClick}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export { ModalWin };
