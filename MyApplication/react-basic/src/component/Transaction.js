import Items from "./Items";
import './Transaction.css'
import DataContext from "../data/DataContext";

const Transaction = (props)=> {
    const {item} = props
    return (
        <>
            <ul className="container-item">
                {item.map(element => {
                    return <Items title={element.title} amount={element.amount} key={element.id} />
                })}
            </ul>
            <DataContext.Consumer>
                {value=><p>{value}</p>}
            </DataContext.Consumer>
        </>
    );
}

export default Transaction