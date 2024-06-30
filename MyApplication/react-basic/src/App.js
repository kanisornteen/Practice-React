const Title = ()=> <h1>บัญชีรายรับ-รายจ่าย</h1>
const Description = ()=> <p>ข้อมูลบัญชีในแต่ละวัน</p>
const Transaction = ()=> {
  return (
    <>
      <ul>
        <li>ค่าเดินทาง <span>-200</span></li>
        <li>เงินเดือน <span>20000</span></li>
        <li>ค่าอาหาร <span>7000</span></li>
      </ul>
    </>
  )
}

function App() {
  return (
    <>
      <Title />
      <Description />
      <Transaction />
    </>
  )
}

export default App;
