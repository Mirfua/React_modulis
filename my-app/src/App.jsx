// import './App.css';

import Apskritimas from './Components/Apskritimas';
// import Box from './Components/Box';
// import Simple from './Components/Simple';

// const a = 5;
// const b = 6;

const data = [
  {
    ls: '2px',
    apskritimasColor: 'green',
    apskritimasNumber: 68
  },
    {
    ls: '1px',
    apskritimasColor: 'yellow',
    apskritimasNumber: 45
  },
    {
    ls: '-2px',
    apskritimasColor: 'white',
    apskritimasNumber: 90
  },
    {
    ls: '4px',
    apskritimasColor: 'pink',
    apskritimasNumber: 101
  },
  {
    ls: '3px',
    apskritimasColor: 'red',
    apskritimasNumber: 18
  },
    {
    ls: '1px',
    apskritimasColor: 'purple',
    apskritimasNumber: 25
  },
    {
    ls: '-1px',
    apskritimasColor: 'blue',
    apskritimasNumber: 9
  },
    {
    ls: '5px',
    apskritimasColor: 'orange',
    apskritimasNumber: 201
  },
];


function App() {

  return (
    <>
    {data.map((apskritimas, index) => <Apskritimas key={index} apskritimasColor={apskritimas.apskritimasColor} ls={apskritimas.ls} apskritimasNumber={apskritimas.apskritimasNumber} />)}
    </>
  );

}

export default App;