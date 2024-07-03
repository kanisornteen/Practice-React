import Transaction from "./component/Transaction";
import './component/App.css';
import FormComponent from "./component/FormComponent";
import { useState } from "react";
import DataContext from "./data/DataContext";
import Report from "./component/Report";

const topCss = {color:'white', textAlign:'center'};
const Title = ()=> <h1 style={topCss}>บัญชีรายรับ-รายจ่าย</h1>

function App() {
  // const data = [
  //   {id:1, title: "เงินเดือน", amount:"23000"},
  //   {id:2, title: "ค่าขนม", amount:"7000"},
  //   {id:3, title: "ค่าเกม", amount:"1000"},
  // ]

  const [item, setItem] = useState([])

  const onAddItem = (newItem)=> {
    setItem((loopItem)=>{
      return [newItem, ...loopItem]
    })
  }

  return (
    // อ่าน Context API ได้ที่โฟลเดอร์ How to Create React and Learn React - 16-18
    <DataContext.Provider value="kanisorn">
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