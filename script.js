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