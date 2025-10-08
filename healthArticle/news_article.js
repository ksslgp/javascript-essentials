const xhr = new XMLHttpRequest();
const url = './news_article.json';
xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.onload = function () {
    var articles = xhr.response.news_articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function (article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var pubDateAndSource = document.createElement('p');
        pubDateAndSource.textContent = `Published on: ${article.pubDate};  Source: ${article.source_name}`

        var description = document.createElement('p');
        description.textContent = article.description;

        var link = document.createElement('p');
        link.textContent = `Link to review article: ${article.link}`;

        articleDiv.appendChild(title);
        articleDiv.appendChild(pubDateAndSource);
        articleDiv.appendChild(description);
        articleDiv.appendChild(link);
        

        articlesDiv.appendChild(articleDiv);
    });
} 

xhr.send();