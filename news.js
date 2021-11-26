const xhr = new XMLHttpRequest();

xhr.open("GET", "https://newsapi.org/v2/top-headlines?country=in&apiKey=4f192c410d8645f8970619f05e772784", true);
xhr.onload = function () {
    if (this.status === 200) {
        let obj = JSON.parse(this.responseText)
        let articles = obj.articles
        let newscontent = document.getElementById("news-content")
        let innercontent;
        // console.log(articles);
        articles.forEach(function (element) {
            // console.log(element["title"])

            let html = `<div class="col-sm-4 mt-3 shadow">
                            <div class="card">
                            <img src="${element["urlToImage"]}" class="card-img-top" alt="${element["urlToImage"]}">
                                <div class="card-body">
                                    <h5 class="card-title">Title - ${element["title"]}</h5>
                                    <p class="card-text">${element["content"]}</p>
                                    <a href="${element["url"]}" target="_blank" class="btn btn-primary">read more</a>
                                </div>
                            </div>
                        </div>`
            innercontent += html;
            // console.log(innercontent);

        });
        newscontent.innerHTML= innercontent;
    }
    else {
        console.log("There is some error")
    }
}
xhr.send();