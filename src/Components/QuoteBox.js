import React, { useState, useEffect } from 'react';
import './QuoteBox.css';
import axios from 'axios';

const linkInspiration = 'https://api.api-ninjas.com/v1/quotes?category=inspirational';

function QuoteBox(props) {
  const [quote, setQuote] = useState('This is the quote');
  const [author, setAuthor] = useState('- Author');

  // useEffect(() => {
  //   handleClicked('rejection');
  // }, [])

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
    if(option === 'rejection')  alert('rejection');
    else if (option === 'success')   alert('success');
    else if (option === 'depression')   alert('depression');
    else
      alert('404')

    console.log('hello');
  }

  return (
    <div className="App-header" id="quote-box">
      <div className="Quote-box">
        <h3 id="text">"{quote}"</h3>
        <p id="author">{author}</p>
        <a id="tweet-quote" href="twitter.com">Tweet Quote</a>
        <button id="new-quote-rejection" onClick={() => handleClicked('rejection')}>Rejection</button>
        <button id="new-quote-success" onClick={() => handleClicked('success')}>Success</button>
        <button id="new-quote-depression" onClick={() => handleClicked('depression')}>Depression</button>
      </div>
    </div>
  );
}

async function getQuote(link) {
  const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
    headers: {
      'X-Api-Key': 'A25IAmlOT0YYhJITGzfxOA==mq4LyKJhthB3DSEY'
    }
  })
  return response.data[0];
}

export default QuoteBox;