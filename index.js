//template_lcmqf1s
//service_bzofxep
//xrYcv5CqntpwvuqKL

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
let isModalOpen=false;

function toggleModal() {
  
  if (isModalOpen) {
    isModalOpen=false;
    return document.body.classList.remove("modal--open");
  } 
  isModalOpen=true;
  document.body.classList += " modal--open"
}
