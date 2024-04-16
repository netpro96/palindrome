const checkP = document.getElementById("check-btn");
const result = document.getElementById("result");
let input = document.getElementById("text-input");

const onlyLetters = () =>{
    //Fuction will get the value from the input element, will convert the value to a string
    let inputValue = input.value + "";
    //Then it will delete and replace all special characters, numbers and covert it to lower case
    let onlyWords = inputValue.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    //using trim(), I will remove the spaces
    onlyWords = onlyWords.trim();
    // I return the value of onlyWords to the constant onlyLetters
    return onlyWords;

}

const palindromeChecker = () => {
    let inputValue = input.value;
    //I am calling the result of the last function into a new variable
    let onlyWords = onlyLetters();
    /*I will assign the words to a new variable to reverse it and then join it
    This will help me to get the same value even reversed*/

    let reversedWord = onlyWords.split('').reverse().join('');
    //Finally I will compare the normal value with the reversed one

    if (inputValue === ''){
        alert("Please input a value");
        return;
    } else if (onlyWords === reversedWord){
        result.innerHTML = `<p>${inputValue} is a palindrome.<p>`;
    } else {
        result.innerHTML = `<p>${inputValue} is not a palindrome.<p>`;
    }
}

checkP.addEventListener('click', palindromeChecker);