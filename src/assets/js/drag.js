document.querySelectorAll('.drag').forEach((dragContainer) => {
  const dragController = dragContainer.querySelector('.drag__controller');
  const secondImage = dragContainer.querySelector('.drag__item--second');
  
  let isDragging = false;


  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const containerRect = dragContainer.getBoundingClientRect();
    const offset = e.clientX - containerRect.left;
    const percentage = Math.min(Math.max(offset / containerRect.width, 0), 1) * 100;

    
    dragController.style.left = `${percentage}%`;
    secondImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;

  });


  // CURSOR

  dragController.addEventListener('mousedown', () => {
    isDragging = true;
    document.body.style.cursor = 'grabbing';
  });


  document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.cursor = 'default';
  });


});





