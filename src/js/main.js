
// Usage in your script
import '../scss/styles.scss';
import $ from 'jquery'; // یا
import * as bootstrap from 'bootstrap';  // Import Bootstrap if needed
import Weather from './Classes/Weather';
import Ui from './Classes/Ui';
import Validation from './Classes/Validation';


const weather = new Weather('tehran', '3b1696b477803e97eb3da392586401f2');
const validation = new Validation();
const ui = new Ui();

document.getElementById("submit-weather").addEventListener("click", (evt) => {
    evt.preventDefault();

    const cityInput = document.getElementById("city");
    const city = cityInput.value.trim();  // Get trimmed value of the city input
    const errorMessage = "error-message";

    // Validate the city input
    const hasError = validation.validated(errorMessage, city);

    // Optionally, proceed if there's no error
    if (!hasError) {
        const modal = document.getElementById("weatherModal");
        const modalBackdrop  = document.querySelector(".modal-backdrop ");

        if(modal.classList.contains('show'))
        {
            modal.classList.remove("show");
            modal.classList.add("hide");
            modalBackdrop.classList.remove("show");
            modalBackdrop.classList.add("hide");
        }
    }
});