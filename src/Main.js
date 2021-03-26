import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';

class Main extends React.Component {
  render() {
   let beastArray = data.map(animal => {
      return <HornedBeasts
          name={animal.keyword}
          title={animal.title}
          imageUrl={animal.image_url}
          description={animal.description}
        />
    });
    return (
      <main id="demo-test">
        {beastArray}
      </main>
    );
  }
}

export default Main;