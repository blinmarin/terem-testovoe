$(document).ready(function(){

    window.onload = document.querySelector('dialog').showModal()

    document.querySelector('#close').onclick = function () {
        document.querySelector('dialog').close() 
        $('dialog').hide()
    }

    $('.btn-warning').click(function(){ 
        if ($(".container1__block").is(":visible")){
            $(".container1__block").hide()
        }
        else{
            $(".container1__block").show()
        }   
    }) 

    $('.btn-success').click(function(){
        if ($('.blue').next().is($('.pink'))){
            $('.blue').before($('.pink'));
        }
        else if ($('.pink').next().is($('.blue'))){
            $('.pink').before($('.blue'));
        }        
    }) 

});