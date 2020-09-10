/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 18;
if (votingAge >= 18) {
    console.log(true);
} else {
    console.log(false);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
var myName = `Shazeen`;
if (true) {
    myName = `Fabius`;
    console.log(myName);
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let num = `1999`;
let newNum = Number(num);
console.log(newNum);




//Task d: Write a function to multiply a*b 

function mult(a, b) {
    return a * b;
}
let result = mult(3, 3);

console.log(result);




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
let myAge = 27;



let dogYears = Math.round(27 * 7);

console.log(`Age in Dog year: ${dogYears}`);




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder(weight, age) {
    //adult dogs
    if (weight > 15 && age >= 1) {
        let food = weight * 0.02;
        return food;
    } else if (weight >= 11 && weight <= 15 && age >= 1) {
        food = weight * 0.03;
        return food;
    } else if (weight >= 6 && weight <= 10 && age >= 1) {
        food = weight * 0.04;
        return food;
    } else if (weight = 5 && age >= 1) {
        food = weight * 0.05;
        return food;
    }
}
console.log(`Adult Dog Feeder:`)
console.log(dogFeeder(100, 10));

function puppyFeeder(age) {
    if (age > 0.166667 && age < 0.333334) {
        food = age * 0.1;
        return food;
    } else if (age > 0.333334 && age < 0.583334) {
        food = age * 0.05;
        return food;
    } else if (age > 0.583334 && age < 1) {
        food = age * 0.04;
        return food;
    }
}
console.log(`Puppy Feeder:`)
console.log(puppyFeeder(0.29));



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
// let options = [`rock`, `paper`, `scissors`];
// let pcChoice = Math.floor(Math.random() * 3);
// console.log(options[pcChoice]);
console.log(`Rock Paper Scissor Game:`)
// let userChoice = prompt(`Rock, Paper, or Scissor?`);
let userChoice = `Rock`;
let pcChoice = Math.floor(Math.random() * 3);
if (pcChoice === 0) {
    pcChoice = `Rock`;
} else if (pcChoice === 1) {
    pcChoice = `Paper`;
} else {
    pcChoice = `Scissor`;
}
console.log(pcChoice);

function game(userChoice, pcChoice) {
    if (userChoice === `Rock`) {
        if (pcChoice === `Paper`) {
            return `You Lost`
        } else if (pcChoice === `Scissor`) {
            return `You Win`
        }
    }
    if (userChoice === `Paper`) {
        if (pcChoice === `Scissor`) {
            return `You Lost`
        } else if (pcChoice === `Rock`) {
            return `You Won`
        }
    }
    if (userChoice === `Scissor`) {
        if (pcChoice === `Rock`) {
            return `You Lost`
        } else if (pcChoice === `Paper`) {
            return `You Won`
        }
    } else if (userChoice === pcChoice) {
        return `It's a tie!`
    }
}
let gameResult = game(userChoice, pcChoice);
console.log(gameResult);

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
// let killo = prompt(`what is the kilometre?`);
let killo = 23;

function converteeMiles(killo) {
    let resultMiles = Math.round(killo * 0.62137);
    return resultMiles
}

let finalResult = converteeMiles(killo);
console.log(finalResult);




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

let feet = 9;

function converterCM(feet) {
    let resultCM = Math.round(feet / 0.032808);
    return resultCM
}
let finalResultCM = converterCM(feet);
console.log(finalResultCM);



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(bottles) {
    while (bottles > 0) {
        let lessBottle = bottles--;
        let newMessage = ` ${lessBottle} bottles of beer on the wall take one down pass it arround ${bottles} bottles of beer on the wall`
        console.log(newMessage);
    }
}
annoyingSong(3);




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
// let grade = prompt(`what is your grade?`)
let grade = 90;

function gradeCal(grade) {
    if (grade >= 90) {
        return `A`;
    } else if (grade >= 80) {
        return `B`
    } else if (grade >= 70) {
        return `C`
    } else if (grade >= 60) {
        return `D`
    } else {
        return `F`
    }
}

let finalGrade = gradeCal(grade);
console.log(finalGrade);



/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

function vowels(string) {
    let count = 0;
    let newString = string.toLowerCase().split("");
    console.log(newString); //[a, e, i, o, u]
    newString.forEach(v => { 
        if (v === 'a' || v === 'e' || v === 'i' || v === 'o' || v === 'u'){
            count++
        }});
    // newString.includes('aeiou');
    // console.log(newString.includes('e', 'o'));
}
console.log(vowels("veronu"));






/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
//Shazeen Fabius ---> see task 4