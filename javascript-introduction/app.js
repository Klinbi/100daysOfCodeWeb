const nameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

const maxAllowedChars = nameInputElement.maxLength;

function updateRemainingChars() {
    const enteredValue = nameInputElement.value;

    const remainingCharacters = maxAllowedChars - enteredValue.length;

    remainingCharsElement.textContent = remainingCharacters;

    if (remainingCharacters <= 10) {
        nameInputElement.classList.add('warning');
        remainingCharsElement.classList.add('warning');
    } else {
        nameInputElement.classList.remove('warning');
        remainingCharsElement.classList.remove('warning');
    }
}

nameInputElement.addEventListener('input', updateRemainingChars);