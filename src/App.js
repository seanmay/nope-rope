import React, { Component, Fragment } from "react";

import { GalleryPage } from "./pages/gallery";
import { CreationPage } from "./pages/creation";

class App extends Component {
  state = {
    page: "gallery"
  };

  setPage = (pagename) => this.setState(state => ({ page: pagename }));

  render() {
    return (
      <Fragment>
        <header>
          <nav>
            <ul>
              <li><button onClick={() => this.setPage("gallery")}>gallery</button></li>
              <li><button onClick={() => this.setPage("create")}>add animal</button></li>
            </ul>
          </nav>
        </header>
        {
          this.state.page === "gallery"
            ? <GalleryPage />
          : this.state.page === "create"
            ? <CreationPage />
            : <div>Page not found</div>
        }
      </Fragment>
    );
  }
}

export default App;
