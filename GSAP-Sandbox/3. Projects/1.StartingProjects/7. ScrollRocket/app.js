const topRocket = document.querySelector('.top-rocket');
const midRocket = document.querySelector('.mid-rocket');
const rocket = document.querySelector('.bot-rocket');
const supply = document.querySelector('.supply');
const blocs = document.querySelectorAll('.bloc');

const offsets = [105, 206, 848];

gsap.utils.toArray(['.bloc2', '.bloc3', '.bloc4'])
.forEach((bloc, i) => {
    gsap.to(bloc,{
        y:0, 
        ease:'linear',
        scrollTrigger:{
            trigger: ".container-scroll",
            start: 'top 45%',
            end: `+=${offsets[i]}`,
            scrub: true,
            //markers: true,
        }
    });
});

blocs.forEach((bloc, i) => {

    if(i === 3){
        ScrollTrigger.create({
            trigger: bloc,
            start: 'top+=200 center',
            end: 'top center+=10',
            onEnter: () => {
                bloc.classList.add('active');
            },
            onLeaveBack: () => {
                bloc.classList.remove('active')
            },
            //markers: true,
        });  
        return;  
    }
    ScrollTrigger.create({
            trigger: bloc,
            start: 'top+=200 center',
            end: 'top center+=10',
            onEnter: () => {
                bloc.classList.add('active');
            },
            onLeaveBack: () => {
                bloc.classList.remove('active')
            },
            //markers: true,
        });    
});   
 

//   ScrollTrigger.create({
//     trigger: bloc,
//     start: 'top center',
//     end: 'bottom center',
//     onEnter: () => moveRocket(i),
//     onEnterBack: () => moveRocket(i),
//   });