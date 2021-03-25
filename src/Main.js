import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';

class Main extends React.Component {
  render() {
    let beastArray =[];
    data.forEach((animal) => {
      beastArray.push(
        <HornedBeasts 
          name = {animal.keyword}
          title = {animal.title}
          imageUrl = {animal.imageUrl}
          description = {animal.description}
        />
      );
    });
    
    
    return (
      <main>
        {beastArray}
      </main>
    );
  }
}

export default Main;