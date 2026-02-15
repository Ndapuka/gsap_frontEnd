const src = [
    "ressources/spartan.svg",
    "ressources/castle.svg",
    "ressources/da-vinci.svg",
    "ressources/airplane.svg",];
  
const dates = [
    "-3300 | 476",
    "476 | 1492",
    "1492 | 1792",
    "1792 | AJD",];
  
ScrollTrigger.create({

    trigger: ".sections",
    pin: '.tooltip',
    start: "top 30%",
    end: "bottom 60%",
});

const sections = document.querySelectorAll(".section");
  
sections.forEach((section, i) => {

    //console.log(i);
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => 
        {
          gsap.set('.tooltip-img', {
            attr: {src: src[i]}
          });
          gsap.set('.tooltip p', {
            innerText: dates[i]}

          );
        },
      onEnterBack: () => 
        {
          gsap.set('.tooltip-img', {
            attr: {src: src[i]}
          });
          gsap.set('.tooltip p', {
            innerText: dates[i]}
          );
        }
      });
});
