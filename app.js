window.onload = function() {
    document.getElementById("tab1").style.display = "block";
    document.getElementById("tab-holder1").style.display = "flex";
}


function goToTab1() {
    let all = document.querySelectorAll(".tab, .tab-holder");
    for (let i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }
    document.getElementById("tab1").style.display = "block";
    document.getElementById("tab-holder1").style.display = "flex";

}
function goToTab2() {
    let all = document.querySelectorAll(".tab, .tab-holder");
    for (let i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }
    document.getElementById("tab2").style.display = "block";
    document.getElementById("tab-holder2").style.display = "flex";


}
function goToTab3() {
    let all = document.querySelectorAll(".tab, .tab-holder");
    for (let i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }
    document.getElementById("tab3").style.display = "block";
    document.getElementById("tab-holder3").style.display = "flex";
}
function goToTab4() {
    let all = document.querySelectorAll(".tab, .tab-holder");
    for (let i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }
    document.getElementById("tab4").style.display = "block";
    document.getElementById("tab-holder4").style.display = "flex";

}
window.onclick = function(event) {
    let clicked = Number(event.target.id.slice(-3));
    if(clicked == 1.1 ||clicked == 2.1 ||clicked == 3.1 ||clicked == 4.1) {
        goToTab1();
    } else if(clicked == 1.2 ||clicked == 2.2 ||clicked == 3.2 ||clicked == 4.2) {
        goToTab2();
    } else if(clicked == 1.3 ||clicked == 2.3 ||clicked == 3.3 ||clicked == 4.3) {
        goToTab3();
    } else if(clicked == 1.4 ||clicked == 2.4 ||clicked == 3.4 ||clicked == 4.4) { 
        goToTab4();
    }
}