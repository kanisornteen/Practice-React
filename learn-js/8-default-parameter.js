getDataCustomer = (name, address = "กรุงเทพมหานคร") => {
    return `ชื่อลูกค้า : ${name}
    ที่อยู่ : ${address}`
}

console.log(getDataCustomer("คณิศร"));
console.log(getDataCustomer("คณิศร", "เชียงใหม่"));