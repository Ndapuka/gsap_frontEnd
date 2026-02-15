const navLinks = document.querySelectorAll('.container-nav a');
const imgsNav = document.querySelectorAll('nav img');
const title = document.querySelector('.home-content h1');
const verticalLine = document.querySelector('.middle-line');
const grapeLogo = document.querySelector('.home-content img');
const homeButton = document.querySelector('.home-content button');

window.addEventListener('load', revealAnim);
function revealAnim() 
{
    const tl = gsap.timeline();
    tl
    .from(title, {autoAlpha: 0, y: -50, delay: 0.2 })
    .to(verticalLine, {height: 200}, "-=0.2")
    .from(grapeLogo, {autoAlpha: 0, y: 50, ease: 'back.out(4)', rotation: 45}, "-=0.2")
    .from(homeButton, {autoAlpha: 0, x: 50}, "-=0.2")
    .from(navLinks, {autoAlpha: 0, y: -20, stagger: 0.1}, "-=0.4")
    .from(imgsNav, {autoAlpha: 0, y: -50, });
}

