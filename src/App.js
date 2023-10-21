import './App.css';
import Header from './components/Header';
import droneLogo from './images/drone.png';

const element = <h1>🖖Hello world!</h1>;
const heading = <h1> React is cool!</h1>;

const quote = {
  firstQuote: 'The best error message is the one that never shows up.',
  secondQuote: 'Programmng isnt about what you know, it is about what you can figure out.'
};

const student = {
  firstName: 'sterling',
  lastName: 'bijl'
}

const { firstName, lastName } = student;

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

const theId = 'home';
const divElement = <div id={theId}>div with an id</div>

function App() {
  return (
    <div className="App">
      {element}
      {divElement}
      <img src={droneLogo} alt="Drone image" />
      {heading}
      <h3>
        Quote of the day, {quote.firstQuote}!
      </h3>
      <h4>
        Hi, {student.firstName} {student.lastName}!
      </h4>

      <h4>
        In uppercase: {firstName.toUpperCase()} {lastName.toUpperCase()}.
      </h4>

      <h4>{quote.secondQuote.toLocaleUpperCase()}</h4>

      <h4>
        Capitalized first letter: { capitalizeFirstLetter(firstName)} { capitalizeFirstLetter(lastName)}
      </h4>

      <Header />
    
    </div>
  );
}

export default App;
