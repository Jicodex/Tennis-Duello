const toggleBtn = document.querySelector(".custom-toggler");
  const toggleIcon = document.getElementById("toggleIcon");
  const menu = document.getElementById("navbarMenu");

  // SVG Icons
  const barIcon = `
    <svg width="28" height="28" viewBox="0 0 24 24">
      <path fill="currentColor"
        d="M3 6h18M3 12h18M3 18h18"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>`;

  const closeIcon = `
    <svg width="28" height="28" viewBox="0 0 24 24">
      <path fill="currentColor"
        d="M6 6l12 12M18 6l-12 12"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>`;

  // Listen Button Click
  toggleBtn.addEventListener("click", function () {
    menu.classList.toggle("show");

    // Always Sync With Menu State
    if (menu.classList.contains("show")) {
      toggleIcon.innerHTML = closeIcon;
    } else {
      toggleIcon.innerHTML = barIcon;
    }
  });

  // Clicking any menu link hides menu & updates icon
  document.querySelectorAll("#navbarMenu .nav-link").forEach(link => {
    link.addEventListener("click", function () {
      menu.classList.remove("show");
      toggleIcon.innerHTML = barIcon;
    });
  });


  // ==== language select 
const trigger = document.querySelector('.custom-select-trigger');
  const options = document.querySelector('.custom-options');
  const hiddenInput = document.getElementById('lang');

  trigger.addEventListener('click', () => {
    options.style.display =
      options.style.display === 'flex' ? 'none' : 'flex';
  });

  document.querySelectorAll('.custom-option').forEach(option => {
    option.addEventListener('click', () => {
      const imgSrc = option.querySelector('img').src;
      const text = option.textContent.trim();
      const value = option.getAttribute('data-value');

      trigger.querySelector('img').src = imgSrc;
      trigger.querySelector('span').textContent = text;
      hiddenInput.value = value;

      options.style.display = 'none';
    });
  });

  // Close dropdown click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-select')) {
      options.style.display = 'none';
    }
  });



$('.banner_slider_main').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 3000,
  cssEase: 'linear',
  infinite: true,
  centerMode: true,           // Needed for centerPadding to work
  centerPadding: '10px',      // Add padding on each side of the slide
  arrows: false,
  pauseOnHover: false,       // Optional: don’t stop on hover
  pauseOnFocus: false
});

$('.join_leagues_slider_main').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1,
        autoplay: true,
        dots: true,
      }
    }
  ]
});

$('.player_opinion_slider_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: $('.left_arrow'),
  nextArrow: $('.right_arrow'),
});

// ==== Top message popup 
 const toggleBtn1 = document.getElementById("msgToggleBtn");
    const popup = document.getElementById("messagePopup");

    toggleBtn1.addEventListener("click", () => {
        popup.style.display = popup.style.display === "block" ? "none" : "block";
    });

    // Click outside to close
    document.addEventListener("click", function(e){
        if(!toggleBtn1.contains(e.target) && !popup.contains(e.target)){
            popup.style.display = "none";
        }
    });