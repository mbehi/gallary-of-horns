import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfHearts: 0
    }
  }
  buttonClicked = () => {
    this.setState({
      numberOfHearts: this.state.numberOfHearts + 1
    });
  }
  render() {
    return (
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={this.props.image_url} style={{ width: '90%' }} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
            {/* <AiFillHeart />{this.state.numberOfHearts} */}
          </Card.Text>
          <Button onClick={this.buttonClicked} variant="secondary" size="lg block">
            This is my favorite Horned Beast!
           </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeasts;