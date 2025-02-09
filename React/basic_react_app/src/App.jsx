import "./App.css";
import  Title from "./Title.jsx"
import ProductTab from "./ProductTab.jsx"
import MsgBox from "./MsgBox.jsx";


// function Description() {
//   return <h3>This is the description of title</h3>;
// }

function App() {
  return (
  <>
  <MsgBox userName="piyush" textColor="Brown" />
  <MsgBox userName="aman" textColor="pink" />
  <MsgBox userName="karan" textColor="orange" />
  <ProductTab/>;
  </>
  );
}

export default App;
