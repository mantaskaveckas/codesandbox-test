import React, { Component } from "react";
import ReactGA from "react-ga";
import photo from "../assets/photo.jpg";
import Card from "./Card";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      reactGaInitialised: false
    };
  }

  componentDidMount() {
    if (!this.state.reactGaInitialised) {
      ReactGA.initialize("UA-104473382-2");
      ReactGA.pageview(window.location.pathname + window.location.search);
      this.setState({ reactGaInitialised: true });
    }
  }

  render() {
    return (
      <Card
        photo={photo}
        name="Mantas Kaveckas"
        position="Senior Frontend Engineer"
        mail="mantas.kaveckas@gmail.com"
        linkedin="https://www.linkedin.com/mantaskaveckas"
        twitterName="@kaveckas"
        twitter="https://twitter.com/kaveckas"
      />
    );
  }
}
