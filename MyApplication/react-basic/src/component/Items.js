import PropTypes from 'prop-types';
import './Items.css'

// อ่าน props ได้ที่โฟลเดอร์ How to Create React and Learn React - 3
const Items = (props)=> { // จะเขียนแบบนี้ก็ได้ const Items = ({title, amount})=> {
    const {title, amount} = props
    const status = amount < 0 ? "expense" : "income"
    const symbol = amount < 0 ? "-" : "+"
    return (
        <>
            <li>{title} <span className={status}>{symbol}{Math.abs(amount)}</span></li>
        </>
    );
}

// อ่าน props-type ได้ที่โฟลเดอร์ How to Create React and Learn React - 5
Items.protoTypes = {
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default Items