$(() => {
    $('.slider').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 800,
            settings: {
              arrows: false,
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
        ]
      });
})