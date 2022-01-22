let lotto_number = prompt("กรุณากรอกหมายเลขที่ต้องการ")

document.getElementById("s1").innerText = lotto_number
document.getElementById("result").innerHTML = Math.floor(Math.random() * 100)