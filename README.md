# Braille-Convert

## Overview

Braille-Convert is a project designed to convert text to Braille, making it accessible to visually impaired individuals. This repository includes a combination of several technologies to achieve seamless text-to-Braille conversion and display.

## Features

- **Text to Braille Conversion:** Converts standard text into Braille format.
- **User-Friendly Interface:** Utilizes React and Tailwind CSS for a responsive and accessible web interface.
- **PDF Support:** Converts PDF documents to text using mupdf and tesseract libraries.
- **Styling:** Employs Tailwind CSS and DaisyUI for modern and clean styling.

## Technologies Used

- **jspdf:** A lightweight PDF and XPS viewer.
- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **DaisyUI:** A Tailwind CSS component library.
- **PDF to Text Library:** Converts PDF documents to plain text.
- **Tesseract:** An OCR engine used to extract text from images and PDFs.

## Setup

### Prerequisites

- Node.js and npm installed on your machine.
- Basic understanding of JavaScript and React.

### Installation

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/VivekNeer/Braille-Convert.git
   cd Braille-Convert
   ```

2. **Install Dependencies:**

   ```sh
   npm install
   ```

3. **Run the Development Server:**

   ```sh
   npm start
   ```

4. **Build for Production:**

   ```sh
   npm run build
   ```

## Usage

1. **Text Conversion:**
   - Enter text into the input field on the web interface.
   - Click the "Convert to Braille" button to see the Braille representation.

2. **PDF Conversion:**
   - Upload a PDF document using the file upload feature.
   - The document will be processed and converted to text.
   - The text will then be converted to Braille and displayed.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new feature branch.
3. Make your changes.
4. Ensure all tests pass.
5. Commit your changes.
6. Push to your branch.
7. Open a pull request.
