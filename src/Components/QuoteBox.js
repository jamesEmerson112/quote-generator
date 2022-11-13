import React from 'react';

function QuoteBox(props) {
  const handleClicked = () => {
    alert('hello James');
  }

  return (
    <div className="App-header" id="quote-box">
      <h2 id="text">Text</h2>
      <h3 id="author">Author</h3>
      <button id="new-quote" onClick={handleClicked}>New Quote</button>
      <a id="tweet-quote" href="twitter.com">Tweet Quote</a>
    </div>
  );
}

export default QuoteBox;