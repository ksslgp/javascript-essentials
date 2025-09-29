//Declare xhr variable to create new XMLHttpRequest object
const xhr = new XMLHttpRequest();

//Declare url variable for json file data fetching
var url = './health_article.json';

//prepare a GET request to specified url in async mode
xhr.open('GET', url, true);

/*
The open method configures an XHR request with the following parameters:

- 'GET': Specifies the HTTP method used for the request (in this case, a GET request).
- URL: Represents the URL from where you will fetch the data.
- True: Indicates if the request is asynchronous (true) or synchronous (false). 

In this case, it's set to true for asynchronous operation, allowing other scripts 
to run while the request is processed.
*/

//inform XMPHttpRequest object that expected response from server is in JSON format
xhr.responseType = 'json';

//define what should happen when data is successfully loaded using xhr.onload = function() {...}
xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    /*  
  var articles = xhr.response.articles - to retrieve the articles array from JSON response;
  var articlesDiv => where the retrieved articles will be displayed;
*/
  articles.forEach(function(article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Ways to Achieve:';

    var waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(function(way) {
      var listItem = document.createElement('li');
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });

    var benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Benefits:';

    var benefitsList = document.createElement('ul');
    article.benefits.forEach(function(benefit) {
      var listItem = document.createElement('li');
      listItem.textContent = benefit;
      benefitsList.appendChild(listItem);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);

    articlesDiv.appendChild(articleDiv);
  });


}

/*  
  var articles = xhr.response.articles - to retrieve the articles array from JSON response;
  var articlesDiv => where the retrieved articles will be displayed;
*/
 


    xhr.send();