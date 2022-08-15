let food; 
let foodSelected;
let foodValueSelected = 0;
let drinkSelected;
let drinkValueSelected = 0;
let dessertSelected;
let dessertValueSelected = 0;
let totalValue = 0;

function selectMainCourse(ButtomClass) {
    const selectedButtom = document.querySelector(".main-course .selected")

    if (selectedButtom !== null) {
        selectedButtom.classList.remove("selected");
    }

    const selector = ButtomClass;
    const buttom = document.querySelector(selector);
    buttom.classList.add("selected");
    food = buttom.innerHTML;

    foodSelected = document.querySelector(".main-course .selected .food-selected").innerText;
    const firstSelection = document.querySelector(".first-selection .item");
    firstSelection.innerHTML = `${foodSelected}`;

    foodValueSelected = document.querySelector(".main-course .selected .food-value").innerText;
    const firstValueSelection = document.querySelector(".first-selection .price");
    firstValueSelection.innerHTML = `${foodValueSelected}`;

    enableButtom()
}

let drink;

function selectDrink(ButtomDrink) {
    const selectedButtom = document.querySelector(".drinks .selected")

    if (selectedButtom !== null) {
        selectedButtom.classList.remove("selected");
    }

    const selector = ButtomDrink;
    const buttom = document.querySelector(selector);
    buttom.classList.add("selected");
    drink = buttom.innerHTML;

    drinkSelected = document.querySelector(".drinks .selected .drink-selected").innerText;
    const secondSelection = document.querySelector(".second-selection .item");
    secondSelection.innerHTML = `${drinkSelected}`;

    drinkValueSelected = document.querySelector(".drinks .selected .drink-value").innerText;
    const secondValueSelection = document.querySelector(".second-selection .price");
    secondValueSelection.innerHTML = `${drinkValueSelected}`;

    enableButtom()
}

let dessert;

function selectDessert(ButtomDessert) {
    const selectedButtom = document.querySelector(".desserts .selected")

    if (selectedButtom !== null) {
        selectedButtom.classList.remove("selected");
    }

    const selector = ButtomDessert;
    const buttom = document.querySelector(selector);
    buttom.classList.add("selected");
    dessert = buttom.innerHTML;

    dessertSelected = document.querySelector(".desserts .selected .dessert-selected").innerText;
    const thirdSelection = document.querySelector(".third-selection .item");
    thirdSelection.innerHTML = `${dessertSelected}`;

    dessertValueSelected = document.querySelector(".desserts .selected .dessert-value").innerText;
    const thirdValueSelection = document.querySelector(".third-selection .price");
    thirdValueSelection.innerHTML = `${dessertValueSelected}`;

    enableButtom()
}

function enableButtom() {
    if (food !== undefined) {
        if (drink !== undefined) {
            if (dessert !== undefined){
                const buttomContinue = document.querySelector('.continue');
                buttomContinue.classList.add('green-buttom');
                buttomContinue.innerHTML = "Fechar pedido";
            }
        }        
    }

    let value1 = parseFloat(foodValueSelected);
    let value2 = parseFloat(drinkValueSelected);
    let value3 = parseFloat(dessertValueSelected);


    totalValue = document.querySelector(".summation .total-price")
    let totalValueSelected = value1 + value2 + value3;
    totalValue.innerHTML = "R$ " + totalValueSelected.toFixed(2);
}

function closeOrder() {
    if (food !== undefined) {
        if (drink !== undefined) {
            if (dessert !== undefined){
                const order = document.querySelector('.delivery');
                order.classList.remove('hide');
            }
        }        
    }
}

function sendMessage() {
    const name = prompt("Qual o seu nome?")
    const address = prompt("Qual o endereço da entrega?")

    let cell = "5541996835387"
    let text = `Olá, gostaria de fazer o pedido:\n - Prato: ${foodSelected}\n - Bebida: ${drinkSelected}\n - Sobremesa: ${dessertSelected}\n Total: R$ ${totalValue.innerText}\n\n Nome: ${name}\n Endereço: ${address}`;

    text = window.encodeURIComponent(text);

    window.open("https://api.whatsapp.com/send?phone=" + cell + "&text=" + text, "_blank");
}

function cancel() {
    const cancelOrder = document.querySelector('.delivery');
    cancelOrder.classList.add('hide');
}