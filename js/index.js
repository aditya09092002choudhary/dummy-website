const sublist=document.querySelector('.sublist');

// Copyright Date

document.querySelector('.year').innerText = new Date().getFullYear();


function displayList(){
    sublist.style.display="block";
    sublist.classList.add("fadeIn");
    sublist.classList.remove("fadeOut");
}

function hideList(){
    // sublist.style.display="none";
    sublist.classList.add("fadeOut");
    sublist.classList.remove("fadeIn");
    setTimeout(()=>{
    sublist.style.display="none";
    },500);

}

function handleChange(){
    let cnt=0;
    if(cnt===0){
        cnt++;
        setTimeout(()=>{
            
            document.querySelector(".toggle i").classList.toggle('fa-x');
            document.querySelector(".toggle i").classList.toggle('fa-bars');
        },400)
    }
    document.querySelector("#sidebar-nav").classList.remove("hide");
    document.querySelector("#sidebar-nav").classList.toggle("sidebar-nav");
    document.querySelector("#sidebar-nav").classList.toggle("hide-sidebar");
    document.querySelector(".top-container").classList.toggle('dim');
}

function sideBarSublist(){
    document.querySelector(".sidebar-sublist").classList.toggle("expand");
    document.querySelector(".sidebar-sublist").classList.toggle("compress");
    setTimeout(()=>{
    document.querySelector(".sidebar-sublist").classList.toggle('hide');
    },200);
}