$(document).ready(function() {
    // Инициализируем переменные с дефолтными значениями
    window.country = "loading";
    window.userPath = window.userPath || 'error'; // Пример инициализации

    // Получаем информацию о стране
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        window.country = data.country_name || "unknown";
      })
      .catch(error => {
        console.error("Ошибка при получении страны:", error);
        window.country = "error";
      });

    // Обработка отправки формы
    $(document).on('submit', 'form', function(event) {
        event.preventDefault();

        let lang = navigator.language || navigator.userLanguage || "unknown";
        let data = $(this).serialize() + 
                   '&lang=' + encodeURIComponent(lang) + 
                   '&country=' + encodeURIComponent(window.country) + 
                   '&path=' + encodeURIComponent(window.userPath);

        $.ajax({
            type: "POST",
            url: '/send.php',
            data: data,
            success: function(result) {
                window.show_popup('thank-you');
            },
            error: function(xhr, status, error) {
                alert("FORM Error, please contact us via email hello@artydevs.com or try again :(");
            }
        });
    });
});
