if (document.querySelector('.calc')) {
  function updateSlider(sliderId, displayId, resultId, formula) {
    const slider = document.getElementById(sliderId);
    const display = document.getElementById(displayId);
    const result = document.getElementById(resultId);

    function update() {
      const currencySymbol = display.getAttribute('data-symbol') || '';
      display.textContent = `${currencySymbol}${slider.value}`;
      const progress = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
      slider.style.setProperty('--slider-progress', `${progress}%`);

      if (formula) {
        const sliders = formula.sliders.map(id => document.getElementById(id));
        const values = sliders.map(slider => parseFloat(slider.value));

        const computedValue = formula.calculate(...values);
        result.textContent = `$${Math.round(computedValue)}`;
      }
    }

    slider.addEventListener('input', update);
    update();
  }

  // Общая формула для первого калькулятора
  const formula1 = {
    sliders: ['slider1', 'slider2', 'slider3'],
    calculate: (slider1, slider2, slider3) =>
      (slider1 - 25) * slider2 + (slider1 * slider2 * slider3 / 100),
  };

  // Новый калькулятор с отдельной формулой
  const formula2 = {
    sliders: ['slider2_1', 'slider2_2'],
    calculate: (slider1, slider2) =>
      (slider1 - 25 ) * slider2,
  };

    const formula3 = {
    sliders: ['slider3_1', 'slider3_2'],
    calculate: (slider1, slider2) =>
      (slider1 - 25 ) * slider2,
  };



  // Конфигурации для первого калькулятора
  const slider1Configs = [
    { sliderId: 'slider1', displayId: 'display1', resultId: 'result', formula: { ...formula1, calculate: (s1, s2, s3) => formula1.calculate(s1, s2, s3) * 12 } },
    { sliderId: 'slider2', displayId: 'display2', resultId: 'result', formula: { ...formula1, calculate: (s1, s2, s3) => formula1.calculate(s1, s2, s3) * 12 } },
    { sliderId: 'slider3', displayId: 'display3', resultId: 'result', formula: { ...formula1, calculate: (s1, s2, s3) => formula1.calculate(s1, s2, s3) * 12 } },
    { sliderId: 'slider1', displayId: 'display1', resultId: 'result2', formula: formula1 },
    { sliderId: 'slider2', displayId: 'display2', resultId: 'result2', formula: formula1 },
    { sliderId: 'slider3', displayId: 'display3', resultId: 'result2', formula: formula1 },
  ];

  // Конфигурации для нового калькулятора
  const slide2Configs = [
    { sliderId: 'slider2_1', displayId: 'display2_1', resultId: 'result2_1', formula: { ...formula2, calculate: (s1, s2) => formula2.calculate(s1, s2) * 12 } },
    { sliderId: 'slider2_2', displayId: 'display2_2', resultId: 'result2_1', formula: { ...formula2, calculate: (s1, s2) => formula2.calculate(s1, s2) * 12 } },
    { sliderId: 'slider2_2', displayId: 'display2_2', resultId: 'result2_2', formula: formula2 },
    { sliderId: 'slider2_1', displayId: 'display2_1', resultId: 'result2_2', formula: formula2 },
  ];



  // Конфигурации для нового калькулятора
  const slide3Configs = [
    { sliderId: 'slider3_1', displayId: 'display3_1', resultId: 'result3_1', formula: { ...formula3, calculate: (s1, s2) => formula3.calculate(s1, s2) * 12 } },
    { sliderId: 'slider3_2', displayId: 'display3_2', resultId: 'result3_1', formula: { ...formula3, calculate: (s1, s2) => formula3.calculate(s1, s2) * 12 } },
    { sliderId: 'slider3_2', displayId: 'display3_2', resultId: 'result3_2', formula: formula3 },
    { sliderId: 'slider3_1', displayId: 'display3_1', resultId: 'result3_2', formula: formula3 },
  ];





  // Инициализация слайдеров первого калькулятора
  slider1Configs.forEach(config => {
    updateSlider(config.sliderId, config.displayId, config.resultId, config.formula);
  });

  // Инициализация слайдеров второго калькулятора
  slide2Configs.forEach(config => {
    updateSlider(config.sliderId, config.displayId, config.resultId, config.formula);
  });

  // Инициализация слайдеров второго калькулятора
  slide3Configs.forEach(config => {
    updateSlider(config.sliderId, config.displayId, config.resultId, config.formula);
  });
}
