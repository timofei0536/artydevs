document.querySelectorAll('.drag').forEach((dragContainer) => {
  const dragController = dragContainer.querySelector('.drag__controller');
  const secondImage = dragContainer.querySelector('.drag__item--second');
  
  let isDragging = false;

  // Общая функция для обработки перемещения
  function handleMove(clientX) {
    if (!isDragging) return;

    const containerRect = dragContainer.getBoundingClientRect();
    const offset = clientX - containerRect.left;
    const percentage = Math.min(Math.max(offset / containerRect.width, 0), 1) * 100;

    dragController.style.left = `${percentage}%`;
    secondImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
  }

  // Обработчики для мыши
  document.addEventListener('mousemove', (e) => {
    handleMove(e.clientX);
  });

  dragController.addEventListener('mousedown', () => {
    isDragging = true;
    document.body.style.cursor = 'grabbing';
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.cursor = 'default';
  });

  // Обработчики для касаний
  document.addEventListener('touchmove', (e) => {
    // Если несколько касаний — берем первое
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, { passive: false }); // Добавляем { passive: false }, чтобы можно было вызвать e.preventDefault() при необходимости

  dragController.addEventListener('touchstart', (e) => {
    isDragging = true;
    // Предотвращаем нежелательные действия (например, скроллинг)
    e.preventDefault();
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
    document.body.style.cursor = 'default';
  });
});
