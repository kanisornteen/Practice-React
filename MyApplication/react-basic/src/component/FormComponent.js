import './FormComponent.css'
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props)=> {
    const [title, setTitle] = useState('') // อ่านการใช้ useState ได้ที่โฟลเดอร์ How to Create React and Learn React - 7-11
    const [amount, setAmount] = useState(0)

    const inputTitle = (event)=> {
        setTitle(event.target.value);
    }
    const inputAmount = (event)=> {
        setAmount(event.target.value);
    }
    const saveItem = (event)=> {
        event.preventDefault();
        const itemData = {
            title: title,
            amount: Number(amount),
            id: uuidv4()
        }
        setTitle('');
        setAmount(0);

        props.addItem(itemData)
    }

    return (
        <>
            <form onSubmit={saveItem}>
                <div className="from-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTitle} value={title}></input>
                </div>
                <div className="from-control">
                    <label>จำนวนเงิน</label>
                    <input type="text" placeholder="ระบุจำนวนเงิน" onChange={inputAmount} value={amount}></input>
                </div>
                <div>
                    <button type="submit" className="btn">เพิ่มรายการ</button>
                </div>
            </form>
        </>
    );
}

export default FormComponent