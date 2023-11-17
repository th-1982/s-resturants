let date=document.getElementById('date')
const d =new Date()
let year =d.getFullYear()
console.log(d.getFullYear());
date.innerHTML=year


function scrollToTop() {
    Window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}