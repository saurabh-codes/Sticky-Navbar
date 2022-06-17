// Sticky Navbar
window.addEventListener('scroll', function(){
    let navbar = this.document.getElementById("navbar");

    if(window.pageYOffset >= 75){
        navbar.classList.add('sticky');
        document.getElementById("navbar").style.marginTop = "0rem"; 
    }
    else{
        navbar.classList.remove('sticky');
        document.getElementById("navbar").style.marginTop = "1rem";
    }
});