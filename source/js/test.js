let sportCheck = document.querySelector('.chekbox-sport')
let policyCheck = document.querySelector('.chekbox-policy')
let foodCheck = document.querySelector('.chekbox-food')
let tehnologyCheck = document.querySelector('.chekbox-tehnology')
let scienceCheck = document.querySelector('.chekbox-science')
let fashionCheck = document.querySelector('.chekbox-fashion')
let itCheck = document.querySelector('.chekbox-it')
let allCheck = document.querySelector('.chekbox-all')
let applyFilter = document.querySelector('.apply-filter')
 
const urlArr = [
    'https://raw.githubusercontent.com/amandows/Gitpush/0d2e52a4bb19d615415ecc0cbcc4a1b130b6b11d/sport.json', 
    'https://raw.githubusercontent.com/amandows/Gitpush/0d2e52a4bb19d615415ecc0cbcc4a1b130b6b11d/policy.json', 
    'https://raw.githubusercontent.com/amandows/Gitpush/0d2e52a4bb19d615415ecc0cbcc4a1b130b6b11d/food.json', 
    'https://raw.githubusercontent.com/amandows/Gitpush/0d2e52a4bb19d615415ecc0cbcc4a1b130b6b11d/tehnology.json', 
    'https://raw.githubusercontent.com/amandows/Gitpush/0d2e52a4bb19d615415ecc0cbcc4a1b130b6b11d/since.json', 
    'https://raw.githubusercontent.com/amandows/Gitpush/0d2e52a4bb19d615415ecc0cbcc4a1b130b6b11d/fashion.json', 
    'https://raw.githubusercontent.com/amandows/Gitpush/0d2e52a4bb19d615415ecc0cbcc4a1b130b6b11d/it.json',
]

let sport = urlArr[0]
let policy = urlArr[1]
let food = urlArr[2]
let tehnology = urlArr[3]
let science = urlArr[4]
let fashion = urlArr[5]
let it = urlArr[6]
let all = urlArr[7]

console.log(sport)
 
function getNews(url) {
    return fetch(url)
      .then(response => response.json())
      .then(data => data.articles);
}
  
  const allNewsPromises = urlArr.map(url => getNews(url));
  Promise.all(allNewsPromises)
    .then(newsArrays => {
      // Объединяем все массивы новостей в один массив
      const allNews = [].concat(...newsArrays);
      // Сортируем массив случайным образом
      allNews.sort(() => Math.random() - 0.5);
      // Отображаем новости на странице
      renderNews(allNews);
    })
    .catch(error => console.error(error));
  



function renderNews(news) {
    const newsContainer = document.querySelector('.news-container');
    newsContainer.innerHTML = '';
    news.forEach(article => {
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
            <a href="${article.url}">Читать полностью</a>
          </div>
        </div>
      `;
      newsContainer.insertAdjacentHTML('beforeend', newsHtml);
    });
}

applyFilter.addEventListener('click', () => {
    const selectedCategories = []
    if (sportCheck.checked) {
      selectedCategories.push(sport)
    }
    if (policyCheck.checked) {
      selectedCategories.push(policy)
    }
    if (foodCheck.checked) {
      selectedCategories.push(food)
    }
    if (tehnologyCheck.checked) {
      selectedCategories.push(tehnology)
    }
    if (scienceCheck.checked) {
      selectedCategories.push(science)
    }
    if (fashionCheck.checked) {
      selectedCategories.push(fashion)
    }
    if (itCheck.checked) {
      selectedCategories.push(it)
    }
    if (allCheck.checked) {
      selectedCategories.push(...urlArr)
    }
  
    const newsContainer = document.querySelector('.news-container')
    newsContainer.innerHTML = ''
  
    Promise.all(selectedCategories.map(category => fetch(category).then(response => response.json())))
      .then((results) => {
        const allNews = results.flatMap(result => result.articles)
        allNews.sort(() => Math.random() - 0.5);
  
        allNews.forEach((news) => {
          const newsDiv = document.createElement('div')
          newsDiv.classList.add('news')
          newsContainer.appendChild(newsDiv)
  
          const newsImgDiv = document.createElement('div')
          newsImgDiv.classList.add('news-img')
          const newsImg = document.createElement('img')
          newsImg.setAttribute('src', news.urlToImage)
          newsImg.setAttribute('alt', news.title)
          newsImgDiv.appendChild(newsImg)
          newsDiv.appendChild(newsImgDiv)
  
          const newsTitleDiv = document.createElement('div')
          newsTitleDiv.classList.add('news-title')
          const newsTitle = document.createElement('h3')
          newsTitle.textContent = news.title
          newsTitleDiv.appendChild(newsTitle)
          newsDiv.appendChild(newsTitleDiv)
  
          const newsDescriptionDiv = document.createElement('div')
          newsDescriptionDiv.classList.add('news-description')
          const newsDescription = document.createElement('p')
          newsDescription.textContent = news.description
          newsDescriptionDiv.appendChild(newsDescription)
          newsDiv.appendChild(newsDescriptionDiv)
  
          const newsOriginalLinkDiv = document.createElement('div')
          newsOriginalLinkDiv.classList.add('news-original-link')
          const newsOriginalLink = document.createElement('a')
          newsOriginalLink.setAttribute('href', news.url)
          newsOriginalLink.textContent = 'Link'
          newsOriginalLinkDiv.appendChild(newsOriginalLink)
          newsDiv.appendChild(newsOriginalLinkDiv)
        })
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  })
  

  