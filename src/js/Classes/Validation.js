export default class Validation {
    containsOnlyLetters(input) {
        const regex = /^[\u0600-\u06FF\u0750-\u077F a-zA-Z]+$/;  // Updated regex to allow spaces
        return regex.test(input);
    }

    isEmpty(input) {
        return input.trim() === "";
    }

    validated(id, input) {
        const errorMessageElement = document.getElementById(id);

        if (!this.containsOnlyLetters(input)) {
            // Display error message for invalid characters
            if (errorMessageElement) {
                errorMessageElement.textContent = "نام شهر را به صورت صحیح وارد کنید";
            }
            return true;
        }

        if (this.isEmpty(input)) {
            // Display error message for empty input
            if (errorMessageElement) {
                errorMessageElement.textContent = "نام شهر نمی‌تواند خالی باشد";
            }
            return true;
        }

        // Clear error message if input is valid
        if (errorMessageElement) {
            errorMessageElement.textContent = "";
        }

        return false; // No error

    }
}
