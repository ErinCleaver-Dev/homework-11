


numbers = [45, 75, 12, 13, 14, 16, 78, 55, 20]

const binaryTreeSearch = (numbers, number) => {

    numbers.sort();


    const binary = (numbers, number) => {

        middle = Math.ceil(numbers.length/2) 
        if(number == numbers[middle]) {
            // console.log("Testing middle")
            return number;
        }
        else if(numbers.length == 1) {
            if(numbers[0] == number) {
                return number;
            } 
        } else if(number > numbers[middle]) {
            numbers = numbers.splice(middle + 1);
            return binary(numbers, number);
        } else if(number < numbers[middle]) {
            numbers = numbers.splice(0, middle);
            return binary(numbers, number);
        } else {
            return `Number ${number} was not found.`
        }

    }

    return binary(numbers, number);
}

console.log(`Test for the middle: ${binaryTreeSearch(numbers, 45)}`)
console.log(`Test for the right: ${binaryTreeSearch(numbers, 55)}`)
console.log(`Test for the left: ${binaryTreeSearch(numbers, 12)}`)
console.log(`Test for not found: ${binaryTreeSearch(numbers, 22)}`)
