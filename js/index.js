let latestWorksButtons = document.querySelectorAll(".latest_works_buttons button"),
    latestWorksSlots = document.querySelectorAll(".works_slots a"),
    servicesReactangles = document.querySelectorAll(".rectangle"),
    servicesButtons = document.querySelectorAll(".read_more"),
    membersImage = document.querySelectorAll(".team_members .member_image"),
    memberName = document.querySelectorAll(".team_members .member h1"),
    memberDescription = document.querySelectorAll(".team_members .member p"),
    dots = document.querySelectorAll(".dot");




for(let i = 0; i < servicesReactangles.length; i++){
    servicesButtons[i].addEventListener("mouseover", function () {
        servicesButtons[i].style = "transition: 0.2s; color: white;border: 2px white solid; background-color: #00897b";
        servicesReactangles[i].style = "transition: 0.2s; background-color: #00897b; color: white";
    });
    servicesButtons[i].addEventListener("mouseout", function () {
        servicesButtons[i].style = "transition: 0.2s; border: 2px #00897b solid; color: #5c5c5c; background; white";
        servicesReactangles[i].style = "transition: 0.2s; background-color: #ffffff;color: #5c5c5c";
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
setInterval('swapMember(2)', 5000);
setInterval('swapMember(1)', 10000);

