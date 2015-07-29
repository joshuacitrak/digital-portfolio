app.controller('AppController', function($scope, $rootScope, $http, $routeParams, $location, $window)
{
    console.log("document ready");
    $(".fa-chevron-down").click(chevronClickHandler);
    $(".projects-item").click(projectsItemClick);

    function chevronClickHandler(evt) {
        console.log('clicked');
        if ($(this).hasClass('fa-rotate-180')) {
            $(this).removeClass('fa-rotate-180');
            closeBio();
        } else {
            $(this).addClass('fa-rotate-180');
            openBio();
        }
    }; //chevronClickHandler

    function closeBio() {
        $('.bio-content').removeClass('bio-content-active');
    }; //close bio

    function openBio() {
        $('.bio-content').addClass('bio-content-active');
        console.log("open bio");
    }; //open bio
    
    function projectsItemClick(evt){
        
    };

    var $masonryContainer = $('.masonry');

    $masonryContainer.imagesLoaded(function () {
        //might as well remove the spinners here too
        $('figure').each(function(i){
            $('.spinner-container').addClass('hidden');
        });
        $masonryContainer.masonry({
            columnWidth: '.projects-column',
            gutter: '.projects-gutter',
            itemSelector: '.projects-item',
            percentPosition: true,
        });
    });
}