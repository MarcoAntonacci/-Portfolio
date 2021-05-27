
fetch('./projects.json').then(data => data.json())
.then(projects =>{

function populateCards(projects){


let wrapper = document.querySelector('#wrapper')


projects.forEach(project =>{
let card = document.createElement('div')

card.classList.add('col-12' , 'col-md-6', 'my-3')

card.innerHTML= 
`
<div class="card shadow" style="width: 22rem; height:260px" id="card">

<div class="card-body">
<h5 class="card-title tc-black fw-bold">${project.name}</h5>
<p class="card-text tc-black p-1 my-3">${project.description}</p>
<hr>
<div class="text-center">
<button type="button" class="btn btn-color" project-id='${project.id}' data-bs-toggle="modal" data-bs-target="#exampleModal">
    Visualizza
  </button>
</div>
</div>
</div>


`
wrapper.appendChild(card)


})


}

populateCards(projects)


function populateModal(){

    let buttons = document.querySelectorAll('[project-id]')

    buttons.forEach(button =>{
       
            button.addEventListener('click', () =>{

             let id = button.getAttribute('project-id')

             let project = projects.find(el => el.id == id)

             let ModalName = document.querySelector('#ModalName')
            //  let ModalDescription = document.querySelector('#ModalDescription')
             let ModalImg = document.querySelector('#ModalImg')

             ModalName.innerHTML = project.name
             ModalImg.innerHTML = 
             `                       
             <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
             <div class="carousel-inner">
               <div class="carousel-item active" data-bs-interval="10000">
                 <img src="${project.img}" class="d-block w-100" alt="...">
               </div>
               <div class="carousel-item" data-bs-interval="2000">
                 <img src="${project.img1}" class="d-block w-100" alt="...">
               </div>
               <div class="carousel-item">
                 <img src="${project.img2}" class="d-block w-100" alt="...">
               </div>
             </div>
             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
             <span aria-hidden="true"><i class="fas fa-arrow-left fs-3 tc-black"></i></span>
               <span class="visually-hidden">Previous</span>
             </button>
             <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
             <span aria-hidden="true"><i class="fas fa-arrow-right fs-3 tc-black"></i></span>
               <span class="visually-hidden">Next</span>
             </button>
           </div>    
                    
             `
              
            })
        })
     }

populateModal()




mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}




           



})
