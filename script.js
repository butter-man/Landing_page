// Функция для проверки видимости элемента в окне просмотра
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Функция для плавного появления элементов при прокрутке
function fadeInElementsOnScroll() {
  var elements = document.querySelectorAll('.page-margin-top-section');

  elements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('fade-in');
    }
  });
}

// Добавляем обработчик события прокрутки страницы
window.addEventListener('scroll', fadeInElementsOnScroll);

// Вызываем функцию сразу после загрузки страницы, чтобы проверить видимость элементов
fadeInElementsOnScroll();