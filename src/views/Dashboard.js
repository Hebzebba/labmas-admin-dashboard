import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";

const Dashboard = () => {
  return (
    <div>
      <Row>
        <Col sm="12" lg="12" xl="12" xxl="10">
          <SalesChart />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
