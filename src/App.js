// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Expences from './components/Expences/Expences';
import NewExpence from './components/NewExpences/NewExpence';

const Dummy_Data = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const[expenses,setExpenses]=useState(Dummy_Data);

  const addExpenceHandler = (expence)=>{
    setExpenses((preExpenses)=>{
      return [expence, ...preExpenses];
    })
  };

  return (
    <div>
      <NewExpence onAddExpence={addExpenceHandler}/>
      <Expences items={expenses}></Expences>

    </div>
  );
}

export default App;
