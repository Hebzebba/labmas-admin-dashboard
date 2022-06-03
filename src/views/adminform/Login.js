import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import { useAlert } from "react-alert";

import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import axios from "axios";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const DEV_URL = "http://localhost:8080/api/admin-login";

const Login = () => {
  let navigate = useNavigate();
  const alert = useAlert();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [login_status, set_login_status] = useState(false);

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    set_login_status(true);
    axios
      .post(DEV_URL, { email: user, password: pass })
      .then((res) => {
        if (res.data) {
          set_login_status(false);
          const { data } = res;
          if (data === "No record found" || data === "Authentication failed") {
            alert.error("Invalid User or password");
          } else {
            localStorage.setItem("admin", data[0]["adminUser"]);
            navigate("/");
          }
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-profile-img">Admin Login</div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <div className="input-form">
              <input
                type="email"
                name="email"
                id="emal"
                required={true}
                onChange={handleUserChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username">Password</label>
            <div className="input-form">
              <input
                type="password"
                name="pass"
                id="password"
                required={true}
                onChange={handlePassChange}
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
            <div className="loader">
              <ScaleLoader
                color={"#03e3fc"}
                loading={login_status}
                css={override}
                size={50}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
