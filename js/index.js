let latestWorksButtons = document.querySelectorAll(".latest_works_buttons button"),
    latestWorksSlots = document.querySelectorAll(".works_slots a"),
    servicesRectangles = document.querySelectorAll(".rectangle"),
    servicesButtons = document.querySelectorAll(".read_more"),
    memberBlock = document.querySelectorAll(".member"),
    dots = document.querySelectorAll(".dot"),
    sliderDots = document.querySelector(".slider_dots"),
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
    latestWorksButtons[0].classList.add('latest_works_buttons_click');
    latestWorksButtons[0].style = "color:white";
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




function displayNoneMembers() {
    for (let m = 0; m < memberBlock.length; m++)
        memberBlock[m].style = "display:none;";
}
function swapMembersWithTwoDots(i) {
    displayNoneMembers();
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
function swapMembersWithThreeDots(i){
    displayNoneMembers();
    if (i === 0) {
        for (let k = 0; k < 2; k++)
            memberBlock[k].style = "display:block";
        for (let i = 0; i < dots.length; i++)
            dots[i].classList.remove("active");
        dots[i].classList.add("active");
    }
    if (i === 1) {
        for (let k = 2; k < 4; k++)
            memberBlock[k].style = "display:block";
        for (let i = 0; i < dots.length; i++)
            dots[i].classList.remove("active");
        dots[i].classList.add("active");
    }
    if (i === 2) {
        for (let k = 4; k < 6; k++)
            memberBlock[k].style = "display:block";
        for (let i = 0; i < dots.length; i++)
            dots[i].classList.remove("active");
        dots[i].classList.add("active");
    }
}





if (window.matchMedia('(min-width: 1200px)').matches) {
    for(let i = 0; i < 2; i++) {
        let plusDot = document.createElement("span");
        plusDot.classList.add("dot");
        sliderDots.appendChild(plusDot);
    }
    dots = document.querySelectorAll(".dot");
    dots[0].classList.add("active");
    displayNoneMembers();
    for (let k = 0; k < 3; k++) {
        memberBlock[k].style = "display:block";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function () {
                swapMembersWithTwoDots(i);
        });
    }
    setInterval('swapMembersWithTwoDots(1)', 5000);
    setInterval('swapMembersWithTwoDots(0)', 10000);

}else if(document.documentElement.clientWidth < 1200 && document.documentElement.clientWidth > 800){
    for(let i = 0; i < 3; i++) {
        let plusDot = document.createElement("span");
        plusDot.classList.add("dot");
        sliderDots.appendChild(plusDot);
    }
    dots = document.querySelectorAll(".dot");
    dots[0].classList.add("active");
    displayNoneMembers();
    for (let k = 0; k < 2; k++) {
        memberBlock[k].style = "display:block";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function () {
            swapMembersWithThreeDots(i);
        });
    }
} else if(document.documentElement.clientWidth <= 800){
    let num = 0;
    for(let i = 0; i < 6; i++) {
        let plusDot = document.createElement("span");
        plusDot.classList.add("dot");
        sliderDots.appendChild(plusDot);
    }
    dots = document.querySelectorAll(".dot");
    dots[0].classList.add("active");
    displayNoneMembers();
    memberBlock[0].style = "display:block";
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function () {
            displayNoneMembers();
            memberBlock[i].style = "display:block";
            for (let i = 0; i < dots.length; i++)
                dots[i].classList.remove("active");
            dots[i].classList.add("active");
        });
    }
    setInterval(function () {
        displayNoneMembers();
        memberBlock[num].style = "display:block";
        for (let i = 0; i < dots.length; i++)
            dots[i].classList.remove("active");
        dots[num].classList.add("active");
        num++;
        if(num > 5){
            num = 0;
        }
    }, 4000);
}





function forRectangles(dots, showRectangles) {
    let priceRectangles = document.querySelectorAll(".price_list a"),
        pricePlan =document.querySelector(".pricing_plan");
    priceRectangles.forEach(function (rectangle) {
        rectangle.style = "display:none";
    });
    for(let k = 0; k < showRectangles; k++)
        priceRectangles[k].style = "display: block";
    for(let i = 0; i < dots; i++) {
        let plusDot = document.createElement("span");
        plusDot.classList.add("dot");
        pricePlan.appendChild(plusDot);
    }
    dots = document.querySelectorAll(".dot");
    dots[0].classList.add("active");
    for(let j = 0; j < dots.length; j++)
        dots[j].style = "margin-top:20px; height: 25px; width: 25px";
}



if(document.documentElement.clientWidth < 1200 && document.documentElement.clientWidth >= 750){
    forRectangles(3, 2);
    let priceRectangles = document.querySelectorAll(".price_list a"),
        dots = document.querySelectorAll(".dot");
    for(let j = 0; j < dots.length; j++){
        dots[j].addEventListener("click",function () {
            for(let k = 0; k < priceRectangles.length; k++){
                priceRectangles[k].style = "display:none";
                dots[k].classList.remove("active");
            }
            dots[j].classList.add("active");
            if(j+1 >= 3){
                priceRectangles[0].style = "display:block; background: url(img/price_rectangle/ultimates.jpg)";
                priceRectangles[priceRectangles.length-1].style = "display:block; background: url(img/price_rectangle/free.jpg)";
            } else {
                priceRectangles[j].style = "display:block";
                priceRectangles[j + 1].style = "display:block";
            }
        });
    }
} else if (document.documentElement.clientWidth <= 750){
    forRectangles(3, 1);
    let priceRectangles = document.querySelectorAll(".price_list a"),
        dots = document.querySelectorAll(".dot");
    for(let j = 0; j < dots.length; j++){
        dots[j].addEventListener("click",function () {
            for(let k = 0; k < priceRectangles.length; k++){
                priceRectangles[k].style = "display:none";
                dots[k].classList.remove("active");
            }
            priceRectangles[j].style = "display:block";
            dots[j].classList.add("active");
        });
    }
}



scrollTop.addEventListener("click", function () {
    window.scrollTo(0,0);//доробити
});
window.addEventListener("scroll", function () {
    if(window.pageYOffset > 800){
        scrollTop.style = "display: block";
    } else{
        scrollTop.style = "display: none";
    }
});







