const initial_price = document.querySelector("#initial-price")
const quantity = document.querySelector("#quantity")
const final_price = document.querySelector("#final-price")
const display = document.querySelector("#display")
const submit_btn = document.querySelector("#submit")


const profit_cal=() =>{
    const current_prot = (final_price.value * quantity.value) - (initial_price.value * quantity.value)
    const profit_perct = (current_prot / initial_price.value) * 100
    display.style.backgroundColor = `Green`
    display.innerText = `Yay, you are in Profit of Rupees ${current_prot.toFixed(2)} and the percent is  ${profit_perct.toFixed(2)} %`
}

const loss_cal=()=> {
    const current_loss = (final_price.value * quantity.value) - (initial_price.value * quantity.value)
    const loss_perct = (current_loss / initial_price.value) * 100
    display.style.backgroundColor = `Red`
    display.innerText = `Ohh no, you are in loss of Rupees ${current_loss.toFixed(2)} and the percent is ${loss_perct.toFixed(2)} %`
}

const calculate()=> {
    if(Number(final_price.value)<0 ||  Number(initial_price.value)<0 || Number(quantity.value)<0){
         display.innerText = `Enter Positive Number`;
    }
   else if (Number(final_price.value) > Number(initial_price.value)) {
        profit_cal()
    } else if (Number(final_price.value) < Number(initial_price.value)) {
        loss_cal()
    } else {
        display.style.backgroundColor = `beige`
        display.innerText = `No loss No Profit!!`
    }

}

submit_btn.addEventListener('click', calculate)
