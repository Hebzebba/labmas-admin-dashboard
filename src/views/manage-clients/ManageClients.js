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
import { deleteClient, getLaundryInfo, updateClient } from "../../api/Api";
import { useAlert } from "react-alert";
import "./ManageClients.css";
import PhoneInput from "react-phone-input-2";
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const ManageClients = () => {
  const [laundryInfo, setLaundryInfo] = useState();
  const [load, setLoad] = useState(false);
  const [modal, setModal] = useState(false);
  const [status, setStatus] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [laundryName, setlaundryName] = useState("");

  const alert = useAlert();

  useEffect(() => {
    const getLaundrydata = async () => {
      const data = await getLaundryInfo();
      setLaundryInfo(data);
      if (data) {
        setLoad(true);
      }
    };

    getLaundrydata();
  }, [laundryInfo]);

  const handleSubmit = async (e) => {
    setStatus(true);
    const response = await updateClient(email, contact, name, laundryName);
    if (response[0] === "User data updated") {
      setStatus(false);
      alert.success(response[0]);
    }
  };

  const toggle = () => setModal(!modal);
  const showModal = (name, contact, laundryName) => (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update client info</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="contact">Contact</Label>
            <PhoneInput
              country={"gh"}
              countryCodeEditable={false}
              containerStyle={{ width: "100%" }}
              inputStyle={{ width: "100%" }}
              value={contact}
              onChange={(contact) => setContact(contact)}
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
        <Button color="primary" onClick={handleSubmit}>
          Update
          <ScaleLoader
            color={"#03e3fc"}
            loading={status}
            css={override}
            size={50}
          />
        </Button>{" "}
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
                        onClick={async () => {
                          const res = await deleteClient(item.email);
                          if (res[0] === "User deleted") {
                            alert.success("User deleted successfully");
                          }
                        }}
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
            {showModal(name, contact, laundryName)}
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ManageClients;
