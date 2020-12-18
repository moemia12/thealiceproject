//Inputs

let weightElement = document.getElementById("weight-input");         // User enters weight
let amountElement = document.getElementById("alcohol-content")       // Number of drinks consumed
let submitButton = document.getElementById("submit-button")          // Submits calculation 
const alcoholTypeElement = document.getElementById("alcohol-type")   // Type of alcohol consumed with ounces as measurement of value 



//Function to calculate BAC 

submitButton.addEventListener('click', function(){                   // User clicks Submit button will start the calculation
    const weight = parseInt(weightElement.value);                    // Weight will be the integer value of the weightElement input
    const amount = parseInt(amountElement.value);                    // Amount will be the integer value of amountElement input 
    const alcoholType = parseInt(alcoholTypeElement.value);          // AlcoholType will be the integer value of alcoholTypeElement
    const gramsOfAlcohol = (alcoholType*amount)*14;                  // 14 is the standard 
    const genderMultiplyer = 0.55;
    const bloodAlcoholContent = (gramsOfAlcohol / ((weight * 1000) * genderMultiplyer))*100

    document.getElementById("result-container").innerHTML = 
    bloodAlcoholContent.toFixed(2);
    
     
    
})

