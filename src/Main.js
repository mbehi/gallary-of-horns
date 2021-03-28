import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeasts from './HornedBeasts';
import './Main.css';


class Main extends React.Component {
    render () {
      let beastArray = this.props.beasts.map((beast, index) => (
           <HornedBeasts
           name={beast.keyword}
           title={beast.title}
           image_url={beast.image_url}
           description={beast.description}
           key={index}
          />
      ));

          return (
          <main id="demo">
              <CardColumns>
              {beastArray}
              </CardColumns>
          </main>
          );
        }
      }

export default Main;