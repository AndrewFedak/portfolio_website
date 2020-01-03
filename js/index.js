let lastWorksSlot = document.querySelectorAll(".works_slots a"),
    latestWorksButtons = document.querySelectorAll(".latest_works_buttons button"),
    latestWorksSlots = document.querySelectorAll(".works_slots a"),
    membersImage = document.querySelectorAll(".team_members .member_image"),
    memberName = document.querySelectorAll(".team_members .member h1"),
    memberDescription = document.querySelectorAll(".team_members .member p"),
    dots = document.querySelectorAll(".dot");


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
membersImage[0].style = "background: url('img/members/JohnDoe.png');";
membersImage[1].style = "background: url('img/members/AlexaBiru.png');";
membersImage[2].style = "background: url('img/members/RonobirSing.png');";
dots[0].classList.add("active");

function swapMember(n){
    for(let i = 0; i < dots.length; i++)
        dots[i].classList.remove("active");
    if(n === 1){
        membersImage[0].style = "background: url('img/members/JohnDoe.png'); transition: 0.3s ease";
        membersImage[1].style = "background: url('img/members/AlexaBiru.png'); transition: 0.3s ease";
        membersImage[2].style = "background: url('img/members/RonobirSing.png'); transition: 0.3s ease";
        memberName[0].textContent = "John Doe";
        memberName[1].textContent = "Alexa Biru";
        memberName[2].textContent = "Ronobir Sing";
        memberDescription[0].textContent = "General Manager";
        memberDescription[1].textContent = "Office Director";
        memberDescription[2].textContent = "Admin";
        dots[0].classList.add("active");
    }
    if(n === 2){
        membersImage[0].style = "background: url('img/members/MaxAlkhon.jpg'); transition: 0.3s ease";
        membersImage[1].style = "background: url('img/members/AndrewFinda.jpg'); transition: 0.3s ease";
        membersImage[2].style = "background: url('img/members/SteveReed.jpg'); transition: 0.3s ease";
        memberName[0].textContent = "Max Alkhon";
        memberName[1].textContent = "Andrew Finda";
        memberName[2].textContent = "Steve Reed";
        memberDescription[0].textContent = "Designer";
        memberDescription[1].textContent = "Programmer";
        memberDescription[2].textContent = "Architect";
        dots[1].classList.add("active");
    }
}
<<<<<<< HEAD

setInterval('swapMember(2)', 5000);
setInterval('swapMember(1)', 10000);
=======
>>>>>>> e7f4b0d884b576555cb25b55f2414a05c7a5a5bd
