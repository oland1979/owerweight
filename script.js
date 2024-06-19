const yourWeight = prompt("Яка Ваша вага в кілограмах?")
const yourGrowth = prompt("Який Ваш ріст в метрах?")
const indexBMI = yourWeight / (yourGrowth * yourGrowth)
const bodyWeightOver = indexBMI >= 25
console.log(indexBMI)
console.log(bodyWeightOver)

alert("У Вас лишня вага?" + " " + bodyWeightOver)