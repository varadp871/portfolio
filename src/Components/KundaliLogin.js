import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import axios from "axios";
const LOGIN_URL =
  "http://ec2-13-126-190-182.ap-south-1.compute.amazonaws.com/api/v1/auth/jwt/create";

const api = axios.create({
  baseURL:
    "http://ec2-13-126-190-182.ap-south-1.compute.amazonaws.com/api/v1/auth/jwt/create",
});
class KundaliLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  submitHandler = (e) => {
    console.log(this.headers);
    e.preventDefault();
    console.log(this.state);
    api
      .post("/", this.state, {
        headers: this.headers,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <p className="h5 text-center mb-4">Sign in</p>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              value={email}
              onChange={this.changeHandler}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={this.changeHandler}
            />
          </div>

          <div className="text-center">
            <button className="btn btn-primary" onClick={this.submitHandler}>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default KundaliLogin;
