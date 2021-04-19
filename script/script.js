$(document).ready(function(){
    
    var navContainer=$('#navContainer');
    var arrpwUp=$('#arrowUp');

    $(window).scroll(function(){
        if(scrollY>10){
          navContainer.addClass('navStyleScroll')
        }else if(scrollY<10){
          navContainer.removeClass('navStyleScroll')
        }
        
        if(scrollY>1500){
            arrpwUp.css({display:'block'})
        }else{
            arrpwUp.css({display:'none'});
        }
        arrpwUp.click(function(){
            window.scrollTo('0','0')
        })
     });
    //  $('body').scrollspy({ target: '#navContainer' })

  })

var navLink=document.querySelectorAll('.link'),
linkAbout=document.querySelector('#linkAbout'),
navlist=document.getElementById('navList'),
bar=document.getElementById('menubar'),
exitmenu=document.getElementById('exitMenu'),
footerYear=document.querySelectorAll('.footerYear')


// Link click action
function linkChange(){
    navLink.forEach(e=>{
        e.classList.remove('active');
        this.classList.add('active');
        navlist.style.right='-100%';
    });
}
navLink.forEach(e=>{
    e.addEventListener('click',linkChange)
})

// Menu bar and exit click action
bar.addEventListener('click',function(){
    navlist.style.right='0';
    setTimeout(function(){
        navlist.style.paddingTop='60rem';
        navlist.style.paddingBottom='0rem';
    },600)
});

exitmenu.addEventListener('click',function(){
    navlist.style.right='-100%'
    navlist.style.paddingTop='0rem';
    navlist.style.paddingBottom='30rem';
})




// Footer year
var date=new Date()
footerYear.forEach(e=>{e.innerHTML=date.getFullYear()});

// Scroll Revevalanimation

var sr=ScrollReveal({
    origin:'bottom',
    distance:'80px',
    duration:1200
});

// Scroll Home
sr.reveal('.imgContainer')
sr.reveal('.nameContanier',{delay:100});

// About
sr.reveal('.sectionText');
sr.reveal('#aboutImgContainer',{delay:100});
sr.reveal('#aboutTextContainer',{delay:300})

// Projects

sr.reveal('.col-md-3',{delay:100,interval:200})

// Skills
sr.reveal('#skillsTextContainer',{delay:100});
sr.reveal('.skillsContainer',{delay:200});
// Contacts
sr.reveal('.questionTitle',{delay:100});
sr.reveal('.message',{delay:200});
sr.reveal('.info',{delay:300});
sr.reveal('input',{delay:500,interval:100});
sr.reveal('textarea',{delay:600});
sr.reveal('#submit',{delay:700});