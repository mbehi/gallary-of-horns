import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeasts from './HornedBeasts';
import './Main.css';
import { Form } from 'react-bootstrap';


class Main extends React.Component {
  filterBeastArray = () => {

  }
  render() {
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
          <Form className="Form">
            <Form.Group controlId="bootstrapName">
              <Form.Label>Number of Horns</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Form.Control>
              </Form.Group>
            </Form>
              <CardColumns>
              {beastArray}
              </CardColumns>
            </main >
          );
  }
}

export default Main;