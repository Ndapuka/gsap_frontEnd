const img1 = document.querySelector('.img1');
const index = 1;
gsap.to(`.img${index}`,
    {
        x:100,
        //y:100, 
        duration:2, 
        scale:1.0, 
        //backgroundColor:"gray"
        
    });

 gsap.from(img1,
    {
        y:-400, 
        x:-400,
        duration:2
    }); 

// const tl = gsap.timeline({
//     defaults: {duration: 1.2}, 
//    // yoyo: true, 
//     onComplete: ()=> 
//       console.log('COMPLETE'),
//     onStart: ()=> 
//         console.log('STARTED')
      
//     });

//   tl.
//   from(this.img3 {
//     autoAlpha: 0,
//     x: -100,
//     rotation: 60,
//     ease: 'back.out(4)',
//   });
//   tl.from(this.img2.nativeElement, {
//     autoAlpha: 0,
//     y: -100,
//     rotation: 60,
//     ease: 'back.out(4)',
//   }, "-=0.75");
//   tl.from(this.img1.nativeElement, {
//     autoAlpha: 0,
//     x: 100,
//     rotation: 60,
//     ease: 'back.out(4)',
//   }, "-=0.75"); 

//   tl.add('endAnimation', '-=2');

//   tl.from(this.title.nativeElement, {
//     autoAlpha: 0,
//     x: 100,
//     ease: 'back.out(4)',

//   }, "-=0.75");  
  
//   setTimeout(() => {
//     //tl.restart();
//     tl.seek('endAnimation')
//     tl.play();
//   }, 1000);
  
  // gsap.registerEffect({
  //   name: "imgAnimation",
  //   effect: (targets: any, config: any) => {
  //     return gsap.to(targets, {
  //       duration: config.duration,
  //       y: 200,
  //       scale: 1.4,
  //       rotation: 360,
  //       ease: 'back.out(4)',
  //     });
  //   },
  //   defaults: { duration: 2 }
  // });

  // // Index notation 
  // (gsap.effects as any)["imgAnimation"](this.img1.nativeElement, { duration: 4 });
  // (gsap.effects as any)["imgAnimation"](this.img2.nativeElement, { duration: 4 });
  // (gsap.effects as any)["imgAnimation"](this.img3.nativeElement, { duration: 4 });




    // gsap.to(this.img1.nativeElement, {
    //   keyframes: [
    //     { duration: 0.3, x: 100 },
    //     { duration: 0.3, y: 100 },
    //     { duration: 0.3, x: 200 }
    //   ]
    // });

    // const tween = gsap.to(this.img2.nativeElement, {
    //   y: 100,
    //   duration: 1,
    //   repeat: 1,
    //   paused: true,  
      
    // });
    // //tween.kill();
    // //tween.delay(1);
    // tween.duration(5);

    // setTimeout(() => {
    //  // tween.resume();
    //   tween.seek(2.5);
    //   tween.play();

    
    //   }, 1000) ;
    
    

    //const buttons = this.btns.map(btn => btn.nativeElement);  

    // equivalente ao gsap.to('.img1', {...})
    // gsap.to(buttons, {
    //   duration: 0.4,
    //   x: "random([10, 20, 30, 40])",
    //   stagger:0.2,
    // });
    
    // gsap.from(this.img1.nativeElement, {
    //   autoAlpha: 0,
    //   y: -100,
    //   duration: 2,
    //   scale: 1,
    //   rotation: 90,
    //   ease: 'back.out(4)',
    //   delay: 0.5,
    //   repeat: 0.5,
    //   repeatDelay: 0.2,
    //   yoyo: true,
    //   //ease:'elastic.out(1, 0.3)',

    //});
    // document.querySelector(".btn-validate")?.addEventListener("click", () => {
    //   gsap.to(this.img1.nativeElement, {
    //     autoAlpha: 0,
    //     duration: 2
    //   });
    // });
    // gsap.from([
    //   this.img1.nativeElement, 
    //   this.img2.nativeElement, 
    //   this.img3.nativeElement],   {
    //   autoAlpha: 0,
    //   y: -100,
    //   duration: 2,
    //   ease: 'back.out(4)',
    //   stagger: {each: 0.3, from: 'center'},
    //   //stagger: (index)=>{console.log(index); return index * 0.3; },
    //});
    // gsap.from(this.title.nativeElement, {
    //   opacity: 0,
      
    //   duration: 10,
    // });

