import "./Spinner.css"
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { Modal, ModalBody } from "reactstrap";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = ({toggle}) => {
    return (   <Modal isOpen={!toggle} centered={true} fullscreen="md" className="spinner-modal">
    <ModalBody className="spinner-body">
    <PacmanLoader
      color="#03fcf8"
      loading={!toggle}
      css={override}
      size={24}
    />
    </ModalBody>
  </Modal>);
}
 
export default Spinner;