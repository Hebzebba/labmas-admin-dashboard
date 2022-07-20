import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { addLaundryOwner } from "../../api/Api";
import { useAlert } from "react-alert";

const Forms = () => {
  const [fName, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [laundryName, setLaundryName] = useState("");
  const [info, setInfo] = useState("");
  const [date, setDate] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  const alert = useAlert();

  const handleSubmit = (e) => {
    e.preventDefault();

    const submitForm = async () => {
      const response = await addLaundryOwner(
        fName,
        email,
        phone,
        date,
        laundryName,
        info,
        longitude,
        latitude
      );
      if (response[0] === "User Registered") {
        alert.success("User Registered");
      }
    };
    submitForm();
  };

  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-folder-plus me-2"> </i>
            Register client
          </CardTitle>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="fName">Full Name</Label>
                <Input
                  id="fName"
                  name="f_name"
                  type="text"
                  value={fName}
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="contact"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="lName">Laundry Name</Label>
                <Input
                  id="lName"
                  name="L_name"
                  type="text"
                  value={laundryName}
                  onChange={(e) => setLaundryName(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="info">Description</Label>
                <Input
                  id="info"
                  name="text"
                  type="textarea"
                  onChange={(e) => setInfo(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="date">Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </FormGroup>
              <Label>Coordinate</Label>
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Input
                      id="long"
                      name="long"
                      placeholder="Longitude"
                      type="number"
                      value={longitude}
                      onChange={(e) => setLongitude(e.target.value)}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Input
                      id="lat"
                      name="lat"
                      placeholder="Latitude"
                      type="number"
                      value={latitude}
                      onChange={(e) => setLatitude(e.target.value)}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
