import React from 'react';
import Animal from './Animal'; 
import './App.css'; 

const animals = [
  { name: 'Lion', isMammal: false },
  { name: 'Snake', isMammal: false },
  { name: 'Dolphin', isMammal: true },
  { name: 'Crocodile', isMammal: false },
  { name: 'Elephant', isMammal: true },
  { name: 'Shark', isMammal: true },
  { name: 'Gorilla', isMammal: true },
  { name: 'Parrot', isMammal: false },
  { name: 'Tiger', isMammal: true },
  { name: 'Kangaroo', isMammal: false },
  { name: 'Penguin', isMammal: false },
  { name: 'Hippopotamus', isMammal: true },
];

function App() {
  return (
    <div className="App">
      {animals.map((animal, index) => (
        <Animal key={index} name={animal.name} isMammal={animal.isMammal} />
      ))}
    </div>
  );
}

export default App;
