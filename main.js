let reviewCustomer = new Swiper(".welcome", {
 
    grabCursor: true,
    loop: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
     
    },
   
   
  });

  
  // ---------------------FAQ----------------------------
document.addEventListener("DOMContentLoaded", function () {
  const questionBoxes = document.querySelectorAll(".question-box");

  questionBoxes.forEach(function (box) {
    box.addEventListener("click", function () {
      this.classList.toggle("active");
      
    });
  });
});