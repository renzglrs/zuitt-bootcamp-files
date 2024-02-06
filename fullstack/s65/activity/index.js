function countLetter(letter, sentence) {
    let result = 0;

    // Check first whether the letter is a single character.
    // Implement input validation to ensure that the letter parameter is a single character. If it's not, return a message, "Invalid letter input"
    // Implement input validation to ensure that the sentence parameter is not single character. If it is, return a message, "Invalid sentence input"
    // If letter is a single character, count how many times a letter has occurred in a given sentence then return count.
    // If letter does not occur in the sentence, return undefined.
    if(letter.length > 1 || letter == "" || letter == undefined) return "Invalid letter input"
    if(sentence.length == 1) return "Invalid sentence input"


    for(const element of sentence){
        if(element === letter) result++;
    }

    return result > 0 ? result : undefined;
}

console.log(countLetter("a", "banana"))



function isIsogram(text) {
    // An isogram is a word where there are no repeating letters.
    // The function should disregard text casing before doing anything else.
    // If the function finds a repeating letter, return false. Otherwise, return true.
    // Should be able handle phrases or sentences rather than just single words.
    text = text.toLowerCase();
    const letterCount = {};

    for(let i = 0; i < text.length; i++){
        const char = text[i];

        if (char.match(/[a-z]/)) {
            if (letterCount[char]) {
                return false;
            }
            letterCount[char] = true;
            // console.log(letterCount)
        }
    }
    return true;
}

console.log(isIsogram("machine"));

function purchase(age, price) {
    // Return undefined for people aged below 13.
    // Return the discounted price (rounded off) for students aged 13 to 21 and senior citizens. (20% discount)
    // Return the rounded off price for people aged 22 to 64.
    // The returned value should be a string.
    if ( age < 13){
        return undefined;
    } else if (( age >= 13 && age <= 21 ) || ( age >= 65 )){
        price = price * 0.8;
        return price.toFixed(2);
    } else {
        return price.toFixed(2);
    }
}
console.log(purchase(23, 205.52343));


function findHotCategories(items) {
    // Find categories that has no more stocks.
    // The hot categories must be unique; no repeating categories.

    // Validate the structure of each item object to guarantee it contains necessary properties like id, name, stocks, and category.
    // Return the message, "Invalid Entry", if one of the objects does not contain the correct properties.

    // Validate the value of each item object to guarantee that the necessary properties like id, name, stocks, and categoryd does not have a null or undefined value.
    // Return the message, "Invalid Values", if one of the objects does not contain the correct properties.

    // The passed items array from the test are the following:
    // { id: 'tltry001', name: 'soap', stocks: 14, category: 'toiletries' }
    // { id: 'tltry002', name: 'shampoo', stocks: 8, category: 'toiletries' }
    // { id: 'tltry003', name: 'tissues', stocks: 0, category: 'toiletries' }
    // { id: 'gdgt001', name: 'phone', stocks: 0, category: 'gadgets' }
    // { id: 'gdgt002', name: 'monitor', stocks: 0, category: 'gadgets' }

    // The expected output after processing the items array is ['toiletries', 'gadgets'].
    // Only putting return ['toiletries', 'gadgets'] will not be counted as a passing test during manual checking of codes.
    for (const item of items) {
        if (
            !item.hasOwnProperty("id") ||
            !item.hasOwnProperty("name") ||
            !item.hasOwnProperty("stocks") ||
            !item.hasOwnProperty("category")
        ) {
            return "Invalid Entry";
        }
    }

    for (const item of items) {
        if (
            !item.id ||
            !item.name ||
            typeof item.stocks !== "number" ||
            !item.category
        ) {
            return "Invalid Values";
        }
    }
    
    const hotCategories = []
    // let groupedItems = items.groupBy(items, (item => item.category))

    for(let item of items) {
        if(item.stocks == 0){
            if(!hotCategories.includes(item.category)){
                hotCategories.push(item.category);
            }
        }
    }

    return hotCategories;
}

const items = [
    { id: 'tltry001', name: 'soap', stocks: 14, category: 'toiletries' },
    { id: 'tltry002', name: 'shampoo', stocks: 8, category: 'toiletries' },
    { id: 'tltry003', name: 'tissues', stocks: 0, category: 'toiletries' },
    { id: 'gdgt001', name: 'phone', stocks: 0, category: 'gadgets' },
    { id: 'gdgt002', name: 'monitor', stocks: 0, category: 'gadgets' },
]
console.log(findHotCategories(items));

function findFlyingVoters(candidateA, candidateB) {
    // Find voters who voted for both candidate A and candidate B.

    // Validate the voter entries:
    
    // Handle cases where one or both candidate arrays are empty or contain no common voters.
    // Return a message if one or both candidate arrays are empty: "Candidate array must not be empty."
    // Return a message if the arrays has no common voters: "No common voters."

    // Consider scenarios where the inputs might be null, undefined, or of different lengths, and handle such cases gracefully.
    //Return a message if the input is null or undefined: "Invalid Values",
    //Return a message if the inputs are not the same length: "Invalid Entry"

    // The passed values from the test are the following:
    // candidateA: ['LIWf1l', 'V2hjZH', 'rDmZns', 'PvaRBI', 'i7Xw6C', 'NPhm2m']
    // candidateB: ['kcUtuu', 'LLeUTl', 'r04Zsl', '84EqYo', 'V2hjZH', 'LIWf1l']

    // The expected output after processing the candidates array is ['LIWf1l', 'V2hjZH'].
    // Only putting return ['LIWf1l', 'V2hjZH'] will not be counted as a passing test during manual checking of codes.
    
    if (candidateA.length === 0 || candidateB.length === 0) {
        return "Candidate array must not be empty.";
    }

    if (candidateA === null || candidateB === null || candidateA === undefined || candidateB === undefined) {
        return "Invalid Values";
    }

    if (candidateA.length !== candidateB.length) {
        return "Invalid Entry";
    }

    const commonVoters = [];
    for (let i = 0; i < candidateA.length; i++) {
        if (candidateB.includes(candidateA[i])) {
            commonVoters.push(candidateA[i]);
        }
    }

    if (commonVoters.length === 0) {
        return "No common voters.";
    }

    return commonVoters;
    
}

let candidateA = ['LIWf1l', 'V2hjZH', 'rDmZns', 'PvaRBI', 'i7Xw6C', 'NPhm2m']
let candidateB = ['kcUtuu', 'LLeUTl', 'r04Zsl', '84EqYo', 'V2hjZH', 'LIWf1l']
console.log(findFlyingVoters(candidateA, candidateB))

module.exports = {
    countLetter,
    isIsogram,
    purchase,
    findHotCategories,
    findFlyingVoters
};