import { useState } from 'react';
import './App.css';

function App() {

  const [quote, setQuote] = useState('');
  const [pop, setPop] = useState('');
  const img = require('./assets/Copy.webp');

  function quoteGenerator(){
    fetch('https://dummyjson.com/quotes/random')
      .then(res => res.json())
      .then(res => {
        setQuote(res)
        setPop('Quote Generated!!')
        setTimeout(() => {
          setPop('')
        }, 1000);
      });
  }

  function copyText(){
    const text = document.querySelector('.Quote').textContent;
    
      navigator.clipboard.writeText(text)
      .then(() => {
        setPop('Text copied!!')
      })
      .catch(err => {
        setPop('Failed to copy!!')
      });
    setTimeout(()=> {
      setPop('')
    }, 1000)

  }

  return (
    <div className="Quotes-container">
      {pop && <div className='popUp poppins-regular'>{pop}</div>}
      <div className='Quotes-wrapper'>
        {quote && <div className='Quote-text'>
          <div className='Quote poppins-light'>{quote.quote}</div>
          <div className='Author poppins-regular'>{quote.author}</div>
          <div className='Copy' title='Copy Text' onClick={copyText}>
            <img src={img} alt="copy text icon" height='20px' width='20px'/>
          </div>
          </div>}
        <button onClick={quoteGenerator} className='poppins-bold'>Generate Quote</button>
      </div>
    </div>
  );
}

export default App;
