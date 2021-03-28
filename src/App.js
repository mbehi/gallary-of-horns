import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';

import data from './data.json'

// console.log("imported data", data);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      beast: {}
    }
  }
  
  showBeastInModal = (clickedBeast) => {
    this.setState({
      show: true,
      beast: clickedBeast,
    })
  }
  
  hideBeastInModal = () => {
    this.setState({
      show: true,
      beast: {},
    })
  }
  
  render() {
    return (
      <div>
        <Header />
        <Main 
          beasts={data}
          handleClick={this.showBeastInModal}
        />
        <SelectedBeast 
          show={this.state.show}
          hideBeast={this.hideBeastInModal}
          beast={this.state.beast}
        />
        <Footer />
      </div>
    );
  }
}


export default App;
