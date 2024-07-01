import Transaction from "./component/Transaction";
import './component/App.css';
import FormComponent from "./component/FormComponent";

const topCss = {color:'white', textAlign:'center'};
const Title = ()=> <h1 style={topCss}>บัญชีรายรับ-รายจ่าย</h1>

function App() {
  return (
    <div className="container">
      <Title />
      <FormComponent />
      <Transaction />
    </div>
  );
}

export default App;