import React from "react";
import { Router } from "@reach/router";
import NavBar from "../NavBar";
import Sample from "../Sample";
import Demo from "../Demo";
import Footer from "../Footer";
import "../../common_styles/global.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Sample path={process.env.PUBLIC_URL + '/'} />
          <Demo path={process.env.PUBLIC_URL + '/demo'} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
