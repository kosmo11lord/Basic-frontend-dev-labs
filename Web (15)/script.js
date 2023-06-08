function setAsBackground(imageElement) {
  document.body.style.backgroundImage = `url('${imageElement.src}')`;
}

// Выбираем все изображения на странице
const images = document.querySelectorAll('.image')

// Добавляем обработчик события "клик" к каждому изображению
images.forEach(image => {
  image.addEventListener('click', clickHandler)
})

// Создаем функцию clickHandler для обработки событий "клик"
function clickHandler(event) {
  const image = event.target
  // Убираем класс "active" у предыдущего увеличенного изображения
  const activeImage = document.querySelector('.active')
  if (activeImage) activeImage.classList.remove('active')

  // Устанавливаем текущее изображение как активное
  image.classList.add('active')

    // Задаем выбранное изображение как фоновое изображение
    setAsBackground(image)
}


