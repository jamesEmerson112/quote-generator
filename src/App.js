import './App.css';
import QuoteBox from './Components/QuoteBox.js'

function App() {
  return (
    <div  className="bg-yellow-800 h-screen flex flex-col items-center justify-center text-white text-xs" id="quote-box">
      <QuoteBox />
    </div>
  );
}

export default App;
