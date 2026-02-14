/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    // creates a copy of the array and find the length of the array
    const copy = [...numbers];
    const len = copy.length;

    //compares the length and return differently depending on the number
    if (len === 0) {
        return [];
    } else if (len === 1) {
        return [copy[0], copy[0]];
    } else {
        return [copy[0], copy[len - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    //create a copy of the array
    const copy = [...numbers];

    //creates a copy of the array, with the modification
    return copy.map((num) => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    //creates a copy of the array
    const copy = [...numbers];

    //returns a copy, based on certain conditions
    return copy.map((str) => {
        //make sure it was given a string
        if (typeof str != "string") {
            return 0;
        }

        //attempts to convert the string to a integer
        const num = parseInt(str, 10);

        //then test to see if it could be converted, returns the number or 0
        return Number.isNaN(num) ? 0 : num;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    //creates a copy of the array
    const copy = [...amounts];

    //returns a copy of the array, based on conditions
    return copy.map((item) => {
        //make sure it was given a string
        if (typeof item !== "string") {
            return 0;
        }
        //make a variable, that holds a version of it without a dollar sign
        let cleaned = item.trim().replace(/^\$/, "");

        //then it attempts to convert it to a integer
        let num = parseInt(cleaned, 10);

        //make sure it was converted
        return isNaN(num) ? 0 : num;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    //creates a copy of the array
    const copy = [...messages];
    return copy
        .filter((msg) => {
            //filter creates a new array of only elements that passed the test
            return typeof msg === "string" && !msg.trim().endsWith("?");
        })
        .map((msg) => {
            //map creates a copy of the whole array with modifications to the values
            return msg.trim().endsWith("!") ? msg.toUpperCase() : msg;
        });
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    //creates a copy of the array
    const copy = [...words];

    //creates a new array based off if it passes the less than 4 letters test
    //returns how many numbers passed
    return copy.filter((word) => {
        return typeof word === "string" && word.length < 4;
    }).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    //creates a copy of the array
    const copy = [...colors];
    //makes a list of colors that we want
    const allowedColors = new Set(["red", "blue", "green"]);

    //check to see if every value have one of the colors
    return copy.every(
        (color) =>
            typeof color === "string" && allowedColors.has(color.toLowerCase()),
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    //creates a copy of the array
    const copy = [...addends];

    //if it is an empty array it returns this
    if (copy.length === 0) {
        return "0=0";
    }

    //basically uses a for loop to add all the numbers together
    const sum = copy.reduce((acc, num) => acc + num, 0);

    //join each values of the array together with a plus symbol between each value
    const expression = copy.join("+");

    //returns the sum = to the expression we made
    return `${sum}=${expression}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    //creates a copy of the array
    const copy = [...values];

    //finds the first index, that has a negative
    const firstNegIndex = copy.findIndex((num) => num < 0);

    //
    if (firstNegIndex === -1) {
        //gets the sum of the values
        const sum = copy.reduce((acc, val) => acc + val, 0);
        return [...copy, sum];
    } else {
        //takes a portion of the array and gets the sum
        const sumBeforeNeg = copy
            .slice(0, firstNegIndex)
            .reduce((acc, val) => acc + val, 0);
        //returns the portion of the array up to the negative, add in the sum, then adds in the rest of the array
        return [
            ...copy.slice(0, firstNegIndex + 1),
            sumBeforeNeg,
            ...copy.slice(firstNegIndex + 1),
        ];
    }
    
}
