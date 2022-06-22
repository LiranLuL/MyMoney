import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "components/Dorpdown";
import React, { useState, useEffect, useRef } from "react";
import { putCategorie } from "helpers/categories";
import UseGetUser from "hooks/useGetUser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormLabel, ModalWindow } from "styles/modalStyles";
import {addBalance} from "services/balance.service"

function ModalWin({ isShow, handleClose, categories }) {
  const [show, setShow] = useState(false);
  const allPages = { Expenses: "Expenses", Income: "Income" };
  const amountInput = useRef(null);
  const commentInput = useRef(null);
  const [selectedValue, setSelectedValue] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [page, setPage] = useState(allPages.Expenses);

  useEffect(() => {
    setShow(isShow);
  }, [isShow]);

  function onSaveClick() {
    const amount = amountInput.current.value === "" ? -1 : Number(amountInput.current.value);
    if (page === allPages.Expenses) {
      if (selectedValue && amount >= 0) {
        putCategorie(UseGetUser().username, amount, selectedValue.name, startDate, commentInput.current.value);
        setSelectedValue(undefined);
        handleClose();
      }
    } else if (page === allPages.Income) {
      if (amount >= 0 && amountInput.current.value !== "") {
        addBalance(commentInput.current.value, amountInput.current.value);
        handleClose();
      }
    }
  }

  function showExpenses() {
    setPage(allPages.Expenses);
  }

  function showIncome() {
    setPage(allPages.Income);
  }

  return (
    <ModalWindow show={show} onHide={handleClose}>
      <ModalWindow.Header style={{ backgroundColor: "#16161a" }}>
        <ModalWindow.Title style={{ color: "#ff8906" }} onClick={showExpenses}>
          Expenses
        </ModalWindow.Title>
        <ModalWindow.Title style={{ marginRight: "20px", color: "#ff8906" }} onClick={showIncome}>
          Income
        </ModalWindow.Title>
      </ModalWindow.Header>
      <ModalWindow.Body style={{ backgroundColor: "#16161a" }}>
        {page === allPages.Income ? (
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <FormLabel>From</FormLabel>
              <Form.Control ref={commentInput} type="text" placeholder="Source" />
            </Form.Group>
            <FormLabel>How</FormLabel>
            <Form.Control ref={amountInput} type="text" placeholder="Amount" />
          </Form>
        ) : (
          <Form>
            <FormLabel>Choose categories</FormLabel>
            <Dropdown style={{ backgroundColor: "#FFFF" }} setSelectedValue={setSelectedValue} categories={categories} />
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <FormLabel>How</FormLabel>
              <Form.Control ref={amountInput} type="text" placeholder="Amount" />
              <FormLabel>Date</FormLabel>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              <FormLabel>Comment</FormLabel>
              <Form.Control ref={commentInput} type="text" placeholder="Comment" />
            </Form.Group>
          </Form>
        )}
      </ModalWindow.Body>
      <ModalWindow.Footer style={{ backgroundColor: "#16161a" }}>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" style={{ backgroundColor: "#ff8906" }} onClick={onSaveClick}>
          Save Changes
        </Button>
      </ModalWindow.Footer>
    </ModalWindow>
  );
}
export { ModalWin };
