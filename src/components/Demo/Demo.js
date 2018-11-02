import React from "react";

class Demo extends React.Component {
  state = {
    demo: false
  };

  handleClickTrue = () => this.setState({ demo: true });
  handleClickFalse = () => this.setState({ demo: false });

  render() {
    return (
      <main>
        <h1>Succint React Starter</h1>
        <p>
          This is a sample of the Reach Router in use. Below is a sample of the
          handlers in this component.
        </p>

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

export default Demo;
