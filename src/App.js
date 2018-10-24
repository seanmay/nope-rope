import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { AnimalGallery } from "./components/animal-gallery/animal-gallery.component";

class App extends Component {
  render() {
    return <AnimalGalleryContainer />;
  }
}

export default App;
