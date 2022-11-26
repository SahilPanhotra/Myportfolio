let isModalOpen=false;
let contrastToggle=false;
const scaleFactor =1/20;
function toggleContrast() {
  console.log("work")
  contrastToggle =!contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
    
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_bzofxep",
      "template_lcmqf1s",
      event.target,
      "xrYcv5CqntpwvuqKL"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily down please contact me on twitter @sahilpanhotra"
      );
    });
}


function toggleModal() {
  
  if (isModalOpen) {
    isModalOpen=false;
    return document.body.classList.remove("modal--open");
  } 
  isModalOpen=true;
  document.body.classList += " modal--open"
}

function moveBackground(event) {
    const shapes =document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;


    for (let index = 0; index< shapes.length; ++index) {
      const isOdd = index%2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      shapes[index].style.transform = `translate(${x*boolInt}px,${y*boolInt}px)`
    }
    
}
