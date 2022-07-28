'use strict'


//check if number is perfect


document.getElementById('perfectNumberInput').addEventListener("change", checkAndTypePerfectNumber);



function checkAndTypePerfectNumber() {

    const perfectNumberInput = parseFloat(document.getElementById('perfectNumberInput').value);
    if (perfectNumberInput <= 0) {
        document.getElementById('perfectNumberOutputResult').innerHTML = `Must be > 0`;
        return false;
    }
    else {

        let countPerfectNumberResult = countPerfectNumber(perfectNumberInput);

        if (countPerfectNumberResult === perfectNumberInput) {
            document.getElementById('perfectNumberOutputResult').innerHTML = `PERFECT Number!`;
        }
        else {
            document.getElementById('perfectNumberOutputResult').innerHTML = `NOT a perfect Number!`;
        }
    }
}


//function to count if any number is perfect
function countPerfectNumber(anyNumber) {

    let divisorsSum = 0;
    for (let properDivisor = 1; properDivisor <= anyNumber / 2; properDivisor++) {
        if (anyNumber % properDivisor == 0) {
            divisorsSum += properDivisor;
        }
    }

    if (divisorsSum === anyNumber && divisorsSum != 0) {

        return anyNumber;
    }

    else {

        return false;
    }

}



//


//find perfect numbers in a range and display them 

document.getElementById('filterPerfectNumbers').addEventListener('click', filterAndTypePerfectNumbers);
let arrWithPerfectNumbersOnly = [];

function filterAndTypePerfectNumbers() {
    document.getElementById('perfectNumbersInRange').innerHTML = ``;
    arrWithPerfectNumbersOnly = [];

    const rangeStart = parseFloat(document.getElementById('rangeStart').value);
    const rangeEnd = parseFloat(document.getElementById('rangeEnd').value);

    if (rangeStart >= rangeEnd) {
        document.getElementById('perfectNumbersInRange').innerHTML = `Enter correctly: From < To`;
    }
    else {
        filterPerfectNumbers(rangeStart, rangeEnd);


        if (arrWithPerfectNumbersOnly.length >= 1) {

            arrWithPerfectNumbersOnly.forEach(element => {
                document.getElementById('perfectNumbersInRange').innerHTML += `${element}, `;

            });
            //arrWithPerfectNumbersOnly = [];
        }
        else if (arrWithPerfectNumbersOnly.length <= 0) {
            document.getElementById('perfectNumbersInRange').innerHTML = `No perfect numbers found`
        }

    }

}


//function for filtering number (uses function to count if any number is perfect countPerfectNumber(anyNumber))

function filterPerfectNumbers(startNumber, endNumber) {

    if (startNumber >= endNumber) {
        return false;
    }
    else {
        for (let i = startNumber; i <= endNumber; i++) {

            let filterRange = countPerfectNumber(i);
            if (filterRange === i) {
                arrWithPerfectNumbersOnly.push(i);

            }
        }
        return arrWithPerfectNumbersOnly;
    }

}


//script fo automatic slaideshow at background


// let allSlidersinList = document.querySelectorAll('.slideItem');
// let slideNumber = 1;

// //showSlides();

// function showSlides() {

//     for (let i = 1; i < 5;  i++) {
//         if(i >= allSlidersinList.length){i = 1};
//         allSlidersinList[i].style.display = "block";
//         allSlidersinList[i - 1].style.display = "none";
//         setTimeout(() => {
            
//         }, 500);
//     }


    // for (let eachSlider = 0; eachSlider <= allSlidersinList.length; eachSlider++) {
    //     allSlidersinList[slideNumber].style.display = "none";
    // }

    
    // if (slideNumber >= allSlidersinList.length) {
    //     slideNumber = 1;
    // }

    // allSlidersinList[slideNumber - 1].style.display = "block";
    // allSlidersinList[slideNumber].style.display = "none";
    // slideNumber++;

    //setTimeout(showSlides, 2000)
    //}
//}


