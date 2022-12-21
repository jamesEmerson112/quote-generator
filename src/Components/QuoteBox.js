import React, { useState, useEffect } from 'react';
import './QuoteBox.css';
import axios from 'axios';

// Import quotation mark
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


const link = 'https://api.api-ninjas.com/v1/quotes?category=';

function QuoteBox(props) {
  const [quote, setQuote] = useState('Experience is the teacher of all things.');
  const [author, setAuthor] = useState('- Julis Caesar');

// author
// :
// "Robert Frost"
// category
// :
// "inspirational"
// quote
// :
// "The best way out is always through."
  const  handleClicked = async (option) => {
    // getting
  // Make a request for a user with a given ID
    // const data = await getQuote(linkInspiration);
    // setQuote(data.quote);
    // setAuthor(data.author)
    if(option === 'rejection') {
      const data = await getQuote(link, 'failure');
      setQuote(data['quote']);
      setAuthor('- ' + data['author']);
    }
    else if (option === 'success') {
      const data = await getQuote(link, 'success');
      setQuote(data['quote']);
      setAuthor('- ' + data['author']);
    }
    else if (option === 'depression') {
      const data = await getQuote(link, 'inspirational');
      setQuote(data['quote']);
      setAuthor('- ' + data['author']);
    }
    else
      alert('404')
  }

  return (
    <div class=" min-w-5 resize-animation" id="quoteBox">
      <FontAwesomeIcon icon={faQuoteLeft} className="text-xl" />
      <div id="quote-text" class="flex">
        <h3 id="text" class="grid justify-items-center" >{quote}</h3>
      </div>
      <p id="author" class="grid justify-items-end mt-2">{author}</p>
      {/* <a id="tweet-quote" href="twitter.com">Tweet Quote</a> */}
      <div id="buttons" class="flex justify-around mt-6
      " >
        <button id="new-quote-rejection" class="the-buttons" onClick={() => handleClicked('rejection')}>Rejection</button>
        <button id="new-quote-success" class="the-buttons" onClick={() => handleClicked('success')}>Success</button>
        <button id="new-quote-depression" class="the-buttons" onClick={() => handleClicked('depression')}>Depression</button>
      </div>
    </div>
  );
}

async function getQuote(link, options) {
  const newLink = link + options;
  const response = await axios.get(newLink, {
    headers: {
      'X-Api-Key': 'A25IAmlOT0YYhJITGzfxOA==mq4LyKJhthB3DSEY'
    }
  })
  return response.data[0];
}

export default QuoteBox;