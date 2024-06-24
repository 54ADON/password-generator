const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("getBtn");
const copyIcon = document.getElementById("copyIcon");

// Character sets
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&~`*()_-+={}[]|;'<>,./?";

// Update slider value display
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});

// Generate password when button is clicked
generateBtn.addEventListener("click", () => {
    passBox.value = generatePassword();
});

// Function to generate password
function generatePassword() {
    const length = inputSlider.value;
    let characters = "";
    let password = "";

    // Append character sets based on user selection
    characters += lowercaseEl.checked ? lowercaseLetters : "";
    characters += uppercaseEl.checked ? uppercaseLetters : "";
    characters += numberEl.checked ? numbers : "";
    characters += symbolsEl.checked ? symbols : "";

    // Generate password of specified length
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}

// Copy password to clipboard
copyIcon.addEventListener("click", () => {
    if (passBox.value !== "" || passBox.value.length >= 10) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";

        setTimeout(() => {
            copyIcon.innerHTML = "content_copy";
        }, 2000);
    }
});

