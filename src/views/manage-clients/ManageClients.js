import { useEffect, useState } from "react";
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
  Label,
  FormGroup,
  Input,
} from "reactstrap";
import Spinner from "../../components/spinner/Spinner";
import { deleteClient, getLaundryInfo } from "../../api/Api";
import "./ManageClients.css";

const ManageClients = () => {
  const [laundryInfo, setLaundryInfo] = useState();
  const [load, setLoad] = useState(false);
  const [modal, setModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [laundryName, setlaundryName] = useState("");

  useEffect(() => {
    const getLaundrydata = async () => {
      const data = await getLaundryInfo();
      setLaundryInfo(data);
      if (data) {
        setLoad(true);
      }
    };

    getLaundrydata();
  }, []);
  const toggle = () => setModal(!modal);
  const showModal = (name, email, contact, laundryName) => (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update client info</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input id="name" name="name" placeholder={name} type="text" />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input id="email" name="email" placeholder={email} type="email" />
          </FormGroup>

          <FormGroup>
            <Label for="contact">Contact</Label>
            <Input
              id="contact"
              name="contact"
              placeholder={contact}
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="laundryName">Laundry Name</Label>
            <Input
              id="laundryName"
              name="laundryName"
              placeholder={laundryName}
              type="text"
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary">Update</Button>{" "}
        <Button color="danger" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
  return (
    <div>
      <Card>
        <CardBody>
          <div className="add-admin-container">
            <CardTitle tag="h5">Laundry Managers</CardTitle>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Contact</th>
                <th>Laundry Name</th>
                <th>Registered Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {load ? (
                laundryInfo.map((item, index) => (
                  <tr className="border-top table-hover" key={index}>
                    <td>
                      <div className="d-flex align-items-center p-2">
                        <div className="ms-3">
                          <h6 className="mb-0">{item.fullName}</h6>
                          <span className="text-muted">{item.email}</span>
                        </div>
                      </div>
                    </td>
                    <td>{item.contact}</td>
                    <td>{item.laundryName}</td>
                    <td>
                      <small>{item.date}</small>
                    </td>
                    <td>
                      <Button
                        color="primary"
                        style={{ marginRight: "15px" }}
                        onClick={() => {
                          toggle();
                          setName(item.fullName);
                          setEmail(item.email);
                          setContact(item.contact);
                          setlaundryName(item.laundryName);
                        }}
                      >
                        <i
                          className="bi bi-pencil"
                          style={{ padding: "5px" }}
                        ></i>
                        Edit
                      </Button>
                      <Button
                        color="danger"
                        onClick={() => deleteClient(item.email)}
                      >
                        <i
                          className="bi bi-trash"
                          style={{ padding: "5px" }}
                        ></i>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <Spinner />
              )}
            </tbody>
            {showModal(name, email, contact, laundryName)}
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ManageClients;
