//Leap Year Checker:
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

console.log(isLeapYear(2024)); 
console.log(isLeapYear(2012)); 
console.log(isLeapYear(1997)); 

//Ticket Pricing :
function getTicketPrice(age) {
    if (age <= 12) {
        return "The ticket price is $10.";
    } else if (age >= 13 && age <= 17) {
        return "The ticket price is $15.";
    } else if (age >= 18) {
        return "The ticket price is $20.";
    } else {
        return "Invalid age.";
    }
}

console.log(getTicketPrice(10)); 
console.log(getTicketPrice(16)); 
console.log(getTicketPrice(25)); 

//Weather Clothing Adviser :

function clothingAdviser(temperature, isRaining) {
    let advice = "Based on the weather, you should wear: ";

    if (temperature >= 25) {
        advice += "light clothing like shorts and a t-shirt";
    } else if (temperature >= 15 && temperature < 25) {
        advice += "comfortable clothing like jeans and a long-sleeve shirt";
    } else if (temperature >= 5 && temperature < 15) {
        advice += "warmer clothing like a jacket or sweater";
    } else {
        advice += "heavy winter clothing like a coat, scarf, and gloves";
    }

    if (isRaining) {
        advice += ", and don't forget an umbrella or raincoat!";
    }

    return advice;
}

const temperature = parseInt(prompt("Enter the current temperature in °C:"));
const isRaining = prompt("Is it raining? (yes/no)").toLowerCase() === "yes";

console.log(clothingAdviser(temperature, isRaining));


//Palindrome Checker:

function isPalindrome(str) {
    // Clean up the string: remove spaces, punctuation, and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    function check(start, end) {
        if (start >= end) return true; // Base case: reached the middle
        if (cleanStr[start] !== cleanStr[end]) return false;
        return check(start + 1, end - 1); // Recursive case
    }

    return check(0, cleanStr.length - 1);
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("hello")); 
console.log(isPalindrome("noon")); 