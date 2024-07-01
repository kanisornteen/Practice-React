import './FromComponent.css'

const FromComponent = ()=> {
    return (
        <>
            <form>
                <div className="from-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการ"></input>
                </div>
                <div className="from-control">
                    <label>จำนวนเงิน</label>
                    <input type="text" placeholder="ระบุจำนวนเงิน"></input>
                </div>
                <div>
                    <button type="submit" className="btn">เพิ่มรายการ</button>
                </div>
            </form>
        </>
    );
}

export default FromComponent