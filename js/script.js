$(document).ready(function(){
    var submitIcon = $('.icon-search');
    var inputBox = $('.form-search');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function(){
        if(isOpen == false){
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });  
    submitIcon.mouseup(function(){
        return false;
    });
    searchBox.mouseup(function(){
        return false;
    });
    $(document).mouseup(function(){
        if(isOpen == true){
            $('.icon-search').css('display','block');
            submitIcon.click();
        }
    });
});

function buttonUp(){
    var inputVal = $('.form-search').val();
    inputVal = $.trim(inputVal).length;
    if( inputVal !== 0){
        $('.icon-search').css('display','none');
    } else {
        $('.form-search').val('');
        $('.icon-search').css('display','block');
    }
}

function doSomthing(){
    var divWidth = $('.inner-works').width();
    $('.inner-works').height(divWidth);
    $(window).resize(function(){
        $('.inner-works').height(divWidth);
    });
    console.log(divWidth);
}
doSomthing();




$(window).on('resize', function() {
    $('.page-content .our-team .grey').height( $('.page-content .our-team .grey').width() );
}).trigger('resize');


$(function () {
    var headerHeight = $('header').height();
    var windowHeight = $(window).height();
    if (window.matchMedia("(min-width: 520px)").matches) {
        $('.large-img').css('height', windowHeight - headerHeight );
    }else{
        $('.large-img').css('height', windowHeight - headerHeight);
    }
});