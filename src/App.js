import React, { Component, Fragment } from "react";

import { GalleryPage } from "./pages/gallery";
import { CreationPage } from "./pages/creation";

class App extends Component {
  state = {
    page: "gallery"
  };

  setPage = pagename => this.setState(state => ({ page: pagename }));

  getPage = pagename =>
    pagename === "gallery" ? (
      <GalleryPage />
    ) : pagename === "create" ? (
      <CreationPage />
    ) : (
      <div>Page not found</div>
    );

  render() {
    return (
      <Fragment>
        <header>
          <nav>
            <ul>
              <li>
                <button onClick={() => this.setPage("gallery")}>gallery</button>
              </li>
              <li>
                <button onClick={() => this.setPage("create")}>
                  add animal
                </button>
              </li>
            </ul>
          </nav>
        </header>
        {this.getPage(this.state.page)}
      </Fragment>
    );
  }
}

export default App;
