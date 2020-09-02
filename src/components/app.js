import React, { Component } from 'react';
import SodaSelectionForm from './sodaSelectionForm';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Top Pop</h1>
        <SodaSelectionForm />
      </div>
    );
  }
}
