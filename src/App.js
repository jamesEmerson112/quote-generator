import './App.css';
import React, { useState, useEffect } from 'react';
import QuoteBox from './Components/QuoteBox.js';

function App() {
  const [bgColor, setBgColor] = useState('bg-blue-800');

  const backgroundColors = [
    'bg-red-800',
    'bg-orange-800',
    'bg-yellow-800',
    'bg-green-800',
    'bg-teal-800',
    'bg-blue-800',
    'bg-indigo-800',
    'bg-purple-800',
    'bg-gray-800',
    'bg-black',
    'bg-cyan-800'
  ];

  const handleClick = () => {
    let chosenColor = Math.floor(Math.random()*backgroundColors.length);

    while(backgroundColors[chosenColor] === bgColor) {
      chosenColor = Math.floor(Math.random()*backgroundColors.length);
    }
    setBgColor(backgroundColors[chosenColor]);
  }

  return (
    <div  className={`${bgColor} h-screen flex flex-col items-center justify-center text-white text-xs`} id="quote-box">
      <QuoteBox changeBgColor={handleClick}/>
    </div>
  );
}

export default App;
