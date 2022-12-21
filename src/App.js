import './App.css';
import React, { useState, useEffect } from 'react';
import QuoteBox from './Components/QuoteBox.js';

function App() {
  const [bgColor, setBgColor] = useState('bg-cyan-900');

  return (
    <div  className="bg-cyan-900 h-screen flex flex-col items-center justify-center text-white text-xs" id="quote-box">
      <QuoteBox />
    </div>
  );
}

export default App;
