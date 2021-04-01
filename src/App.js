import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';

import data from './data.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      data: data,
      beastData: data,
      SelectedBeast: {},
      show: false,
      beast: {},
    }
  }

  showBeastInModal = (clickedBeast) => {
    const beast = data.find(beast => beast.title === name);
    this.setState({
      selectBeast: beast,
      displayProp: true,
    })
  }
  
  hideBeastInModal = () => {
    this.setState({
      show: true,
      beast: {},
    })
  }
  
  filterHornBeast = (horns) => {
    if(horns === "all") {
      return this.setState({})
    } else {
      const array = this.state.data.filter( element => element.horns === horns)
      this.setState({beastData: array})
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Main 
          showBeastInModal={this.showBeastInModal}
          beasts={data}
          filterHornBeast={this.filterHornBeast}
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
