import React, { useState, useEffect } from 'react';
import './RandomQuote.css';
import twitter_icon from '../../Assets/x.png';
import reload_icon from '../../Assets/return.png';

const RandomQuote = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
  });

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuotes(data);
    };
    fetchQuotes();
  }, []);

  const random = () => {
    const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(selectedQuote);
  };

  const twitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`);
  };

  return (
    <div className='container'>
      <div className='quote'>{quote.text}</div>
      <div className='line'></div>
      <div className='bottom'></div>
      <div className='author'>{quote.author.split(',')[0]}</div>
      <div className='icons'>
        <img src={reload_icon} onClick={random} alt="Reload Icon" />
        <img src={twitter_icon} onClick={twitter} alt="Twitter Icon" />
      </div>
    </div>
  );
};

export default RandomQuote;
