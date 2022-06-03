import { Card, CardBody, CardTitle, Table, Button } from "reactstrap";
import user2 from "../../assets/images/users/user2.jpg";
import "./ManageAccount.css";

const Switch = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
};

const ManageAccount = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <div className="add-admin-container">
            <CardTitle tag="h5">Bookings</CardTitle>
            <Button color="primary">
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
