$(document).ready(function () {
            console.log("document ready");
            $(".fa-chevron-down").click(chevronClickHandler);

            function chevronClickHandler(evt) {
                console.log('clicked');
                if ($(this).hasClass('fa-rotate-180')) {
                        $(this).removeClass('fa-rotate-180');
                    closeBio();
                    } else {
                        $(this).addClass('fa-rotate-180');
                        openBio();
                    }
                };//chevronClickHandler
    
    function closeBio(){
        $('.bio-content').removeClass('bio-content-active');
    };//close bio
    
    function openBio(){
        $('.bio-content').addClass('bio-content-active');
        console.log("open bio");
    };//open bio
            });