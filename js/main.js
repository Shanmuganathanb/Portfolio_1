var typed = new Typed(".typing", {
    strings: ["Web Developer", "Python Developer", "Coder"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

var submitBtn = document.querySelector('button[type="submit"]');
var NameInput = document.querySelector('input[name="name"]');
var EmailInput = document.querySelector('input[name="email"]');
var SubInput = document.querySelector('input[name="subject"]');
var DescInput = document.querySelector('textarea[name="description"]');
submitBtn.addEventListener('click', ()=>{
    setTimeout(()=>{
    NameInput.value ="";
    EmailInput.value ="";
    SubInput.value ="";
    DescInput.value ="";
    },2000)
})