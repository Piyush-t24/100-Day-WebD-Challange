import './App.css'
import TodoList from './TodoList'
import Lottery from './Lottery'
import Ticket from './Ticket'
import Lottery2  from './Lottery2'
import { sum } from './helper'

function App() {
  let winCondition = (ticket) =>{
    // return sum(ticket) === 15;
    // return ticket[0] === 0;
    return ticket.every((num)=> num === ticket[0]);
  }

  return(
    <>
      {/* <Lottery2 n={3} winningSum={15} /> */}
      <Lottery2 n={3} winCondition={winCondition} /> 
       {/* we pass whole function in props */}
    </>
  )
}

export default App
