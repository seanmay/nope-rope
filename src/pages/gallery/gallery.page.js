import React from "react";

import { AnimalGalleryContainer } from "../../containers/animal-gallery/animal-gallery.container";

export const GalleryPage = () => (
  <React.Fragment>
    <h2>Gallery</h2>
    <main>
      <AnimalGalleryContainer />
    </main>
  </React.Fragment>
);