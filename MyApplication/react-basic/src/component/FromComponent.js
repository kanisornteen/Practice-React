import './FromComponent.css'

const FromComponent = ()=> {
    const inputTitle = (event)=> {
        console.log(event.target.value);
    }
    const inputAmount = (event)=> {
        console.log(event.target.value);
    }
    const saveItem = (event)=> {
        event.preventDefault();
        console.log("บันทึกแล้ว");
    }

    return (
        <>
            <form onSubmit={saveItem}>
                <div className="from-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTitle}></input>
                </div>
                <div className="from-control">
                    <label>จำนวนเงิน</label>
                    <input type="text" placeholder="ระบุจำนวนเงิน" onChange={inputAmount}></input>
                </div>
                <div>
                    <button type="submit" className="btn">เพิ่มรายการ</button>
                </div>
            </form>
        </>
    );
}

export default FromComponent