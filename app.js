const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navLists');
const navlinks = document.querySelectorAll('.navlink');

hamburger.addEventListener('click', function(){
    nav.classList.toggle('nav-active');

    navlinks.forEach(function(link,index){
        if(link.style.animation){
         link.style.animation =''
        }else{
         link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
     });

     hamburger.classList.toggle('toggle');
});

