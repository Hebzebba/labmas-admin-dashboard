import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Table, Button } from "reactstrap";
import { getLaundryInfo } from "../../api/Api";
import "./ManageClients.css";

const ManageClients = () => {
  const [laundryInfo, setLaundryInfo] = useState();
  useEffect(() => {
    const getLaundrydata = async () => {
      const data = await getLaundryInfo();
      setLaundryInfo(data);
      console.log(data);
    };

    getLaundrydata();
  }, []);
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
              {laundryInfo &&
                laundryInfo.map((item, index) => (
                  <tr className="border-top" key={index}>
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
                      <Button color="primary" style={{ marginRight: "15px" }}>
                        <i
                          className="bi bi-pencil"
                          style={{ padding: "5px" }}
                        ></i>
                        Edit
                      </Button>
                      <Button color="danger">
                        <i
                          className="bi bi-trash"
                          style={{ padding: "5px" }}
                        ></i>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ManageClients;
