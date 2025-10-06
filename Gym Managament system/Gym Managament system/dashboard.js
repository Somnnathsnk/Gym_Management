// Chart.js Analytics
const ctx = document.getElementById('analyticsChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Visitors',
      data: [120, 190, 300, 250, 420],
      borderColor: '#4a90e2',
      tension: 0.3,
      fill: false
    }]
  }
});

// Task List
function addTask() {
  const input = document.getElementById("newTaskInput");
  const value = input.value.trim();
  if (value) {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox"> ${value}`;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}

// Dark Mode
document.getElementById("darkModeToggle").addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.style.background = "#2c3e50";
    document.querySelector(".main").style.background = "#34495e";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "";
    document.querySelector(".main").style.background = "#f4f6f9";
    document.body.style.color = "black";
  }
});

// Simple Calendar
function loadCalendar() {
  const today = new Date();
  const calendarBox = document.getElementById("calendar-box");
  calendarBox.innerHTML = `<h3>${today.toLocaleString('default', { month: 'long' })} ${today.getFullYear()}</h3>`;
  for (let i = 1; i <= 30; i++) {
    const div = document.createElement("div");
    div.textContent = i;
    div.style.display = "inline-block";
    div.style.width = "40px";
    div.style.textAlign = "center";
    div.style.margin = "2px";
    div.style.padding = "5px";
    div.style.borderRadius = "4px";
    div.style.cursor = "pointer";
    if (i === today.getDate()) {
      div.style.background = "#4a90e2";
      div.style.color = "white";
    }
    calendarBox.appendChild(div);
  }
}
loadCalendar();
