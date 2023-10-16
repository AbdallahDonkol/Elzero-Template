//open/close mega menu
let toggle = document.querySelector("#other-links");
let icon = document.querySelector(".fa-regular");
let mega = document.querySelector(".mega-menu");
toggle.onclick = () =>{
    document.links[4].style.zIndex = "-1";
    icon.style.zIndex = "1";
    mega.style.opacity = "1";
    mega.style.zIndex = "1";
    mega.style.top = "calc(100% + 1px)";
} 
icon.onclick = () =>{
    icon.style.zIndex = "-1";
    document.links[4].style.zIndex = "1";
    mega.style.opacity = "0";
    mega.style.zIndex = "0";
    mega.style.transition = "0.1s";
}
icon.onmouseenter = () =>{
    icon.style.color = "black";
}
icon.onmouseleave = () =>{
    icon.style.color = "#1787e0";
}
document.onclick = function(e){
    if(e.target.id != "mega" && e.target.id != "other"){
        mega.style.zIndex = "-1";
        icon.style.zIndex = "-1";
        document.links[4].style.zIndex = "1";
        mega.style.transition = "0.1s";
    }
}

//reveal elements onscroll
window.addEventListener("scroll",reveal);
function reveal(){
    let reveals = document.querySelectorAll(".reveal");
    let windowHeight = window.innerWidth;
    for(let i=0;i<reveals.length;i++){
        let revealTop = reveals[i].getBoundingClientRect().top;
        if(revealTop < (windowHeight - 150)){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
}

//image slider
let carousel = document.querySelector(".gallery-content");
let arrowIcons = document.querySelectorAll(".gallery i");
firstImg = carousel.querySelectorAll("img")[0];
//getting first image width and add 14 margin value
let fisrtImgWidth = firstImg.clientWidth + 10;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth; //getting max scrollable width
function showHideIcon(){
    arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block" ;
    arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block" ;
}
arrowIcons.forEach(function(e){
    e.addEventListener("click", () =>{
        //if clicked icon is left , reduce width value from the carousal scroll left else add to it
        carousel.scrollLeft += e.id === "left" ? -fisrtImgWidth : fisrtImgWidth;
        setTimeout(() => showHideIcon(), 60);
    });
})

//increasing numbers when arriving to section 
let num = document.querySelectorAll(".stats .num");
let section = document.querySelector(".stats");
let started = false;  //function started ? No   ==> trigger on function to take place one time
window.onscroll = function(){
    if(window.scrollY >= section.offsetTop - 100){
        if(!started){
            num.forEach(function(ele){
                startCount(ele);
            } )
        }
        started = true;
    }
};

function startCount (el){
    let goal = el.dataset.goal;
    let counter = setInterval(() =>{
        el.textContent++;
        if(el.textContent === goal){
            clearInterval(counter);
        }
    },2000/goal);
}

//increasing data progress when arriving to section
let spans = document.querySelectorAll(".skills span");
let skillsSection = document.querySelector(".skills");

window.addEventListener("scroll",()=>{
    if(window.scrollY >= skillsSection.offsetTop - 100){
        spans.forEach(function(ele){
            ele.style.width = ele.dataset.progress;
        })
    }
})