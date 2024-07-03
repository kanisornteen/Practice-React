import Transaction from "./component/Transaction";
import './component/App.css';
import FormComponent from "./component/FormComponent";
import { useEffect, useState } from "react";
import DataContext from "./data/DataContext";
import Report from "./component/Report";

const topCss = {color:'white', textAlign:'center'};
const Title = ()=> <h1 style={topCss}>บัญชีรายรับ-รายจ่าย</h1>

function App() {
  // const data = [
  //   {id:1, title: "เงินเดือน", amount:23000},
  //   {id:2, title: "ค่าขนม", amount:7000},
  //   {id:3, title: "ค่าเกม", amount:-1000},
  // ]
  const [incomeReport, setIncomeReport] = useState(0)
  const [expenseReport, setExpenseReport] = useState(0)
  const [item, setItem] = useState([])

  const onAddItem = (newItem)=> {
    setItem((loopItem)=>{
      return [newItem, ...loopItem]
    })
  }

  useEffect(()=>{
    const dataAmount = item.map(element=>element.amount)
    const income = dataAmount.filter(element=>element>0).reduce((total, element)=>total+=element,0)
    const expense = (dataAmount.filter(element=>element<0).reduce((total, element)=>total+=element,0))*-1
    setIncomeReport(income)
    setExpenseReport(expense)
  },[item, incomeReport, expenseReport])

  return (
    // อ่าน Context API ได้ที่โฟลเดอร์ How to Create React and Learn React - 16-18
    <DataContext.Provider value={{income: incomeReport, expense: expenseReport}}>
      <div className="container">
        <Title />
        <Report />
        <FormComponent addItem={onAddItem} />
        <Transaction item={item} />
      </div>
    </DataContext.Provider>
  );
}

export default App;