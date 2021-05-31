


numbers = [45, 75, 12, 13, 14, 16, 78, 55, 20]

const binaryTreeSearch = (arr, number) => {

    arr.sort();


    const binary = (arr, number) => {

        middle = Math.ceil(arr.length/2) 
        if(number == arr[middle]) {
            // console.log("Testing middle")
            return number;
        }
        else if(arr.length == 1) {
            if(arr[0] == number) {
                return number;
            } 
        } else if(number > arr[middle]) {
            arr = arr.splice(middle + 1);
            return binary(arr, number);
        } else if(number < arr[middle]) {
            arr = arr.splice(0, middle);
            return binary(arr, number);
        } else {
            return `Number ${number} was not found.`
        }

    }

    return binary(arr, number);
}

console.log(`Test for the middle: ${binaryTreeSearch(numbers, 45)}`)
console.log(`Test for the right: ${binaryTreeSearch(numbers, 55)}`)
console.log(`Test for the left: ${binaryTreeSearch(numbers, 12)}`)
console.log(`Test for not found: ${binaryTreeSearch(numbers, 22)}`)
