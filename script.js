// JavaScript to handle the form submission
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the value of the message field
    const messageField = document.getElementById('message');
    const message = messageField.value.trim();

    // Check if the message contains the specified pattern
    if (message === "696-6969696_69") {
        // Display the alert message if the pattern is found
        alert("You just found my phone number!");
        // Redirect the user to the home page (index.html)
        window.location.href = "index.html";
    } else {
        // Perform form submission if the pattern is not found
        this.submit();
    }
});

// JavaScript to handle the form submission
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the value of the message field
    const messageField = document.getElementById('message');
    let message = messageField.value.trim();

    // Check if the message exceeds 160 characters
    if (message.length > 160) {
        // Cut the message to 160 characters
        message = message.slice(0, 160);
    }

    // Set the truncated message back to the message field
    messageField.value = message;

    // Perform form submission
    this.submit();
});

// JavaScript to handle the form submission and character counting
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the value of the message field
    const messageField = document.getElementById('message');
    let message = messageField.value.trim();

    // Check if the message exceeds 160 characters
    if (message.length > 160) {
        // Cut the message to 160 characters
        message = message.slice(0, 160);
    }

    // Set the truncated message back to the message field
    messageField.value = message;

    // Perform form submission
    this.submit();
});

// Character counting functionality
document.getElementById('message').addEventListener('input', function () {
    const messageLength = this.value.length;
    const maxCharacters = 160;
    const charCountElement = document.getElementById('char-count');
    charCountElement.textContent = `${messageLength} / ${maxCharacters} characters`;
});
