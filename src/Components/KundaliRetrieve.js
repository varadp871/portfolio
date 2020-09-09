import React, { Component } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: `http://ec2-13-126-190-182.ap-south-1.compute.amazonaws.com/api/v1/astrology/kundali/`,
});

class KundaliRetrieve extends Component {
  constructor(props) {
    super();

    api.get("/").then((res) => {
      console.log(res.data);
      console.log(res.data.results);

      this.setState({ kundalis: res.data.results });
    });
    this.SubmitHandler = this.SubmitHandler.bind(this);
  }

  state = {
    kundalis: [],
    isButtonClicked: false,
  };

  SubmitHandler() {
    this.setState({ isButtonClicked: true });
    console.log("clicked");
  }
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.SubmitHandler}>
          Retrieve All Kundalis
        </button>
        {this.state.isButtonClicked ? <KundaliList /> : <NoList />}
      </div>
    );
  }
}

class KundaliList extends KundaliRetrieve {
  render() {
    return (
      <div>
        <h1>Names Of People who have Successfully Created kundali</h1>

        <ul className='"list-group list-group-flush"'>
          {this.state.kundalis.map((kundali) => {
            console.log(kundali);
            return (
              <li className="list-group-item" key={kundali.first_name}>
                {kundali.first_name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class NoList extends KundaliRetrieve {
  render() {
    return (
      <div className="container" id="retrieveText">
        <h1>Click on Retrieve All Kundalis</h1>
      </div>
    );
  }
}
export default KundaliRetrieve;
