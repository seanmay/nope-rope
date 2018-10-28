import React from "react";

import { AnimalCreatorContainer } from "../../containers/animal-creator/animal-creator.container";

export const CreationPage = () => (
  <React.Fragment>
    <h2>Create</h2>
    <main>
      <AnimalCreatorContainer />
    </main>
  </React.Fragment>
);