// User Growth Chart (Line)
const ctx1 = document.getElementById('userGrowthChart').getContext('2d');
new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Users',
      data: [500, 800, 1200, 1600, 2000, 2300, 2500],
      borderColor: '#007bff',
      backgroundColor: 'rgba(0, 123, 255, 0.2)',
      fill: true,
      tension: 0.3
    }]
  },
  options: { responsive: true }
});

// Revenue Chart (Bar)
const ctx2 = document.getElementById('revenueChart').getContext('2d');
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Revenue ($)',
      data: [1200, 1500, 1800, 2000, 1700, 2200, 2600],
      backgroundColor: '#4a90e2'
    }]
  },
  options: { responsive: true }
});

// Device Chart (Pie)
const ctx3 = document.getElementById('deviceChart').getContext('2d');
new Chart(ctx3, {
  type: 'pie',
  data: {
    labels: ['Mobile', 'Desktop', 'Tablet'],
    datasets: [{
      label: 'Sessions',
      data: [60, 30, 10],
      backgroundColor: ['#007bff', '#28a745', '#ffc107']
    }]
  },
  options: { responsive: true }
});
// Top Pages Chart (Doughnut)
const ctx4 = document.getElementById('topPagesChart').getContext('2d');
new Chart(ctx4, {
  type: 'doughnut',
  data: {
    labels: ['Homepage', 'About Us', 'Services', 'Contact'],
    datasets: [{
      label: 'Page Views',
      data: [300, 150, 200, 100],
      backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545']
    }]
  },
  options: { responsive: true }
});