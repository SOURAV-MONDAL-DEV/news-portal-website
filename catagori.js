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



function loadNews(catagoriId){
    const url = `https://openapi.programming-hero.com/api/news/category/${catagoriId}`
    fetch(url)
    .then(res => res.json())
    .then(data => showNews(data.data))
}

function showNews(newses){
    const newsBody = document.getElementById('newsBody')
    newsBody.textContent = '';
    newses.forEach(news => {
       const newsDiv = document.createElement('div')
       newsDiv.classList.add("card")
       newsDiv.innerHTML = `
       <div class="row g-0">
       <div class="col-md-3">
         <img src="${news.thumbnail_url}" class="img-fluid rounded-start">  
       </div>
       <div class="col-md-9 ">
         <div class="card-body m-0">
           <h5 class="fs-3 fw-bold card-title">${news.title}</h5>
           <p class="card-text mt-3"> is a massive open online course provider, and its learning experience arranges coursework into a series of modules and lessons that can include videos, text notes and assessment tests. Our video player has functional features like closed captioning and note-taking functions. </p>
           <div class=" row  d-flex justify-content-between mt-4 " >
             <div  class="col-md-3 d-flex align-items-center">
               <img class="rounded w-5 "  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" srcset="">
               <div>
                 <h4 class="  " >${news.author?.name}</h4>
                 <p>12 Feb 2021</p>
               </div>
             </div>
             <div  class="col-md-3 pt-3 ">
               <h4 class="  ">👁‍🗨 ${news.total_view}</h4>
             </div>
             <div  class="col-md-3 pt-3">
               <h4 class="  ">☆☆☆☆</h4>
             </div>
             <button class=" fs-3 col-md-1 btn btn-info btn-sm" >⇱</button>
           </div>
           
         </div>
       </div>
     </div>

       `
       newsBody.appendChild(newsDiv)
        console.log(news)
    });
}

