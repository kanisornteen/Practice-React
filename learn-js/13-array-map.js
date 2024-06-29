// array map = นำ array มาทำอะไรสักอย่างจนได้ array ใหม่

const data = [10, 20, 30, 40]
console.log(data);

const result = data.map(e=>{
    return e*2
})
console.log(result);

console.log("-------------ประยุกต์ใช้--------------");

const monny = data.map((e, i)=>{
    return `วันที่ ${i+1} ได้เงิน ${e} บาท`
})
console.log(monny);

console.log("----------------------------------");

const data2 = [
    {day: "01/06/ 2564", weather: "แดดร้อน" ,temp: 27},
    {day: "03/06/2564", weather: "ฝนตก" ,temp: 23},
    {day: "04/06/2564", weather : "หมอก" ,temp: 18}
]
    const result2 = data2.map(e=>e.weather)
    console.log(result2);