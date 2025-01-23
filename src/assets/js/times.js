document.addEventListener("DOMContentLoaded", function() {
  function formatTime(date) {
    return date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  }

  function updateTime() {
    // Получение текущего времени для каждой зоны
    let londonTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
    let kyivTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Kiev"});
    let cetTime = new Date().toLocaleString("en-US", {timeZone: "CET"});

    // Преобразование строк в объекты Date
    londonTime = new Date(londonTime);
    kyivTime = new Date(kyivTime);
    cetTime = new Date(cetTime);


    // document.getElementById('time-london').textContent = formatTime(londonTime);
    document.getElementById('time-kyiv').textContent = formatTime(kyivTime);
    document.getElementById('time-est').textContent = formatTime(cetTime);
  }

  setInterval(updateTime, 60000); // Запуск функции каждую минуту
  updateTime(); // Первый вызов функции для инициализации времени сразу после загрузки
});
