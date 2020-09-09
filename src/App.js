import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import KundaliCreate from "./Components/KundaliCreate";
import KundaliLogin from "./Components/KundaliLogin";
import KundaliRetrieve from "./Components/KundaliRetrieve";
class App extends Component {
  render() {
    return (
      <MDBContainer>
        <div>
          <KundaliLogin />
          {/* <KundaliCreate /> */}
          {/* <KundaliRetrieve /> */}
        </div>
      </MDBContainer>
    );
  }
}

export default App;
