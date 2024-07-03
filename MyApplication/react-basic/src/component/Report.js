import { useContext } from "react"
import DataContext from "../data/DataContext"

const Report = ()=> {
    const name = useContext(DataContext)

    return (
        <div>
            สวัสดี : {name}
        </div>
    );
}

export default Report