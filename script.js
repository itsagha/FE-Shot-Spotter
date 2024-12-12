// function buat jam & tanggal di Schedule Page
function updateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    
    const now = new Date();

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const formattedDate = `${dayName}, ${day} ${month} ${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
}

setInterval(updateTime, 1000);
updateTime();

// :${seconds}