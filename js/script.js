function getTemplateHTML(el, url) {
  fetch(url)
    .then(res => res.text())
    .then(res => el.innerHTML = res);
}

const navbar = document.getElementById('navbar');
const footer = document.getElementById('footer');

getTemplateHTML(navbar, 'html/navbar.html');
getTemplateHTML(footer, 'html/footer.html');

setTimeout(() => {
  const footerCopy = document.querySelector('.footer-copy');
  footerCopy.innerHTML = `&copy; ${new Date().getFullYear()} Verónica Badillo`;
}, 100);





/* Cargando sección Portafolio */
function getWorkCards() {
  const work = document.getElementById('work');

  fetch('js/data.json')
    .then(res => res.json())
    .then(res => {
      //console.log(res);
      let htmlWork= '';
     

      res.workCards.forEach(function (card) {



        htmlWork += `
        <div class="col-md-4 col-sm-6 portfolio-item">


          <a class="portfolio-link" data-toggle="modal" href="#${card.modal}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="${card.img}" alt="">
          </a>



          <div class="portfolio-caption">
            <h4>${card.h}</h4>
            <p class="text-muted">${card.p}</p>
          </div>
        </div>
        `;
      })

      work.innerHTML = htmlWork;
    })
}

if (document.getElementById('work')) {
  getWorkCards();
}


function getModalsCards() {
  const modals = document.getElementById('modals');


  fetch('js/data.json')
    .then(res => res.json())
    .then(res => {


      //console.log(res);
      let htmlModals= '';
     

      res.modalCards.forEach(function (card) {



        htmlModals += `
        <!-- Modal 1 -->
        <div class="portfolio-modal modal fade" id="${card.por}" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                  <div class="rl"></div>
                </div>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-lg-8 mx-auto">
                    <div class="modal-body">
                      <!-- Project Details Go Here -->
                      <h2 class="text-uppercase">${card.name}</h2>
                      <p class="item-intro text-muted">${card.h}</p>
                      <img class="img-fluid d-block mx-auto" src="${card.img}" alt="">
                      <p>${card.p}</p>
                       
                      <button class="btn btn-primary" data-dismiss="modal" type="button">
                        <i class="fas fa-times"></i>
                        Cerrar Proyecto</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        `;
      })

      modals.innerHTML = htmlModals;
    })
}

if (document.getElementById('modals')) {
  getModalsCards();
}



/* Cargando formulario de contacto */
if (document.getElementById('form-contact')) {
  const formContact = document.getElementById('form-contact');
  getTemplateHTML(formContact, 'html/form_contact.html')
}


/* Código para cerrar los enlaces del menú móvil para un sitio one page */

setTimeout(() => {
  $('.navbar-nav>li>a').on('click', () => {
    $('.navbar-collapse').collapse('hide');
  });
}, 100);


window.addEventListener('scroll', e => {
  console.log(window.pageXOffset, window.pageYOffset);

  if (window.pageYOffset >= 90) {
    $('.navbar').addClass('bg-red')
  } else {
    $('.navbar').removeClass('bg-red')
  }
});