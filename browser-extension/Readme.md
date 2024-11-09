# Speech Synthesis Content Script for Browser Extension

## Overview

This project is a content script for a browser extension that utilizes the SpeechSynthesis API to speak the text of HTML elements when the user hovers over them. The script is designed to handle various headings (`h1` to `h6`), paragraphs (`p`), and div elements with the class `text-container`.

## Features

- Speaks the text of HTML elements (`h1` to `h6`, `p`, `div.text-container`) on mouseover.
- Handles image alt text for `img` elements.
- Stops the previous speech synthesis event and starts a new one immediately when a new element is hovered over.

## Setup

### Prerequisites

- A basic understanding of JavaScript and the SpeechSynthesis API.
- A browser extension development environment.

### Installation

1. **Create a new browser extension project:**

   - Create a new directory for your project.
   - Inside the directory, create the following files:
     - `manifest.json`
     - `contentscript.js`

2. **Manifest File (`manifest.json`):**

   ```json
   {
     "manifest_version": 3,
     "name": "Speech Synthesis Content Script",
     "version": "1.0",
     "description": "Speaks the text of HTML elements on mouseover using the SpeechSynthesis API.",
     "permissions": [
       "activeTab"
     ],
     "content_scripts": [
       {
         "matches": ["<all_urls>"],
         "js": ["contentscript.js"]
       }
     ]
   }
   ```

3. **Content Script (`contentscript.js`):**

   ```javascript
   // Function to speak the text using SpeechSynthesis API
   function speak(text) {
       const speech = new SpeechSynthesisUtterance(text);
       speech.lang = 'en-US'; // Language of speech
       speech.pitch = 1;      // Pitch of speech
       speech.rate = 1;       // Rate of speech
       window.speechSynthesis.speak(speech);
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
   document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, div.text-container").forEach((element) => {
       element.addEventListener("mouseover", handleMouseOver);
   });
   ```

4. **Load the extension into your browser:**

   - Open your browser's extension management page (e.g., `chrome://extensions/` for Chrome).
   - Enable "Developer mode" if it is not already enabled.
   - Click on "Load unpacked" and select your project directory.

## Usage

- Navigate to any webpage.
- Hover over any `h1` to `h6`, `p`, or `div.text-container` element.
- The text of the element will be spoken aloud using the SpeechSynthesis API.

## Notes

- The script cancels any ongoing speech synthesis when a new element is hovered over.
- The speech language is set to `en-US`, and the pitch and rate are set to default values. You can modify these settings as needed.

## Contributing

Feel free to fork this project and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.
