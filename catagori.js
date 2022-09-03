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
    let newsShort = newses.sort((a, b) => parseFloat(b.total_view) - parseFloat(a.total_view));
    const mainNewsSection = document.getElementById('mainNewsSection')
    mainNewsSection.classList.remove('d-none')
    const faqSection = document.getElementById('faqSection')
    faqSection.textContent = '';
    const newsNumberField = document.getElementById('newsNumberField')
    newsNumberField.innerText = `${newses.length} News found for this category`
    const newsBody = document.getElementById('newsBody')
    newsBody.textContent = '';
    newsShort.forEach(news => {
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

    });
    // stop spinner
}


const newsBtn = document.getElementById('newsBtn')
newsBtn.addEventListener('click', function(){
  const mainNewsSection = document.getElementById('mainNewsSection')
    mainNewsSection.classList.remove('d-none')
    const faqSection = document.getElementById('faqSection')
    faqSection.textContent = '';
  console.log('newsbtn clik')
})






const faqBtn = document.getElementById('faqBtn')
faqBtn.addEventListener('click', function(){
  const mainNewsSection = document.getElementById('mainNewsSection')
  mainNewsSection.classList.add('d-none')
  const faqSection = document.getElementById('faqSection')
  faqSection.textContent = '';
  const faqDiv = document.createElement('div')
  faqDiv.innerHTML = `
  <h1 class="text-center fw-bold " >FAQ</h1>
  <p class="text-center fw-bold " >Frequiently Asked Question</p>
  <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
          Var, Let, and Const – What's the Difference?
        </button>
      </h2>
      <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
        <div class="accordion-body">
          <strong>Var.</strong>
          Before the advent of ES6, var declarations ruled. There are issues associated with variables declared with var, though. That is why it was necessary for new ways to declare variables to emerge. <br> <strong>Let.</strong>  is now preferred for variable declaration. It's no surprise as it comes as an improvement to var declarations. It also solves the problem with var that we just covered. Let's consider why this is so. <br><strong>Const.</strong>Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
          What is Difference Between Regular Functions and Arrow Functions?
        </button>
      </h2>
      <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
        <div class="accordion-body">
          <strong>Regular functions</strong> created using function declarations or expressions are constructible and callable. Since regular functions are constructible, they can be called using the new keyword. However, the arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
         What is the diffeWhat rence between map, for each, filter and find in js?
        </button>
      </h2>
      <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
        <div class="accordion-body">
          <strong>map</strong> returns an array with the same length, <strong>filter</strong> as the name implies, it returns an array with less items than the original array. reduce returns a single value (or object) <strong>find</strong> returns the first items in an array that satisfies a condition.
        </div>
      </div>
    </div>
  </div>
  `
  faqSection.appendChild(faqDiv)
console.log(faqSection)
})