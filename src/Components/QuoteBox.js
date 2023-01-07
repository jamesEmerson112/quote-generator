import React, { useState, useEffect } from 'react';
import './QuoteBox.css';
import axios from 'axios';

// Import quotation mark
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const API_KEY = process.env.REACT_APP_X_API_KEY;

const link = 'https://api.api-ninjas.com/v1/quotes?category=';

function QuoteBox(props) {
  const [quote, setQuote] = useState('Experience is the teacher of all things.');
  const [author, setAuthor] = useState('- Julis Caesar');
  const [isToggled, setIsToggled] = useState(false);

  const changeBgColor = props.changeBgColor;

  const updateQuote = async (keyword) => {
    const data = await getQuote(link, keyword);
    setQuote(data['quote']);
    setAuthor('- ' + data['author']);

    setIsToggled(isToggled => !isToggled);
    console.log(isToggled);
    changeBgColor();
  }

  const handleClicked = async (option) => {
    if(option === 'rejection') {
      updateQuote('failure');
    }
    else if (option === 'success') {
      updateQuote('success');
    }
    else if (option === 'depression') {
      updateQuote('inspirational');
    }
    else
      alert('404')
  }

  return (
    <div className="transform-scale-90 relative quote-box" id="quoteBox">
      <div className="flex text-xl">
      {/* <div className="flex text-xl"> */}

        <FontAwesomeIcon icon={faQuoteLeft} className="" />
        <div id="quote-text" className={"font-sans font-bold leading-tight " + (isToggled ? "text-sm" : "")}>
        {/* <div id="quote-text" className={"test"}> */}

          <h3 id="text" className="grid justify-items-center" >{quote}</h3>
        </div>
      </div>
      <p id="author" className="grid justify-items-end mt-2">{author}</p>
      {/* <a id="tweet-quote" href="twitter.com">Tweet Quote</a> */}
      <div id="buttons" className="flex justify-between mt-6
      " >
        <button id="new-quote-rejection" className="the-buttons" onClick={() => handleClicked('rejection')}>Rejection</button>
        <button id="new-quote-success" className="the-buttons" onClick={() => handleClicked('success')}>Success</button>
        <button id="new-quote-depression" className="the-buttons" onClick={() => handleClicked('depression')}>Depression</button>
      </div>
    </div>
  );
}

async function getQuote(link, options) {
  const newLink = link + options;
  const response = await axios.get(newLink, {
    headers: {
      'X-Api-Key': API_KEY
    }
  })
  return response.data[0];
}

export default QuoteBox;