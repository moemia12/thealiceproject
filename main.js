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
    const gramsOfAlcohol = (alcoholType*amount)*14;                  // 14 is the standard multipler for US/UK for grams of alcohol/ per standard unit
    const genderMultiplyer = 0.55;
    const bloodAlcoholContent = (gramsOfAlcohol / ((weight * 1000) * genderMultiplyer))*100

    document.getElementById("result-container").innerHTML = 
    bloodAlcoholContent.toFixed(2);
    
    encodeURI
    
})



const alcoholType = () =>{

    if(parseInt(alcoholTypeElement.value === 12)){                  // If alcoholType is 12 (12 ounces of Beer or 1 standard drink for beers)
        return parseInt(alcoholTypeElement.value) * 0.05            // % of alcohol in the drink
    } 
    else if(parseInt(alcoholTypeElement.value === 5)){              // If alcoholType is 5 (5 ounces of Wine or 1 standard drink for wine)
        return parseInt(alcoholTypeElement.value) * 0.12            // % of alcohol in the drink
    } 
    else if(parseInt(alcoholTypeElement.value === 1.5)){            // If alcoholType is 1.5 (1.5 ounces of Spirits or 1 standard drink for spirits)
        return parseInt(alcoholTypeElement.value) * 0.4             // % of alcohol in the drink
    }

}

const alcoholType = () => {
    let pcntAlcohol 
        switch(this.value){
            case "12":
            pcntAlcohol = this.value * 0.05
            break 
            case "5":
            pcntAlcohol = this.value * 0.12
            break 
            case "1.5":
            pcntAlcohol = this.value * 0.4
            break 

        }
}