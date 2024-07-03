import { useContext } from "react"
import DataContext from "../data/DataContext"
import './Report.css'

const Report = ()=> {
    const {income, expense} = useContext(DataContext)
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div className="report-box">
            <p className="income">รายรับ : ฿{formatNumber(income)}</p>
            <p className="expense">รายจ่าย : ฿{formatNumber(expense)}</p>
            <p>คงเหลือ : ฿{formatNumber((income-expense).toFixed(2))}</p>
        </div>
    );
}

export default Report