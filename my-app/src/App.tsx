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
    sayHello: (message: string) => void,
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
    sayHello(message) { alert('Yo ' + message) },
    name: "fed",
    age: 27,
    isSamurai: true,
    address: {
      country: "Rus"
    }
  };
  // console.log(user.age);

  //FUNCTION
  function summ(a: number, b: number) {
    return a + b;
  }
  const summ2 = (a: number, b: number) => {
    return a + b;
  };//неявно типизированная
  const summ3 = (a: number, b: number) => (number: any) => (a: number, b: number) => {
    return a + b;
  };//явно типизированная (избыточна)
  // summ(1, "2");
}


//получение описания TYPE исходя из полей  объекта, ОСЕБЕННОСТЬ typeof и (any)as(any) в typescript
// 1) создание пустого объекта( иммитация что с сервера не пришли данные....) и добавлние as(type)- воспринимать как тип такойто...
let initialState = {
  name: null as string | null,
  age: null as number | null,
  isSamurai: null as boolean | null,
  counter: null
};

// 2) создание TYPE по полям объекта
export type InitialStateType = typeof initialState;

// 3) создание new объекта по TYPE
let state: InitialStateType = {
  name: "dsf",
  age: 23,
  isSamurai: true,
  counter: null
}

//еще немного о typeof
const GET_TASKS = "APP/Get_TASKS";

type ActionType = {
  id: number
  type: typeof GET_TASKS
}

let action: ActionType = {
  id: 12,
  type: GET_TASKS,
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
