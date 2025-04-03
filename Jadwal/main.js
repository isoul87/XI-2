// Fitur Filter Hari
document.addEventListener('DOMContentLoaded', function () {
    const dayFilter = document.getElementById('day-filter');
    const scheduleRows = document.querySelectorAll('.schedule-table tbody tr');
  
    dayFilter.addEventListener('change', function () {
      const selectedDay = dayFilter.value;
  
      scheduleRows.forEach(row => {
        const rowDay = row.getAttribute('data-day');
        if (selectedDay === 'all' || rowDay === selectedDay) {
          row.style.display = 'table-row';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
  
  // Fitur Deskripsi Jadwal
  document.addEventListener('DOMContentLoaded', function () {
    const scheduleRows = document.querySelectorAll('.schedule-table tbody tr');
    const scheduleDetail = document.getElementById('schedule-detail');
  
    scheduleRows.forEach(row => {
      row.addEventListener('click', function () {
        const day = row.cells[0].textContent;
        const time = row.cells[1].textContent;
        const subject = row.cells[2].textContent;
        const teacher = row.cells[3].textContent;
  
        scheduleDetail.innerHTML = `
          <h3>${subject}</h3>
          <p><strong>Hari:</strong> ${day}</p>
          <p><strong>Jam:</strong> ${time}</p>
          <p><strong>Guru:</strong> ${teacher}</p>
          <p><strong>Durasi:</strong> 1 jam 30 menit</p>
        `;
        scheduleDetail.classList.add('active');
      });
    });
  });
  
  // Fitur Export PDF (Menggunakan library jsPDF)
  document.getElementById('export-pdf').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    doc.text("Jadwal Pelajaran Kelas XI", 10, 10);
    doc.autoTable({
      html: '.schedule-table table',
      startY: 20,
    });
    doc.save('jadwal-kelas-xi.pdf');
  });
  
  // Fitur Ingatkan di Google Calendar
  document.getElementById('reminder').addEventListener('click', function () {
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Jadwal%20Pelajaran%20Kelas%20XI&details=Lihat%20jadwal%20lengkap%20di%20[URL_WEBSITE]`;
    window.open(calendarUrl, '_blank');
  });