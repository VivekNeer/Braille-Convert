// Function to speak the text using SpeechSynthesis API
function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US'; // Language of speech
    speech.pitch = 1;      // Pitch of speech
    speech.rate = 1;       // Rate of speech
    window.speechSynthesis.speak(speech);
}

// Function to add or replace event listener
function addOrReplaceEventListener(selector, event, callback) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
        element.removeEventListener(event, callback);
        element.addEventListener(event, callback);
    });
}

// Function to handle mouseover event
function handleMouseOver(event) {
    if (event.target.tagName === "IMG") {
        speak(event.target.alt); // Speak image alt text
    } else {
        speak(event.target.innerText); // Speak inner text
    }
}

// Add or replace event listener for mouseover
addOrReplaceEventListener("h1, h2, h3, h4, h5, h6, p, div.text-container, button", "mouseover", handleMouseOver);

// Flag to track if an event is currently being processed
let isProcessingEvent = false;

// Function to stop the current event if any
function stopCurrentEvent() {
    if (isProcessingEvent) {
        window.speechSynthesis.cancel(); // Cancel the current speech synthesis
        isProcessingEvent = false; // Reset the flag
    }
}

// Add event listener to detect mouseover on certain elements
document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, div.text-container").forEach((element) => {
    element.addEventListener("mouseover", (event) => {
        stopCurrentEvent(); // Stop the current event
        isProcessingEvent = true; // Set the flag

        handleMouseOver(event); // Start the new event
    });
});