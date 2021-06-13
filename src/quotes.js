const url = "https://type.fit/api/quotes";
const quotes_text_title = document.querySelector(".quotes-text");
const quotes_author_title = document.querySelector(".quotes-author");

fetch(url)
.then(response => response.json()).then(data => {
    let tot_quotes = data.length;
    let random_index = Math.floor(Math.random() * tot_quotes);
    let quotes_text = data[random_index]['text'];
    let quotes_author = data[random_index]['author'];
    
    quotes_author_title.innerHTML = quotes_author;
    quotes_text_title.innerHTML = quotes_text;
});