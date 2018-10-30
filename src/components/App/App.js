import React from "react";
import NavBar from "../NavBar";
import Sample from "../Sample";
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
        <Sample />
        <Footer />
      </div>
    );
  }
}

export default App;
