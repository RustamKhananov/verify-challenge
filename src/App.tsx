import React, { useState, useRef } from 'react';
import './App.css';
import FruitAutocomplete from './components/FruitAutocomplete/FruitAutocomplete';

function App() {
  const [selectedFruit, setSelectedFruit] = useState<String|null>(null)

  const { current: handleChangeSelectedFruit } = useRef((fruit: String) => {
    setSelectedFruit(fruit)
  })
  return (
    <div className="App">
      <FruitAutocomplete />
      <span>This is just some text needed to demonstrate how dropdown works</span>
    </div>
  );
}

export default App;
