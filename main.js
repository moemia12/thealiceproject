//Male Female Buttons

// 1% of alocohol is 0.35g of alcohol
// To translate volume (e.g. ml) to mass (e.g. g) and vice versa, it is necessary to know the density. Alcohol density d=0.8g/ml. 
// Thus: a wine at 12.5 % vol contains 12.5ml of alcohol/100ml of wine x 0.8 g/ml = 10g of alcohol/100 ml of wine. This is the equivalent of 1 drinking unit (= 10 g).

// BAC Calculations

BAC = AlcoholConsumedInGrams / (BodyWeightInGrams * r) * 100            // 
r = 0.55 for males / 0.68 females                                       // r is the constant used for both genders

// Finding Alcohol in grams

let acMultiplier = 14; 

// Ounces of liquid 

let ouncesOfLiquid = [
    "shot: 1.5", 
    "glass: 5", 
    "pint: 12"
];


// Grams of alcohol

let AlcoholConsumedInGrams = acMultiplier * ouncesOfLiquid;







//Inputs

let weight = document.getElementsByClassName("weight-input");
let amount = document.getElementsByClassName("alcohol-content")
let units = document.getElementsByClassName("measurement-units")
let submitButton = document.getElementById("submit-button")

const alcoholGrams = 

//Function to calculate BAC 

submitButton.addEventListener('click', function(){
    
    weight * amount
})

