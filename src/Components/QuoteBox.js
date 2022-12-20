import React, { useState, useEffect } from 'react';
import './QuoteBox.css';
import axios from 'axios';

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
    <div class="bg-zinc-100 w-fit h-fit text-transparent/100 p-8" id="quoteBox">
      <i id="test">"</i>
      <div id="quote-text" class="flex">
        <h3 id="text" class="grid justify-items-center" >{quote}</h3>
      </div>
      <p id="author" class="grid justify-items-end mt-6">{author}</p>
      {/* <a id="tweet-quote" href="twitter.com">Tweet Quote</a> */}
      <div id="buttons" class="flex justify-around mt-6" >
        <button id="new-quote-rejection" onClick={() => handleClicked('rejection')}>Rejection</button>
        <button id="new-quote-success" onClick={() => handleClicked('success')}>Success</button>
        <button id="new-quote-depression" onClick={() => handleClicked('depression')}>Depression</button>
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