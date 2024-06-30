const Title = ()=> <h1>บัญชีรายรับ-รายจ่าย</h1>
const Description = ()=> <p>ข้อมูลบัญชีในแต่ละวัน</p>
const Items = ()=> {
  return (
    <>
      <li>เงินเดือน <span>20000</span></li>
    </>
  );
}
const Transaction = ()=> {
  return (
      <ul>
        <Items />
      </ul>
  )
}

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
