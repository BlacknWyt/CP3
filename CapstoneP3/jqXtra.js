// $(document).ready(function(){
//     $('body').hide(function(){
//         $(document).click(function(){
//             $('body').fadeIn();
//         });
//     });
// })

$(document).ready(function(){
    $('body').animate({opacity: '0'}, function(){
        $('body').animate({opacity: '1'}, 5000)
    });
})