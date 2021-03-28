import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import data from './data.json'

console.log("imported data", data);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      beast: {}
    }
    console.log("this is state", this.state)
  }
  
  showBeastInModal = (clickedBeast) => {
    this.setState({
      show: true,
      beast: clickedBeast,
    })
  }
  
  // hideBeastInModal = ()
  
  render() {
    return (
      <div>
        <Header />
        <Main 
          beasts={data}

        />
        <Footer />
      </div>
    );
  }
}


export default App;
