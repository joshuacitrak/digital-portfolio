$(document).ready(function () {

    checkScreenSize();
    $(".fa-chevron-down").click(chevronClickHandler);
    $(".projects-item").click(projectsItemClick);

    function chevronClickHandler(evt) {
        console.log('clicked');
        if ($(this).hasClass('fa-rotate-180')) {
            closeBio();
        } else {
            openBio();
        }
    }; //chevronClickHandler

    function closeBio() {
        $('.fa-chevron-down').removeClass('fa-rotate-180');
        $('.bio-content').removeClass('bio-content-active');
    }; //close bio

    function openBio() {
        $('.fa-chevron-down').addClass('fa-rotate-180');
        $('.bio-content').addClass('bio-content-active');
        console.log("open bio");
    }; //open bio

    function projectsItemClick(evt) {
        openBio();
        var i = $(this).index()*3;
        $('.bio-carousel-container').slickGoTo(i);
        var body = $("body");
        var top = body.scrollTop() // Get position of the body

        if (top != 0) {
            body.animate({
                scrollTop: 0
            }, '300');
        }
    };
    
  new imagesLoaded( '.projects-container', imagesAreLoaded )

  function imagesAreLoaded(evt){
     $('figure').each(function (i) {
            $('.spinner-container').addClass('hidden');
        });
  };

    //slick

    $('.bio-carousel-container').slick({
        autoplay: false,
        speed: 300,
        dots: false,
        arrows: true,
        infinite: false,
        ease: 'ease-in-out',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ('<i class="fa fa-chevron-left"></i>'),
        nextArrow: ('<i class="fa fa-chevron-right"></i>')

    });
    
    //window
    $(window).resize(function(){
        console.log("resize" + $(window).innerWidth());
        checkScreenSize();
    });
    
    function checkScreenSize(){
        var currWidth = $(window).innerWidth();
        if(currWidth<768)
        {
            openBio();
        }
    };
});