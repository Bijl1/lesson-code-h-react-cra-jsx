import './App.css';
import Header from './components/Header';
import droneLogo from './images/drone.png';

const element = <h1>🖖Hello world!</h1>;
//Adding comments
const heading = <h1> React is cool!</h1>;
const name = <h1>Jonathan</h1>

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

const drone = {
  droneOne: 'nazgul',
  droneTwo: 'flywoo baby',
  droneThree: 'cinelog'
}

function App() {
  return (
    <div className="App">
      {name}
      {element}
      {divElement}
      
      <img src={droneLogo} alt="Drone view" />
      <img src='https://media.istockphoto.com/id/1412049078/photo/regatta-sailing-ship-yachts-with-white-sails-at-opened-sea-aerial-view-of-sailboat-in-windy.webp?b=1&s=170667a&w=0&k=20&c=n1bfQSuiJT_d1Q_dg6UnPmHcobpsy7W7PGTV-0Kc89k=' alt="sailing away"/>
      <h4>{ capitalizeFirstLetter(drone.droneOne)}</h4>
      <h1> {drone.droneTwo} {drone.droneThree}</h1>

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

      <h4>{/*Adding comment in JSX*/}
        Capitalized first letter: { capitalizeFirstLetter(firstName)} { capitalizeFirstLetter(lastName)}
      </h4>

      <Header />
    
    </div>
  );
}

export default App;
