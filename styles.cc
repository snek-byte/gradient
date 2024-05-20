body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

.controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

label {
  margin-right: 10px;
}

select {
  margin-right: 20px;
}

textarea {
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
}

#outputBox {
  padding: 20px;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  font-size: 16px;
  height: 800px;
  overflow: hidden;
  margin-bottom: 20px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007BFF;
  color: #fff;
  border: none;
}

#printOutput {
  padding: 20px;
  font-size: 16px;
  height: 100vh;
  box-sizing: border-box;
  -webkit-print-color-adjust: exact;
}

@media print {
  button {
    display: none;
  }
}

