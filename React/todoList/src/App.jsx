import './App.css'
import TodoList from './TodoList'
import Lottery from './Lottery'
import Ticket from './Ticket'
import Lottery2  from './Lottery2'

function App() {
  return(
    <>
      <Lottery2 n={3} winningSum={15}/>
    </>
  )
}

export default App
