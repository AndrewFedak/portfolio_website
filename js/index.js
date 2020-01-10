let latestWorksButtons = document.querySelectorAll(".latest_works_buttons button"),
    latestWorksSlots = document.querySelectorAll(".works_slots a"),
    servicesRectangles = document.querySelectorAll(".rectangle"),
    servicesButtons = document.querySelectorAll(".read_more"),
    memberBlock = document.querySelectorAll(".member"),
    dots = document.querySelectorAll(".dot"),
    scrollTop = document.querySelector(".top_arrow");



for(let i = 0; i < servicesRectangles.length; i++){
    servicesButtons[i].addEventListener("mouseover", function () {
        servicesButtons[i].style = "transition: 0.2s; color: white;border: 2px white solid; background-color: #00897b";
        servicesRectangles[i].style = "transition: 0.2s; background-color: #00897b; color: white";
    });
    servicesButtons[i].addEventListener("mouseout", function () {
        servicesButtons[i].style = "transition: 0.2s; border: 2px #00897b solid; color: #5c5c5c; background; white";
        servicesRectangles[i].style = "transition: 0.2s; background-color: #ffffff;color: #5c5c5c";
    });
}




for(let i = 0; i < latestWorksButtons.length; i++){
    latestWorksButtons[i].addEventListener("click",function () {
        latestWorksButtons.forEach(function(button){
            if(button.classList.contains('latest_works_buttons_click')){
                button.classList.remove('latest_works_buttons_click');
                button.style = "color: #504e4e";
            }
        });
        latestWorksButtons[i].classList.add('latest_works_buttons_click');
        latestWorksButtons[i].style = "color:white";
        for(let j = 0; j < latestWorksSlots.length; j++) {
            if(latestWorksButtons[i].classList.contains("all")){
                latestWorksSlots[j].style = "display:block";
            }
            if(latestWorksButtons[i].classList.contains("web_design")){
                if(!latestWorksSlots[j].classList.contains("web_design")){
                    latestWorksSlots[j].style = "display: none";
                }
                if(latestWorksSlots[j].classList.contains("web_design")){
                    latestWorksSlots[j].style = "display:block";
                }
            }
            if(latestWorksButtons[i].classList.contains("ui_design")){
                if(!latestWorksSlots[j].classList.contains("ui_design")){
                    latestWorksSlots[j].style = "display: none";
                }
                if(latestWorksSlots[j].classList.contains("ui_design")){
                    latestWorksSlots[j].style = "display:block";
                }
            }
            if(latestWorksButtons[i].classList.contains("mockups")){
                if(!latestWorksSlots[j].classList.contains("mockups")){
                    latestWorksSlots[j].style = "display: none";
                }
                if(latestWorksSlots[j].classList.contains("mockups")){
                    latestWorksSlots[j].style = "display:block";
                }
            }
        }
    });
}




scrollTop.addEventListener("click", function () {
    window.scrollTo(0,0);                                       //доробити
});





// function swapMember(n){
//     for(let i = 0; i < dots.length; i++)
//         dots[i].classList.remove("active");
//     if(n === 1){
//
//         dots[0].classList.add("active");
//     }
//     if(n === 2){
//
//         dots[1].classList.add("active");
//     }
// }
// setInterval('swapMember(2)', 5000);
// setInterval('swapMember(1)', 10000);




function swapMembersWithTwoDots(i) {
    for (let m = 0; m < memberBlock.length; m++)
        memberBlock[m].style = "display:none;";
    if (i === 0) {
        for (let k = 0; k < 3; k++)
            memberBlock[k].style = "display:block";
        for (let i = 0; i < dots.length; i++)
            dots[i].classList.remove("active");
        dots[i].classList.add("active");
    }
    if (i === 1) {
        for (let k = 3; k < 6; k++)
            memberBlock[k].style = "display:block";
        for (let i = 0; i < dots.length; i++)
            dots[i].classList.remove("active");
        dots[i].classList.add("active");
    }
}



if (document.documentElement.clientWidth > 1000) {
    for (let j = 0; j < memberBlock.length; j++) {
        memberBlock[j].style = "display:none;";
    }
    for (let k = 0; k < 3; k++) {
        memberBlock[k].style = "display:block";
    }
    dots[0].classList.add("active");
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function () {
            for (let m = 0; m < memberBlock.length; m++)
                memberBlock[m].style = "display:none;";
            if (i === 0) {
                swapMembersWithTwoDots(i);
                dots[i].classList.add("active");
            }
            if (i === 1) {
                swapMembersWithTwoDots(i);
                dots[i].classList.add("active");
            }
        });
    }
    setInterval('swapMembersWithTwoDots(1)', 5000);
    setInterval('swapMembersWithTwoDots(0)', 10000);

}else if(document.documentElement.clientWidth <= 1000){

} else if(window.matchMedia('(max-width: 699px)').matches){

}
