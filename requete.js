window.addEventListener('DOMContentLoaded', function () {


});

//Fonction servant à limiter le nombre de caractere  dans une textarea



const API_URL = "http://localhost:3000/articles";

function getArticles() { // on va chercher les articles
    const xhr = new XMLHttpRequest();
    if (xhr) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var articles = JSON.parse(xhr.responseText);
                    fillArticles(articles);
                } else {
                    alert('Une erreur s’est produite.');
                }
            }
        }
    };

    xhr.open('GET', API_URL);
    xhr.send();
}



function fillArticles(articles) {
var container = document.getElementById('container');
var div = document.createElement('div');





};

function displayArticle() {

document.getElementById('author').textContent = article.author;
document.getElementById('chapter').textContent = article.chapter;
document.getElementById('episode').textContent = article.episode;
document.getElementById('content').textContent = article.content;
document.getElementById('date').textContent = article.date;
document.getElementById('image').src = article.image;
};

function addArticle() {
    var xhr = new XMLHttpRequest();
    if (xhr) {

        xhr.open('POST', API_URL);
        xhr.setRequestHeader('Content-Type',
            'application/json; charset=utf-8');

        var jsonStr = JSON.stringify({
            id:
            author: author.value
            chapter: chapter.value
            episode: episode.value
            content: content.value
            date: date.value
            image: image.value
        });

        xhr.send(jsonStr);
    }

}
addArticle();

function removeArticle(){

}

var bouton = document.getElementById('supp');
bouton.addEventListener('click', function () {

div.removeChild(div.elementChild);
}