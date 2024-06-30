import Transaction from "./component/Transaction";

const Title = ()=> <h1>บัญชีรายรับ-รายจ่าย</h1>
const Description = ()=> <p>ข้อมูลบัญชีในแต่ละวัน</p>

function App() {
  return (
    <>
      <Title />
      <Description />
      <Transaction />
    </>
  );
}

export default App;