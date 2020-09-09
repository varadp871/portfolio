import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import axios from "axios";
const REGISTER_URL =
  "http://ec2-13-126-190-182.ap-south-1.compute.amazonaws.com/api/v1/astrology/kundali/";
class KundaliCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      gender: "",
      bdate: "",
      btime: "",
      btimezone: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk5NTkzNDE5LCJqdGkiOiI1NGYxNDAwMDJhMzE0NjJhOTdlOTgwMGUyMTYwYjJlMiIsInVzZXJfaWQiOjJ9.4uHNODpouIsVMD23hOAl68vHWJmReewUzrs7S0yfoQI",
  };

  submitHandler = (e) => {
    console.log(this.headers);
    e.preventDefault();
    console.log(this.state);
    axios
      .post(`${REGISTER_URL}`, this.state, {
        headers: this.headers,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { fname, lname, gender, bdate, btime, btimezone } = this.state;
    return (
      <div>
        <p className="h5 text-center mb-4">Create Kundali</p>
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="fname"
              aria-describedby="emailHelp"
              value={fname}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lname"
              className="form-control"
              value={lname}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <input
              type="text"
              name="gender"
              className="form-control"
              value={gender}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Birth Date</label>
            <input
              type="text"
              name="bdate"
              className="form-control"
              value={bdate}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Birth Time</label>
            <input
              type="text"
              name="btime"
              className="form-control"
              value={btime}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Birth Time Zone</label>
            <input
              type="text"
              name="btimezone"
              className="form-control"
              value={btimezone}
              onChange={this.changeHandler}
            />
          </div>

          <div className="text-center">
            <button className="btn btn-primary" onClick={this.submitHandler}>
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default KundaliCreate;
