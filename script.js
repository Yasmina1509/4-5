let ism = prompt('Ismingizni kiriting')
let harf = prompt(' bironta harf kiriting')

if (ism.includes(harf)) {
    alert(`${ism} ichida ${harf} mavjud`)
} else {
    alert(`${ism} ichida ${harf} mavjud emas`)
}
