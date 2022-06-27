
//.........................................................................
//...............HANDLE PHONE INCREASE AND DECREASE..........................
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})


//.................HANDLE PHONE INCREASE AND DECREASE......................
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})
//.........................................................................





//.QUANTITY AND ADD PRICE........................................................................
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();
}
//..2222222222222222222222222222222..........................................................................



//CALCOLATION...............................................................................
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}


function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
//...................................................................................

















/*------------------------------------------------------------------------------

                  bakka soho increement and decrement
-------------------------------------------------------------------------------*/
/*
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.getElementById('case-plus').addEventListener('click',function(){//console.log('plus butto click');
const caseInput=document.getElementById('case-number');
const caseNumber=caseInput.value;//console.log(caseNumber);
caseInput.value=parseFloat(caseNumber)+1;


const caseTotal=document.getElementById('case-total');
caseTotal.innerText = caseNumber * 59;

})

//----------------------------------------------------------
document.getElementById('case-minus').addEventListener('click',function(){//console.log('minus button is clicked')
const caseInput=document.getElementById('case-number')
const caseNumber=caseInput.value;//console.log(minNumber);
caseInput.value=parseFloat(caseNumber)-1;
})


*/



/*------------------------------------------------------------------------------
                  bakka soho increement and decrement end 
-------------------------------------------------------------------------------*/








/*------------------------------------------------------------------------------
                  function increement and decrement start
-------------------------------------------------------------------------------*/
/*
function updateCaseNumber(isIncreasing){

    const caseInput=document.getElementById('case-number');
    const caseNumber=caseInput.value;//console.log(caseNumber);
    

if(isIncreasing==true){
    caseInput.value=parseFloat(caseNumber)+1;
}

else  if (caseNumber > 0){
    caseInput.value=parseFloat(caseNumber)-1;
}

//update total  velue
}

    document.getElementById('case-plus').addEventListener('click',function(){//console.log('plus butto click');
    updateCaseNumber(true);
    })
    
    //----------------------------------------------------------
    document.getElementById('case-minus').addEventListener('click',function(){//console.log('minus button is clicked')
    updateCaseNumber(false);
   
    })
*/








/*------------------------------------------------------------------------------
                  function increement and decrement start add total
-------------------------------------------------------------------------------*/

// function updateCaseNumber(isIncreasing){

//     const caseInput=document.getElementById('case-number');
//     let caseNumber=caseInput.value;//console.log(caseNumber);
    

// if(isIncreasing==true){
//     caseNumber=parseFloat(caseNumber)+1;
// }

// else  if (caseNumber > 0){
//     caseNumber=parseFloat(caseNumber)-1;
// }

// caseInput.value=caseNumber;

// //update total  velue
// const caseTotal=document.getElementById('case-total');
// caseTotal.innerText=caseNumber * 59 ;

// }



//     document.getElementById('case-plus').addEventListener('click',function(){//console.log('plus butto click');
//     updateCaseNumber(true);
//     })
    
//     //----------------------------------------------------------
//     document.getElementById('case-minus').addEventListener('click',function(){//console.log('minus button is clicked')
//     updateCaseNumber(false);
   
//     })




 
// const decreaseNumber=(incdec,phonePrice)=>{

//     var itemval=document.getElementById(incdec);
//     var phonePrice=document.getElementById(phonePrice);

//     // console.log(itemval)
//     if (itemval.value <= 0){
//         itemval.value = 0;

//     }
//     itemval.value=parseInt(itemval.value)-1;
//     phonePrice.innerHTML =parseInt (phonePrice.innerHTML)-1219;
        
// }
//............................................................................................................


// ...........................................................................................................
// const increaseNumber=(incdec,phonePrice,casePrice)=>{

//     var itemval=document.getElementById(incdec);
//     var phonePrice=document.getElementById(phonePrice);
//     var casePrice=document.getElementById(casePrice);
//     // console.log(itemval)
  
        
//     itemval.value=parseInt(itemval.value)+1;
//     phonePrice.innerHTML =parseInt (phonePrice.innerHTML)+1219;

// }

//...........................................................................................................



    
//..........................................
// const decreaseNumber=(incdec,phonePrice)=>{

//     var itemval=document.getElementById(incdec);
//     var phonePrice=document.getElementById(phonePrice);

//     // console.log(itemval)
//     if (itemval.value <= 0){  
//         itemval.value = 0;

//     }
//     itemval.value=parseInt(itemval.value)-1;
//     phonePrice.innerHTML =parseInt (phonePrice.innerHTML)-1219;
        
// }


// const increaseNumber=(incdec,phonePrice,casePrice)=>{

//     var itemval=document.getElementById(incdec);
//     var phonePrice=document.getElementById(phonePrice);
//     var casePrice=document.getElementById(casePrice);
//     // console.log(itemval)
  
        
//     itemval.value=parseInt(itemval.value)+1;
//     phonePrice.innerHTML =parseInt (phonePrice.innerHTML)+1219;

// }
//..........................................

