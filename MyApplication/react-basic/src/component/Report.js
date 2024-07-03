import { useContext } from "react"
import DataContext from "../data/DataContext"
import './Report.css'

const Report = ()=> {
    const {income, expense} = useContext(DataContext)

    return (
        <div className="report-box">
            <p>รายรับ : {income}</p>
            <p>รายจ่าย : {expense}</p>
        </div>
    );
}

export default Report