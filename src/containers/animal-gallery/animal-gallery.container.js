import React from "react";
import { AnimalCard } from "../../components/animal-card/animal-card.component";
import { AnimalGallery } from "../../components/animal-gallery/animal-gallery.component";

/*
  Animal {
    id: string;
    name: string;
    image: string;
    likes: number;
  } 
*/

// Animal -> Animal
const increaseAnimalLikes = animal =>
  ({ ...animal, likes: animal.likes + 1 });

export class AnimalGalleryContainer extends React.Component {
  state = {
    // Animal[]
    animals: [
      { id: "001", name: "Nope Rope", image: "Snake", likes: 5 },
      { id: "002", name: "Some Example", image: "Sloth", likes: 0 }
    ]
  };

  increaseLikes = id => this.setState(state => ({
    animals: state.animals.map(animal => animal.id === id ? increaseAnimalLikes(animal) : animal)
  }));

  render() {
    return <AnimalGallery
      animals={this.state.animals}
      render={animal => <AnimalCard {...animal} like={this.increaseLikes} />}
    />;
  }
}