import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Dropdown from "components/Dorpdown";
import React, { useState, useEffect, useRef } from "react";
import { putCategorie } from "helpers/categories";
import UseGetUser from "hooks/useGetUser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ModalWin({ isShow, handleClose, categories }) {
  const [show, setShow] = useState(false);
  const amountInput = useRef(null);
  const commentInput = useRef(null);
  const [selectedValue, setSelectedValue] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [page, setPage] = useState("Expenses");

  useEffect(() => {
    setShow(isShow);
  }, [isShow]);

  function onSaveClick() {
    if (page === "Expenses") {
      const amount = amountInput.current.value === "" ? -1 : Number(amountInput.current.value);
      if (selectedValue && amount >= 0) {
        putCategorie(UseGetUser().username, amount, selectedValue.name, startDate, commentInput.current.value);
        setSelectedValue(undefined);
        handleClose();
      }
    } else if (page === "Income") {
      handleClose();
    }
  }
  function showExpenses() {
    setPage("Expenses");
  }
  function showIncome() {
    setPage("Income");
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title style={{color:'#f25f4c'}} onClick={showExpenses}>Expenses</Modal.Title>
        <Modal.Title style={{marginRight:"20px",color:'#f25f4c'}} onClick={showIncome}>Income</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {page === "Income" ? (
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>From</Form.Label>
              <Form.Control ref={commentInput} type="text" placeholder="Source" />
            </Form.Group>
            <Form.Label>How</Form.Label>
            <Form.Control ref={amountInput} type="text" placeholder="Amount" />
          </Form>
        ) : (
          <Form>
            <Form.Label>Choose categories</Form.Label>
            <Dropdown setSelectedValue={setSelectedValue} categories={categories} />
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>How</Form.Label>
              <Form.Control ref={amountInput} type="text" placeholder="Amount" />
              <Form.Label>Date</Form.Label>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              <Form.Label>Comment</Form.Label>
              <Form.Control ref={commentInput} type="text" placeholder="Comment" />
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" style={{ backgroundColor: "#ff8906" }} onClick={onSaveClick}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export { ModalWin };
