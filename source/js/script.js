// Получаем ссылку на контейнер новостей
const newsContainer = document.querySelector('.news-container');
var query = '';
// Функция для получения и отображения новостей
var apiKey = '8f29e197997d45379ad115dbf0dedfc8';
// URL для получения новостей
const newsApiUrl = 'https://newsapi.org/v2/everything?q=' + encodeURIComponent(query) + '&apiKey=' + apiKey;
async function getNews() {
    try {
    // Получаем новости из API
    const response = await fetch(newsApiUrl);
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



  // Загружаем JSON-файл и распарсиваем его в объект JavaScript
fetch('https://raw.githubusercontent.com/amandows/News/7a20a55284e1cda1ebf05be3b8c3092bf719c981/source/js/object.json')
.then(response => response.json())
.then(data => {
  // Получаем доступ к элементу в HTML, куда будут добавляться новости
  const newsContainer = document.querySelector('.news-container');
  const articles = data.articles;
  articles.sort(() => Math.random() - 0.5);

  newsContainer.innerHTML = '';

  // Для каждой статьи в массиве articles создаем HTML-элемент новости
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
})
.catch(error => console.error(error));