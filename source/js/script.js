

let tech = document.querySelector('.chekbox-sport')
let polit = document.querySelector('.chekbox-polit')


let url = 'https://raw.githubusercontent.com/amandows/Gitpush/8cb7136906624b7380b686571f116cb647a5dd71/polit.json'
let url2 = 'https://raw.githubusercontent.com/amandows/Gitpush/9390c6c841041c134b9342d20dad462a001049a0/tech.json'

fetch(url2)
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
                    <a href="${article.url}">Читать полностью</a>
                </div>
            </div>
            `;
    // Добавляем HTML для новости в контейнер
            newsContainer.insertAdjacentHTML('beforeend', newsHtml);
        });
    })
.catch(error => console.error(error));



let openMenu = document.querySelector('.open')
let closeMenu = document.querySelector('.close')
let menuIco = document.querySelector('.filter-ico')
let burger = document.querySelector('.filter-burger')
let num = 0;
menuIco.addEventListener('click', () => {
    num++
    console.log(num)
    if(num % 2 !== 0) {
        openMenu.style.cssText = "display: none;"
        closeMenu.style.cssText = "display: block;"
        burger.style.cssText = "top: 49px; left: 0;"
    }
    else if(num % 2 == 0) {
        closeMenu.style.cssText = "display: none;"
        openMenu.style.cssText = "display: block;"
        burger.style.cssText = "top: 49px; left: -100%;"
    }
})


const checkboxes = document.querySelectorAll('input[name="choice"]');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        checkboxes.forEach((otherCheckbox) => {
            if (otherCheckbox !== checkbox) {
            otherCheckbox.checked = false;
            }     
        });
    });
});


let rebootButton = document.querySelector('.reboot');

rebootButton.addEventListener('click', function() {
    location.reload();
});