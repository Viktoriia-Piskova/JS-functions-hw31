'use strict'


//check if number is perfect


document.getElementById('perfectNumberInput').addEventListener("change", checkPerfectNumber);


function checkPerfectNumber(usersNumber){
    const perfectNumberInput = parseFloat(document.getElementById('perfectNumberInput').value);

    if(perfectNumberInput <= 0){
        document.getElementById('perfectNumberOutputResult').innerHTML = `Must be > 0`;
        return false;
    }
    let divisorsSum = 0;
    for (let properDivisor = 1; properDivisor <= perfectNumberInput/2; properDivisor++){
        if (perfectNumberInput % properDivisor == 0){
            divisorsSum += properDivisor;
        }
    }

    if(divisorsSum === perfectNumberInput && divisorsSum != 0){
        document.getElementById('perfectNumberOutputResult').innerHTML = `PERFECT Number!`;
        return perfectNumberInput;
    }

    else{
        document.getElementById('perfectNumberOutputResult').innerHTML = `NOT a perfect Number!`;
        return false;
    }
    
}

//find perfect numbers in a range

document.getElementById('filterPerfectNumbers').addEventListener('click', filterPerfectNumbers);

const rangeStart = parseFloat(document.getElementById('rangeStart').value);
const rangeEnd = parseFloat(document.getElementById('rangeEnd').value);

function filterPerfectNumbers(rangeStart, rangeEnd){

    if(rangeStart >= rangeEnd){
        document.getElementById('perfectNumbersInRange').innerHTML = `Enter correctly: From < To`
        return false;
    }
    
    for (let i = rangeStart; i <= rangeEnd; i++){

       
        let filterRange = checkPerfectNumber(i)

    }

}

