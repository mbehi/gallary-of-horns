import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


class HornSelectionDropdown extends React.Component {
  render() {
    return (
      <div>
        <Dropdown>
          <DropdownButton>
            <Dropdown.Item as="button" onClick={this.props.filterHornBeast} value={1}>1</Dropdown.Item>
            <Dropdown.Item as="button" onClick={this.props.filterHornBeast} value={2}>2</Dropdown.Item>
            <Dropdown.Item as="button" onClick={this.props.filterHornBeast} value={3}>3</Dropdown.Item>
            <Dropdown.Item as="button" onClick={this.props.filterHornBeast} value={100}>100</Dropdown.Item>
            <Dropdown.Item as="button" onClick={this.props.filterHornBeast} value={'All'}>All</Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </div>
    )
  }  
}

export default HornSelectionDropdown;