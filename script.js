$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:6
        },
        sname:{
            required:true,
            minlength:4
        },emailAdress:{
            email:true,
            minlength:4
        },pass:{
            required:true,
            minlength:6
        },day:{
            required:true
        },month:{
            required:true
        },year:{
            required:true
        },genter:{
            required:true
        }
        },
    
    
    })

})