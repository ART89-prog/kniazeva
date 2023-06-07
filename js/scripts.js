$(() => {


  // Моб. меню
  $('header .mob_menu_btn').click((e) => {
    e.preventDefault()

    $('header .mob_menu_btn').addClass('active')
    $('body').addClass('menu_open')
    $('header .menu').addClass('show')
    $('.overlay').fadeIn(300)
  })

  $('header .close_btn, header .menu .item a, .overlay').click((e) => {
    $('header .mob_menu_btn').removeClass('active')
    $('body').removeClass('menu_open')
    $('header .menu').removeClass('show')
    $('.overlay').fadeOut(300)
  })




  const educationSliders = [],
    education = document.querySelectorAll('.education .swiper')

  education.forEach(function (el, i) {
    el.classList.add('education_s' + i)

    let options = {
      loop: false,
      speed: 500,
      watchSlidesProgress: true,
      slideActiveClass: 'active',
      slideVisibleClass: 'visible',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      preloadImages: false,
      lazy: {
        enabled: true,
        checkInView: true,
        loadOnTransitionStart: true,
        loadPrevNext: true
      },
      breakpoints: {
        0: {
          spaceBetween: 20,
          slidesPerView: 1.2
        },
        480: {
          spaceBetween: 20,
          slidesPerView: 2.2
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 3.2
        },
        1280: {
          spaceBetween: 20,
          slidesPerView: 3
        }
      },
      on: {
        init: swiper => {
          setTimeout(() => setHeight($(swiper.$el).find('.education .swiper-slide')))
        },
        resize: swiper => {
          setTimeout(() => {
            $(swiper.$el).find('.education .swiper-slide').height('auto')
            setHeight($(swiper.$el).find('.education .swiper-slide'))
          })
        }
      }
    }

    educationSliders.push(new Swiper('.education_s' + i, options))
  })





  var image = document.getElementsByClassName('thumbnail');
  new simpleParallax(image);



  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }


 


  $('body').on('click', '.modal_link', function (e) {
    e.preventDefault()
    Fancybox.close(true)
    Fancybox.show([{
      src: $(this).data('content'),
      type: 'inline',
    }]);
  })


})