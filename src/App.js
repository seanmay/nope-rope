import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { AnimalGalleryContainer } from "./containers/animal-gallery/animal-gallery.container";

class App extends Component {
  render() {
    return <AnimalGalleryContainer />;
  }
}

export default App;
