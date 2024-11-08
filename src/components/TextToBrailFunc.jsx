import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import TwoButtons from './TwoButtons';

const brailleMap = {
  a: '⠁', b: '⠃', c: '⠉', d: '⠙', e: '⠑', f: '⠋', g: '⠛', h: '⠓', i: '⠊', j: '⠚',
  k: '⠅', l: '⠇', m: '⠍', n: '⠝', o: '⠕', p: '⠏', q: '⠟', r: '⠗', s: '⠎', t: '⠞',
  u: '⠥', v: '⠧', w: '⠺', x: '⠭', y: '⠽', z: '⠵',
  '1': '⠁', '2': '⠃', '3': '⠉', '4': '⠙', '5': '⠑', '6': '⠋', '7': '⠛', '8': '⠓', '9': '⠊', '0': '⠚',
};
const NUMBER_INDICATOR = '⠼';
const LETTER_INDICATOR = '⠰';

function toBraille(text) {
  let result = '';
  let isPrevCharNumber = false;
  for (const char of text) {
    if (/\d/.test(char)) {
      if (!isPrevCharNumber) {
        result += NUMBER_INDICATOR;
        isPrevCharNumber = true;
      }
      result += brailleMap[char];
    } else if (/[a-zA-Z]/.test(char)) {
      if (isPrevCharNumber) {
        result += LETTER_INDICATOR;
        isPrevCharNumber = false;
      }
      result += brailleMap[char.toLowerCase()];
    } else {
      result += char;
      isPrevCharNumber = false;
    }
  }
  return result;
}

const TextToBrail = ({ downloadPDF }) => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [brailleFontBase64, setBrailleFontBase64] = useState('');

  useEffect(() => {
    fetch('/braille-font-base64.txt')
      .then(response => response.text())
      .then(data => setBrailleFontBase64(data))
      .catch(error => console.error('Error loading font:', error));
  }, []);

  const handleChange = (e) => {
    const inputText = e.target.value;
    setInputValue(inputText);
    setOutputValue(toBraille(inputText));
  };

  const handleDownloadPDF = () => {
    if (!brailleFontBase64) {
      alert('Braille font not loaded');
      return;
    }

    const doc = new jsPDF();
    doc.addFileToVFS('braille.ttf', brailleFontBase64);
    doc.addFont('braille.ttf', 'braille', 'normal');
    doc.setFont('braille', 'normal');
    doc.setFontSize(14);

    const lines = doc.splitTextToSize(outputValue, 180);
    doc.text(lines, 10, 10);

    doc.save('braille_output.pdf');
  };

  return (
    <>
      <div className="flex justify-center items-center w-full gap-10 my-8">
        <div className="text-center">
          <article className="prose mb-4">
            <h2 className="text-xl font-semibold">Text</h2>
          </article>
          <textarea
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter text to convert to Braille"
            rows={10}
            cols={50}
            className="textarea textarea-bordered w-full max-w-lg text-center resize-none mb-4"
          />
        </div>
        <div className="text-center">
          <article className="prose mb-4">
            <h2 className="text-xl font-semibold">Braille Output</h2>
          </article>
          <textarea
            value={outputValue}
            readOnly
            className="textarea textarea-bordered w-full max-w-lg text-center resize-none mb-4"
          />
        </div>
      </div>
      <TwoButtons downloadPDF={handleDownloadPDF} />
    </>
  );
};

export default TextToBrail;