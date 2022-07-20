import OrdersTable from "../../components/dashboard/OrdersTable";
import { Row, Col } from "reactstrap";

const Tables = () => {
  return (
    <Row>
      <Col lg="12">
        <OrdersTable />
      </Col>
    </Row>
  );
};

export default Tables;
