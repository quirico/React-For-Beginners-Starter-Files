import React from 'react';

export default class AddFishForm extends React.Component {

  createFish(event) {
    event.preventDefault();

    const newFish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      description: this.description.value,
      image: this.image.value,
    };

    // const addFish = { ...this.props };
    // Perché non funziona con lo spread? addFish(newFish); AddFishForm.jsx:49 Uncaught TypeError: addFish is not a function

    this.props.addFish(newFish);
    this.fishForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input ref={(input) => this.name = input} type="text" placeholder="Fish Name" />
        <input ref={(input) => this.price = input} type="text" placeholder="Fish Price" />
        <select ref={(input) => this.status = input}>
          <option value="available">Fresh!</option>
          <option value="ubavailable">Sold Out!</option>
        </select>
        <textarea ref={(input) => this.description = input} placeholder="Fish Description" />
        <input ref={(input) => this.image = input} type="text" placeholder="Fish Image" />
        <button type="submit">+ Add Item</button>
      </form>
    );
  }

}
