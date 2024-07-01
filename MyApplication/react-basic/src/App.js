import Transaction from "./component/Transaction";
import './component/App.css';
import FromComponent from "./component/FromComponent";

const topCss = {color:'white', textAlign:'center'};
const Title = ()=> <h1 style={topCss}>บัญชีรายรับ-รายจ่าย</h1>

function App() {
  return (
    <div className="container">
      <Title />
      <FromComponent />
      <Transaction />
    </div>
  );
}

export default App;