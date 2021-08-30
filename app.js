var initialCost=document.querySelector("#initial-price")
var quantity=document.querySelector("#quantity")
var currentPrice=document.querySelector("#current-price")
var checkBtn=document.querySelector("#check-btn")
var displayMsg=document.querySelector("#displayMsg")

function calculateProfit(){
    var state= 0
    var costPrice = Number(initialCost.value)*Number(quantity.value);
    var presentPrice = Number(currentPrice.value)*Number(quantity.value)
    var difference = presentPrice.toFixed(2)-costPrice.toFixed(2)
    if (difference<1){
        difference=Math.abs(difference)
        state=1
    }
    if (difference===0){
        state=2
    }
    var percentage = (difference/costPrice)*100
    return[state,difference.toFixed(2),percentage.toFixed(2)]
}
function clickhandler() {
     var currentPosition = calculateProfit()
     if (currentPosition[0]===0){
        displayMsg.innerText="Great! The profit is "+currentPosition[1]+" with gain of  "+currentPosition[2]+"%"
     }
     if (currentPosition[0]===1){
        displayMsg.innerText="Oh! The loss is "+currentPosition[1]+" with loss of  "+currentPosition[2]+"%"
     }
     if (currentPosition[0]===2){
        displayMsg.innerText="Neither gain nor loss"
     }
}
checkBtn.addEventListener("click",clickhandler)     
 