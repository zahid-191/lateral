

AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animated',
    duration:3000
  });

  $('.testimonial-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


$('.clients-brand').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

// pricing btn
  const pricingMonthly=document.querySelector('.switcher-button-monthly');
  const pricingYearly=document.querySelector('.switcher-button-yearly');
  const valueYearly=document.querySelector('.value-yearly');
  const valueYearlypro=document.querySelector('.value-yearly-pro');
  const valueYearlyultra=document.querySelector('.value-yearly-ultra');
  const planDeactivated=document.querySelector('.plan-deactivated');
  const yearly=document.querySelector('.yearly');


  pricingYearly.addEventListener('click',()=>{
    pricingMonthly.classList.remove('active-button');
    pricingYearly.classList.add('active-button');
    valueYearly.innerHTML='<h3>$<span>20</span>yearly</h3>'
    valueYearlypro.innerHTML='<h3>$<span>100</span>yearly</h3>'
    valueYearlyultra.innerHTML='<h3>$<span>150</span>yearly</h3>'
    planDeactivated.classList.add('active-plan');
  });

  pricingMonthly.addEventListener('click',()=>{
    pricingMonthly.classList.add('active-button');
    pricingYearly.classList.remove('active-button');
    valueYearly.innerHTML='<h3>$<span>0</span>monthly</h3>'
    valueYearlypro.innerHTML='<h3>$<span>49</span>monthly</h3>'
    valueYearlyultra.innerHTML='<h3>$<span>99</span>monthly</h3>'
    planDeactivated.classList.remove('active-plan');
  });

// modal sign up form

$(document).ready(function(){
    $("#myBtn").click(function(){
      $("#myModal").modal();
    });
  });

  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}















const signIn=document.querySelector('.signinbtn');
const signUp=document.querySelector('.signupbtn');
const nameField=document.querySelector('.namefield');
const title=document.querySelector('.title');
const underline=document.querySelector('.underline');


signIn.addEventListener('click',()=>{
    nameField.style.display='none';
    title.innerHTML="Sign in";
    signUp.classList.add('disable');
    signIn.classList.remove('disable');
    underline.style.transform='translateX(30px)'
})

signUp.addEventListener('click',()=>{
    nameField.style.display='flex';
    title.innerHTML="Sign up"
    signUp.classList.remove('disable');
    signIn.classList.add('disable');
    underline.style.transform='translateX(0px)'
})
