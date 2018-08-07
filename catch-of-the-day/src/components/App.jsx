import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      fishes: {},
      order: {},
    };

    // this.addFish = this.addFish.bind(this);
  }

  render() {

    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order/>
        <Inventory addFish={ this.addFish }/>
      </div>
    );
  }

  addFish = (fish) => {
    const fishes = { ...this.state.fishes };
    fishes[`${Date.now()}`] = fish;
    this.setState({ fishes });
  };

}
