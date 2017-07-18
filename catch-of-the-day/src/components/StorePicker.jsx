import React from 'react';

import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }

  goToStore(event) {
    event.preventDefault();

    // grab the store from input value
    // console.log(this.storeInput.value);
    const storeId = this.storeInput.value;

    // redirect to store
    this.context.router.transitionTo(`/store/${storeId}`);
    console.log();
  };

  render() {

    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Pick a Store, please:</h2>
        <input
          required
          type="text"
          placeholder="Store name"
          defaultValue={getFunName()}
          ref={ (input) => { this.storeInput = input; } }
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }

}

export default StorePicker;

StorePicker.contextTypes = {
  router: React.PropTypes.object,
};
