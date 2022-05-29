$(document).ready(function(){
var isMenuOpened = false;

$(".menu-icon").click(function(){

if(isMenuOpened){
    //close it : 
    $(".menu-icon").removeClass("active");
    $("body").removeClass("open-menu");
}
else{
    //open it : 
    $(".menu-icon").addClass("active");
    $("body").addClass("open-menu");
}

    isMenuOpened = !isMenuOpened

});

});
