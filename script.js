function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function generatePrediction() {
    const randomValue = getRandomNumber(1, 5);
    let prediction = '';
    
    switch (randomValue) {
      case 1:
        prediction = "Скоро вы отправитесь в поездку!";
        break;
      case 2:
        prediction = "Будет новое приятное знакомство!";
        break;
      case 3:
        prediction = "Сегодня чаще смотри по сторонам, рядом кое-что интересное!";
        break;
      case 4:
        prediction = "Не отказывай себе в отдыхе, он обещает быть незабываемым!";
        break;
      case 5:
        prediction = "Улыбайся! Кто-то может влюбиться в твою улыбку!";
        break;
    }
  
    const probability = getRandomNumber(0, 100) + '%';

    document.querySelector('.current-forecast h1').textContent = prediction;
    document.querySelector('.current-forecast p').textContent = `Вероятность сбывания: ${probability}`;
    
    const result = { prediction: prediction, probability: probability };

    return result;
  } 

  const forecastItemTemplate = document.querySelector('#forecast-item'); 

    function makeForecastByTemplate(prediction, probability) {
        const newForecastItem = forecastItemTemplate.content.cloneNode(true);

        newForecastItem.querySelector('h3').textContent = prediction;
        newForecastItem.querySelector('p').textContent = `Вероятность сбывания: ${probability}`;

        return newForecastItem;
    }

  document.querySelector('.forecast-btn').addEventListener('click', () => {
    const { prediction: prediction, probability: probability } = generatePrediction();
  
    const newForecastItem = makeForecastByTemplate(prediction, probability);

    const forecastsList = document.querySelector('.forecasts'); 
    forecastsList.prepend(newForecastItem); 
});
  
/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
