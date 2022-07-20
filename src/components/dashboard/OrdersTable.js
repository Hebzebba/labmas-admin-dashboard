import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Table, Input } from "reactstrap";
import Spinner from "../spinner/Spinner";
import { fetchData } from "../../api/Api";

import user2 from "../../assets/images/users/user2.jpg";

const OrdersTable = () => {
  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      const order_data = await fetchData();
      setData(order_data);
      setDataLoaded(true);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Bookings</CardTitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Contact</th>
                <th>Laundry type</th>
                <th>Pick up date</th>
                <th>Status</th>
              </tr>
            </thead>
            {dataLoaded ? (
              <tbody>
                {data.map((tdata, index) => (
                  <tr key={index} className="border-top table-hover">
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
                          <h6 className="mb-0">{tdata.user_name}</h6>
                          <span className="text-muted">{tdata.email}</span>
                        </div>
                      </div>
                    </td>
                    <td>+{tdata.telephoneNumber}</td>
                    {/* <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td> */}
                    <td style={{ textTransform: "capitalize" }}>
                      {tdata.laundryType}
                    </td>
                    <td>{tdata.date}</td>
                    <td>
                      <Input id="exampleCheck" name="check" type="checkbox" />
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <Spinner toggle={dataLoaded} />
            )}
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default OrdersTable;
