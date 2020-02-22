import React from 'react';
import logo from './logo.svg';
import './App.css';

function fixType() {
  //BASE TYPE
  let a: string | null = "text";
  //a = 6;
  // a = null;
  // alert(a);

  let names: Array<string> = ["fed", "ped", "red"];
  let names2: Array<string | number> = [0, "fed", "ped", "red"];
  // alert(names[0].toUpperCase());

  let sex: "male" | "female";
  // sex = "man";
  // sex = "female";

  //OBJECTS
  type UserType = {
    sayHello: Function
    name: string
    age: number
    isSamurai: boolean
    address: AddressType | null
  }

  type AddressType = {
    city?: string //НЕОБЯЗАТЕЛЬНОЕ ПОЛЕ
    country: string //ОБЯЗАТЕЛЬНОЕ ПОЛЕ
  }

  let user: UserType = {
    sayHello(message: string) {alert('Yo')},
    name: "fed",
    age: 27,
    isSamurai: true,
    address: {
      country: "Rus"
    }
  };
  // console.log(user.age);

  //function
  function summ(a: number, b:number) {
      return a + b;
  }
  // summ(1, "2");
}

fixType();




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
