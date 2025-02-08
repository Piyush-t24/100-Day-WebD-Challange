import "./App.css";
import  Title from "./Title.jsx"

function Description() {
  return <h3>This is the description of title</h3>;
}

function App() {
  return (
    <>
      <Title />
      <Description/>
      <Title />
      <Description/>
      <Title />
      <Description/>
      <button>Click me</button>
    </>
  );
}

export default App;
