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
        <h1>Succint React Starter</h1>
        <h2>A baseline starter kit for React apps</h2>
        <p>
          <a
            href="https://github.com/jenniferlynparsons/succinct-react-starter"
            alt="link to repository on Github.com"
          >
            <button>View on Github</button>
          </a>
        </p>
        <p>
          Thanks to <a href="https://github.com/btholt">Brian Holt</a> for the
          inspiration!
        </p>
        <h3>Why did I build this?</h3>
        <p>
          Create React App is a great starting point, but I wanted something a
          bit more custom. Parcel instead of Webpack, for example. I also wanted
          to see if I could build something I would use myself and make getting
          little experiments up and running quickly easier.
        </p>

        <h3>What&#39;s included?</h3>
        <p>
          I&#39;ve kept things as simple, streamlined, and modular as I could.
          Hopefully this allows me and anyone else using this setup to swap
          things out easily.
        </p>

        <h4>CSS/Sass</h4>

        <p>
          I&#39;ve used the very basic{" "}
          <a href="https://mblode.github.io/marx/">
            Marx classless framework/reset
          </a>{" "}
          to provide a starting point for basic prototyping with a tolerable UI
          while maintaining symantic and accessibility standards. Removing it is
          as simple as deleting the cdn link from index.html.
        </p>

        <p>
          I&#39;ve also provided a few basic overrides for the nav bar and
          button styling, which also serve as examples of how the styling files
          can be structured within the project.
        </p>

        <p>
          On a more formal project, I would probably use{" "}
          <a href="https://bulma.io/">Bulma</a> via{" "}
          <a href="https://github.com/fibo/trunx">Trunx</a>.
        </p>

        <h4>Sample files</h4>

        <p>
          I&#39;ve included a navbar, a sample page, and a footer, which also
          act as the demo app and landing page for the project. The purpose was
          two-fold. First, to have the documentation presented nicely and second
          to provide a working reference of my preferred React setup.
        </p>

        <h4>The package.json</h4>

        <p>
          It&#39;s fairly self-explanatory and includes the npm modules needed
          to get up and running. There are also a couple of scripts configured
          for testing as well as linting and formatting, if you prefer to do
          those through the command line.
        </p>
        <h4>The config files</h4>
        <p>
          I&#39;ve set up a basic .babelrc, .eslintrc.json, and .prettierrc so
          that you can start using this right away. They contain what I consider
          to be a good balance between customization and letting the defaults
          handle things.
        </p>
      </main>
    );
  }
}

export default Sample;
