import Items from "./Items";
import './Transaction.css'

const Transaction = (props)=> {
    const {item} = props
    return (
        <>
            <ul className="container-item">
                {item.map(element => {
                    return <Items title={element.title} amount={element.amount} key={element.id} />
                })}
            </ul>
        </>
    );
}

export default Transaction