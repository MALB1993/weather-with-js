// Define a class named Ui which represents the User Interface interactions
export default class Ui {

    // Method to display text content in an HTML element identified by elementId
    display(elementId, value){
        document.getElementById(elementId).textContent = value; // Set text content of the element with elementId to the provided value
    }

    // Method to display an image in an HTML img element identified by id, using the icon code from the weather response
    displayImage(id, response) {
        const iconCode = response; // Extract the icon code from the weather response
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`; // Construct the URL for the weather icon image
        document.getElementById(id).setAttribute("src", iconUrl); // Set the src attribute of the img element with id to the icon URL
    }
}
