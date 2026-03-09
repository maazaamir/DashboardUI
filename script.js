const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");
menuBtn.onclick = () => sidebar.classList.toggle("collapsed");

const toggle = document.getElementById("themeToggle");
toggle.onclick = () => document.body.classList.toggle("dark");

const ctx = document.getElementById('salesChart');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [{
      label: 'Sales',
      data: [1200,1900,3000,2500,4200,3800],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59,130,246,0.2)',
      tension:0.4
    }]
  }
});

const userCtx = document.getElementById('userChart');
new Chart(userCtx, {
  type: 'bar',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [{
      label: 'Users',
      data: [400,800,1200,1600,2000,2500],
      backgroundColor:'#10b981'
    }]
  }
});