document.addEventListener("DOMContentLoaded", () => {
  updateGradient();
  updateFont();
  updateOutput();
});

function updateFont() {
  const fontSelect = document.getElementById('fontSelect');
  const outputBox = document.getElementById('outputBox');
  outputBox.style.fontFamily = fontSelect.value;
}

function updateGradient() {
  const gradientSelect = document.getElementById('gradientSelect');
  const outputBox = document.getElementById('outputBox');
  outputBox.style.background = gradientSelect.value;
}

function updateOutput() {
  const inputBox = document.getElementById('inputBox');
  const outputBox = document.getElementById('outputBox');
  outputBox.textContent = inputBox.value;
}

function previewOutput() {
  const content = document.getElementById('outputBox').innerHTML;
  const font = document.getElementById('fontSelect').value;
  const background = getComputedStyle(document.getElementById('outputBox')).backgroundImage;

  const iframe = document.getElementById('printFrame');
  const doc = iframe.contentWindow.document;

  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Print Journal Entry</title>
      <link href="styles.css" rel="stylesheet">
    </head>
    <body>
      <div id="printOutput" style="font-family: ${font}; background: ${background};">${content}</div>
      <button onclick="window.print()">Print</button>
    </body>
    </html>
  `);
  doc.close();

  iframe.style.display = 'block';
}

