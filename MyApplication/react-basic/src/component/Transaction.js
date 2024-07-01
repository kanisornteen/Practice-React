import Items from "./Items";
import './Transaction.css'
import { v4 as uuidv4 } from 'uuid';

const Transaction = ()=> {
    const data = [
        {title: "เงินเดือน", amount:"23000"},
        {title: "ค่าขนม", amount:"เงินเดือน"},
        {title: "ค่าเกม", amount:"1000"},
        {title: "ค่าไฟ"}
    ]

    return (
        <ul className="container-item">
            {data.map(element => {
                return <Items title={element.title} amount={element.amount} key={uuidv4()} /> // หรือจะเขียนแบบนี้ก็ได้ในกรณีที่ชื่อ property ของ component เหมือนกับชื่อ property ของข้อมูลที่ส่งมา return <Items {...element}/>
            })}
        </ul>
    );
}

export default Transaction