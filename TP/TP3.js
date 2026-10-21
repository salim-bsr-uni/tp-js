
function trier(arr) {
    return arr.sort((a, b) => a - b);
}

function handleUserSort() {
    // 1. Grab all input boxes with the class 'numInput'
    let inputFields = document.querySelectorAll('.numInput');
    let userArray = [];

    // 2. Loop through each input box and push its value into our array
    for (let i = 0; i < inputFields.length; i++) {
        // Number() converts the text string from the input into an actual number
        userArray.push(Number(inputFields[i].value));
    }

    // 3. Sort using your trier() function
    let sorted = trier(userArray);

    // 4. Display it on the page
    document.getElementById('sortResult').innerText = "Sorted: " + sorted.join(', ');
}