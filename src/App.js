import './App.css';
import Header from './components/Header';

const element = <h1>🖖Hello world!</h1>;
const heading = <h1> React is cool!</h1>;

const quote = {
  firstQuote: 'The best error message is the one that never shows up.',
  secondQuote: 'Programmng isnt about what you know, it is about what you can figure out.'
};

function App() {
  return (
    <div className="App">
      {element}
      {heading}
      <h3>
        Quote of the day, {quote.firstQuote} {quote.secondQuote}!
      </h3>
      <Header />
    
    </div>
  );
}

export default App;
