const socket = new WebSocket('ws://localhost:8088/user');

socket.onopen = () => {
  console.log('WebSocket connection established.');
};

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  updateDashboard(data);
};

socket.onerror = (error) => {
  console.error('WebSocket error:', error);
};

socket.onclose = () => {
  console.log('WebSocket connection closed.');
};

function updateDashboard(data) {
  // Update chart with data
  //const chartElement = document.getElementById('chart');
  //chartElement.textContent = JSON.stringify(data);

  // Update data table with data
  const tableBody = document.querySelector('#data-table tbody');
  tableBody.innerHTML = '';

  for (const [key, value] of Object.entries(data)) {
    const row = document.createElement('tr');
    const dataPointCell = document.createElement('td');
    const valueCell = document.createElement('td');

    dataPointCell.textContent = key;
    valueCell.textContent = value;

    row.appendChild(dataPointCell);
    row.appendChild(valueCell);
    tableBody.appendChild(row);
  }
}

// Example of sending data to the server
const dataToSend = {
  temperature: 25,
  humidity: 60,
  pressure: 1013.25
};

//socket.send(JSON.stringify(dataToSend));
