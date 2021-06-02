numbers = [45, 75, 12, 13, 14, 16, 78, 55, 20]

const numberBinaryTreeSearch = (numbers, number) => {
    // sorts the numbers within the function
    numbers.sort();

    // function for finding numbers in a binary.
    const binary = (numbers, number) => {

        // finds the middle
        let middle = Math.ceil(numbers.length/2) 
 // checks if the length is equal to 1
        if(numbers.length == 1) {
            if(numbers[0] == number) {
                return `Number ${number} was found.`;
            } // if it dose not return true it will print that the number is not found.
             else {
            return `Number ${number} was not found.`
        }}
        // checks if the current point is greate then the number.
      
        // checks if the current number is equal to the middle
        if(number == numbers[middle]) {
            // console.log("Testing middle")
            return `Number ${number} was found.`;
        }
        else if(number > numbers[middle]) {
            numbers = numbers.splice(middle + 1);
            return binary(numbers, number);
        // checks if the current number in the array is less then the number.
        } else if(number < numbers[middle]) {
            numbers = numbers.splice(0, middle);
            return binary(numbers, number);
        }

    }

    return binary(numbers, number);
}

console.log(`Test for the middle: ${numberBinaryTreeSearch(numbers, 45)}`)
console.log(`Test for the right: ${numberBinaryTreeSearch(numbers, 55)}`)
console.log(`Test for the left: ${numberBinaryTreeSearch(numbers, 12)}`)
console.log(`Test for not found: ${numberBinaryTreeSearch(numbers, 22)}`)
