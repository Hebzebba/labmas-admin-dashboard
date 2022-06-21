import { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Table,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import user2 from "../../assets/images/users/user2.jpg";
import "./ManageAccount.css";
import PhoneInput from "react-phone-input-2";

const Switch = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
};

const ManageAccount = () => {
  const [openModal, setOpeneModal] = useState(false);

  const addAdmin = () => (
    <div>
      <Modal toggle={function noRefCheck() {}}>
        <ModalHeader toggle={function noRefCheck() {}}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={function noRefCheck() {}}>
            Do Something
          </Button>{" "}
          <Button onClick={function noRefCheck() {}}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
  return (
    <div>
      <div>
        <Modal isOpen={openModal}>
          <ModalHeader>Add Admin</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="name">Full name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Full name"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
              </FormGroup>

              <FormGroup>
                <Label for="contact">Contact</Label>
                <PhoneInput
                  country={"gh"}
                  countryCodeEditable={false}
                  containerStyle={{ width: "100%" }}
                  inputStyle={{ width: "100%" }}
                  // value={phone}
                  // onChange={(phone) => setPhone(phone)}
                />
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" /> <Label check>Is Admin</Label>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Submit</Button>
            <Button onClick={() => setOpeneModal(!openModal)}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
      <Card>
        <CardBody>
          <div className="add-admin-container">
            <CardTitle tag="h5">Bookings</CardTitle>
            <Button color="primary" onClick={() => setOpeneModal(!openModal)}>
              <i className="bi bi-person-plus" style={{ padding: "5px" }}></i>
              Add
            </Button>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Contact</th>
                <th>Is Admin</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-top">
                <td>
                  <div className="d-flex align-items-center p-2">
                    <img
                      src={user2}
                      className="rounded-circle"
                      alt="avatar"
                      width="45"
                      height="45"
                    />
                    <div className="ms-3">
                      <h6 className="mb-0">Seth</h6>
                      <span className="text-muted">testing123@gmail.com</span>
                    </div>
                  </div>
                </td>
                <td>+897439857</td>
                <td>
                  <Switch />
                </td>
                <td>
                  <Button color="primary" style={{ marginRight: "15px" }}>
                    <i className="bi bi-pencil" style={{ padding: "5px" }}></i>
                    Edit
                  </Button>
                  <Button color="danger">
                    <i className="bi bi-trash" style={{ padding: "5px" }}></i>
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ManageAccount;
