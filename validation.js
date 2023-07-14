const inputs = document.querySelectorAll('input');
// Loop through each collection of inputs
// Add Event Listener for each 

const patterns = {
    telephone: /^\d{11}$/
};

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        console.log(e.target.attribute.name.value);
    });
});