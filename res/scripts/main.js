function playAudio(n) {
    document.getElementById(`gracz${n}`).addEventListener("click", _=>{
        document.getElementById(`audio${n}`).play()
    })
}

function makeSig(id) {
    let temp = document.getElementById(id);
    temp.style.strokeDashoffset = temp.getTotalLength()
    temp.style.strokeDasharray = temp.getTotalLength()
    temp.classList.add("showSig")
}

function sigReset(id) {
    let temp = document.getElementById(id);
    temp.classList.remove("showSig")
}

$(window).scroll( function(){

    let bottom_of_window = $(window).scrollTop() + $(window).height();

    $('.hide').each( function(i){
        
        let bottom_of_object = $(this).offset().top + $(this).outerHeight();
        
        if( bottom_of_window > bottom_of_object ){
            $(this).addClass("show");  
        }
    })
    
    let bottom_of_sig = $(".sig").offset().top + $(".sig").outerHeight();
    if( bottom_of_window > bottom_of_sig ){
        makeSig("sigJ");
        makeSig("sigL"); 
    }
})

playAudio(1);
playAudio(2);
playAudio(3);
playAudio(4);

let jumper = document.getElementById("jumper");
document.addEventListener("scroll", _=>{
    if (window.scrollY == 0) {
        jumper.classList.remove("show");
    }else{
        jumper.classList.add("show");
    }
})

$(".imgText:odd").css({"flex-direction": " row-reverse", "text-align": "right"});