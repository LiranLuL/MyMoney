import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export const FormLabel = styled(Form.Label)`
  color: #f25f4c;
`;

export const ModalWindow = styled(Modal)`
  .modal-dialog {
    box-shadow: 0 0 14px 22px #f25f4c inset;
  }
  .modal-footer {
    background-color: #16161a;
    border-top: 1px solid #f25f4c;


  }
  .modal-header {
    border-bottom: 1px solid #f25f4c;
  }
`;
