let lastWorksSlot = document.querySelectorAll(".works_slots a"),
    latestWorksButtons = document.querySelectorAll(".latest_works_buttons button"),
    latestWorksSlots = document.querySelectorAll(".works_slots a");
    // latestWorksButtonAll = document.querySelector(".latest_works_buttons .all"),
    // latestWorksButtonWebDesign = document.querySelector(".latest_works_buttons .web_design"),
    // latestWorksButtonDesign = document.querySelector(".latest_works_buttons .ui_ux_design"),
    // latestWorksButtonMockups = document.querySelector(".latest_works_buttons .mockups");

for(let i = 0; i < lastWorksSlot.length; i++){
    if(i === 0) {
        lastWorksSlot[i].addEventListener("mouseover",function () {
            lastWorksSlot[i].style = "background: url('img(hover)/watches(1)(hover).jpg'); transition: 0.2s";
        });
        lastWorksSlot[i].addEventListener("mouseout", function () {
            lastWorksSlot[i].style = "background: url('img/latest_work_icons/watches(1).jpg'); transition: 0.2s";
        });
    } else if(i === 1) {
        lastWorksSlot[i].addEventListener("mouseover", function () {
            lastWorksSlot[i].style = "background: url('img(hover)/health_pocket(2)(hover).jpg'); transition: 0.2s";
        });
        lastWorksSlot[i].addEventListener("mouseout", function () {
            lastWorksSlot[i].style = "background: url('img/latest_work_icons/health_pocket(2).jpg'); transition: 0.2s";
        });
    }
    else if(i === 2) {
        lastWorksSlot[i].addEventListener("mouseover",function () {
            lastWorksSlot[i].style = "background: url('img(hover)/pants(3)(hover).jpg'); transition: 0.2s";
        });
        lastWorksSlot[i].addEventListener("mouseout", function () {
            lastWorksSlot[i].style = "background: url('img/latest_work_icons/pants(3).jpg'); transition: 0.2s";
        });
    } else if(i === 3) {
            lastWorksSlot[i].addEventListener("mouseover", function () {
                lastWorksSlot[i].style = "background: url('img(hover)/flaga(4)(hover).jpg'); transition: 0.2s";
            });
            lastWorksSlot[i].addEventListener("mouseout", function () {
                lastWorksSlot[i].style = "background: url('img/latest_work_icons/flaga(4).jpg'); transition: 0.2s";
            });
    }
    else if(i === 4) {
        lastWorksSlot[i].addEventListener("mouseover",function () {
            lastWorksSlot[i].style = "background: url('img(hover)/wine(5)(hover).jpg'); transition: 0.2s";
        });
        lastWorksSlot[i].addEventListener("mouseout", function () {
            lastWorksSlot[i].style = "background: url('img/latest_work_icons/wine(5).jpg'); transition: 0.2s";
        });
    } else if(i === 5){
        lastWorksSlot[i].addEventListener("mouseover",function () {
            lastWorksSlot[i].style = "background: url('img(hover)/bag(6)(hover).jpg'); transition: 0.2s";
        });
        lastWorksSlot[i].addEventListener("mouseout", function () {
            lastWorksSlot[i].style = "background: url('img/latest_work_icons/bag(6).jpg'); transition: 0.2s";
        });
    }
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


