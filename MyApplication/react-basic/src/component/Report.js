import { useContext } from "react"
import DataContext from "../data/DataContext"
import './Report.css'

const Report = ()=> {
    const {income, expense} = useContext(DataContext)

    return (
        <div className="report-box">
            <p className="income">รายรับ : ฿{income}</p>
            <p className="expense">รายจ่าย : ฿{expense}</p>
            <p>คงเหลือ : ฿{income-expense}</p>
        </div>
    );
}

export default Report