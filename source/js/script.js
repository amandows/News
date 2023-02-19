// // Получаем ссылку на контейнер новостей
// const newsContainer = document.querySelector('.news-container');
// var query = '';
// // Функция для получения и отображения новостей
// var apiKey = '8f29e197997d45379ad115dbf0dedfc8';
// // URL для получения новостей
// const newsApiUrl = 'https://newsapi.org/v2/everything?q=' + encodeURIComponent(query) + '&apiKey=' + apiKey;
// async function getNews() {
//     try {
//     // Получаем новости из API
//     const response = await fetch(newsApiUrl);
//     const data = await response.json();
//     const articles = data.articles;
//     articles.sort(() => Math.random() - 0.5);
//     // Очищаем контейнер новостей перед вставкой новых
//     newsContainer.innerHTML = '';

//     // Добавляем каждую новость в контейнер
//     articles.forEach(article => {
//         const newsHtml = `
//         <div class="news">
//             <div class="news-img">
//                 <img src="${article.urlToImage}" alt="${article.title}">
//             </div>
//             <div class="news-title">
//                 <h3>${article.title}</h3>
//             </div>
//             <div class="news-description">
//                 <p>${article.description}</p>
//             </div>
//             <div class="news-original-link">
//                 <a href="${article.url}">Read More</a>
//             </div>
//         </div>
//     `;
//       // Добавляем HTML для новости в контейнер
//     newsContainer.insertAdjacentHTML('beforeend', newsHtml);
//     });
//     } catch (error) {
//     // Обработка ошибок получения данных
//     console.error(error);
//     }
// }

// // Вызываем функцию для получения и отображения новосте
// let submitBtn = document.querySelector('.btn');
// let inputTheme = document.querySelector('.theme')

const newsContainer = document.querySelector('.news-container');
var query = '';
// Функция для получения и отображения новостей
var apiKey = '8f29e197997d45379ad115dbf0dedfc8';
// URL для получения новостей
const newsApiUrl = 'https://newsapi.org/v2/everything?q=' + encodeURIComponent(query) + '&apiKey=' + apiKey;

// Получаем ссылки на поля ввода и кнопку
const inputTheme = document.querySelector('.theme');
const searchBtn = document.querySelector('.btn');

// Добавляем событие click для кнопки
searchBtn.addEventListener('click', () => {
  // Записываем значение из поля ввода в переменную query
    query = inputTheme.value;

  // Вызываем функцию для получения и отображения новостей
    getNews();
});

async function getNews() {
    try {
    // Обновляем URL для получения новостей с использованием значения из переменной query
    const updatedNewsApiUrl = 'https://newsapi.org/v2/everything?q=' + encodeURIComponent(query) + '&apiKey=' + apiKey;

    // Получаем новости из API
    const response = await fetch(updatedNewsApiUrl);
    const data = await response.json();
    const articles = data.articles;
    articles.sort(() => Math.random() - 0.5);
    // Очищаем контейнер новостей перед вставкой новых
    newsContainer.innerHTML = '';

    // Добавляем каждую новость в контейнер
    articles.forEach(article => {
        const newsHtml = `
        <div class="news">
            <div class="news-img">
                <img src="${article.urlToImage}" alt="${article.title}">
            </div>
            <div class="news-title">
                <h3>${article.title}</h3>
            </div>
            <div class="news-description">
                <p>${article.description}</p>
            </div>
            <div class="news-original-link">
                <a href="${article.url}">Read More</a>
            </div>
        </div>
    `;
      // Добавляем HTML для новости в контейнер
    newsContainer.insertAdjacentHTML('beforeend', newsHtml);
    });
    } catch (error) {
    // Обработка ошибок получения данных
    console.error(error);
    }
}

