console.log(' i am intaligent');
// Grab the news container
let contaner = document.getElementById('contaner');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', "https://newsapi.org/v2/top-headlines?country=in&apiKey=0e6505d592af40e09274e69a1f9c35c3", true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card" style="width: 18rem;">
            <img src=${element['urlToImage']} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element['title']}</h5>
              <p class="card-text">${element['description']}</p>
              <a href=${element['url']} class="btn btn-primary">Read More</a>
            </div>
          </div>`;
            newsHtml += news;
        });
        contaner.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()


