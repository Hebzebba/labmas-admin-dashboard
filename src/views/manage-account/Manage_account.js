import { useEffect, useState, useReducer } from "react";
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
import { getAdminData, addAdminData, deleteAdmin } from "../../api/Api";
import Spinner from "../../components/spinner/Spinner";
import { useAlert } from "react-alert";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ADMIN_LOAD":
      return { ...state, addStatus: true };
    case "ADD_ADMIN_LOAD_END":
      return { ...state, addStatus: false };

    case "DELETE_ADMIN_LOAD":
      return { ...state, deleteStatus: true };
    case "DELETE_ADMIN_LOAD_END":
      return { ...state, deleteStatus: false };
  }
};
const ManageAccount = () => {
  const [openModal, setOpeneModal] = useState(false);
  const [adminData, setAdminData] = useState();
  const [status, dispatch] = useReducer(reducer, {
    addStatus: false,
    deleteStatus: false,
  });

  // Form inputs
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminUserEmail, setAdminUserEmail] = useState("");
  const [adminUserName, setAdminUserName] = useState("");
  const [adminPassword, setAdminPassword] = useState("changeme");
  const [phone, setPhone] = useState("");
  // End of form input

  const alert = useAlert();

  useEffect(() => {
    const fetchAdminData = async () => {
      const adminInfo = await getAdminData();
      setAdminData(adminInfo);
    };
    fetchAdminData();
  }, [adminData]);

  const handleSubmitAdminData = async () => {
    dispatch({ type: "ADD_ADMIN_LOAD" });
    const response = await addAdminData(
      isAdmin,
      adminPassword,
      adminUserEmail,
      adminUserName,
      phone
    );

    if (response[0] === "User data updated") {
      alert.success(response[0]);
      dispatch({ type: "ADD_ADMIN_LOAD_END" });
    }
  };

  const handleDeleteAdmin = async (email) => {
    dispatch({ type: "DELETE_ADMIN_LOAD" });
    const response = await deleteAdmin(email);
    if (response[0] === "User deleted") {
      alert.success(response[0]);
      dispatch({ type: "DELETE_ADMIN_LOAD_END" });
    }
  };
  return (
    <div>
      <div>
        <Modal isOpen={openModal}>
          <Form>
            <ModalHeader>Add Admin</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="name">Full name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Full name"
                  type="text"
                  value={adminUserName}
                  onChange={(e) => setAdminUserName(e.target.value)}
                  required={true}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={adminUserEmail}
                  onChange={(e) => setAdminUserEmail(e.target.value)}
                  required={true}
                />
              </FormGroup>

              <FormGroup>
                <Label for="contact">Contact</Label>
                <PhoneInput
                  country={"gh"}
                  countryCodeEditable={false}
                  containerStyle={{ width: "100%" }}
                  inputStyle={{ width: "100%" }}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  required={true}
                />
              </FormGroup>
              <FormGroup>
                <Label for="pass">Password</Label>
                <Input
                  id="pass"
                  name="pass"
                  placeholder="Password"
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  required={true}
                />
              </FormGroup>
              <FormGroup check>
                <Input
                  type="checkbox"
                  onChange={(e) => setIsAdmin(e.target.checked)}
                  value={isAdmin}
                />{" "}
                <Label check>Is Admin</Label>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={handleSubmitAdminData}
                type="submit"
              >
                Submit
                <ScaleLoader
                  color={"#03e3fc"}
                  loading={status.addStatus}
                  css={override}
                  size={50}
                />
              </Button>
              <Button onClick={() => setOpeneModal(!openModal)}>Close</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
      <Card>
        <CardBody>
          <div className="add-admin-container">
            <CardTitle tag="h5">Bookings</CardTitle>
            {localStorage.getItem("isAdmin") !== "false" && (
              <Button color="primary" onClick={() => setOpeneModal(!openModal)}>
                <i className="bi bi-person-plus" style={{ padding: "5px" }}></i>
                Add
              </Button>
            )}
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
              {adminData ? (
                adminData.map((item, key) => (
                  <tr className="border-top table-hover" key={key}>
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
                          <h6 className="mb-0">{item.adminUserName}</h6>
                          <span className="text-muted">
                            {item.adminUserEmail}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>{item.contact}</td>
                    <td>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={item.admin}
                          onChange={(e) => {}}
                          disabled
                        />
                        <span className="slider round"></span>
                      </label>
                    </td>
                    <td>
                      <Button
                        color="danger"
                        onClick={() => handleDeleteAdmin(item.adminUserEmail)}
                      >
                        <i
                          className="bi bi-trash"
                          style={{ padding: "5px" }}
                        ></i>
                        Delete
                        <ScaleLoader
                          color={"#03e3fc"}
                          loading={status.deleteStatus}
                          css={override}
                          size={50}
                        />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <Spinner />
              )}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ManageAccount;
