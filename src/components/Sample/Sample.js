import React from "react";

class Sample extends React.Component {
  state = {
    sample: false
  };

  handleClickTrue = () => this.setState({ sample: true });
  handleClickFalse = () => this.setState({ sample: false });

  render() {
    return (
      <main>
        <h1>This is a sample page</h1>
        <button type="submit" onClick={this.handleClickTrue}>
          Set State True
        </button>
        <button type="submit" onClick={this.handleClickFalse}>
          Set State False
        </button>
      </main>
    );
  }
}

export default Sample;
