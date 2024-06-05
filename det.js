
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay:{
        delay:3100,
        disableOnInteraction:false,
    },
   
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });



