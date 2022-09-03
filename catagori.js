const loadCatagories = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories#`
    const res = await fetch(url);
    const data = await res.json();
    showcat(data.data.news_category);

}


loadCatagories();

const showcat = catagories =>{
    const catContainer = document.getElementById('catContainer')

    for(const catagori of catagories){
    let catName = catagori.category_name
    let catId = catagori.category_id
    const catLi = document.createElement('div')
    catLi.innerHTML = `<button  onclick="loadNews('${catagori.category_id}')" id="" class=" btn btn-light btn-sm text-decoration-none text-secondary fs-6" href="">${catName}</button>`
    catContainer.appendChild(catLi)
    }
}

// function loadNews(catagoriId){
//     const url = `https://openapi.programming-hero.com/api/news/category/0${catagoriId}`
//     console.log(url)
//     fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data.data))
// }



function loadNews(catagoriId){
    const url = `https://openapi.programming-hero.com/api/news/category/${catagoriId}`
    fetch(url)
    .then(res => res.json())
    .then(data => showNews(data.data))
}

function showNews(newses){
    const newsBody = document.getElementById('newsBody')
    newses.forEach(news => {
        
        console.log(news)
    });
}

