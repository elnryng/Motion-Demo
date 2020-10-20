import {gsap} from "gsap";
// import {fillSpeed} from "./animationSpeed.js"


export function loadingTextAnimation(){
    var tl = gsap.timeline();
    tl.from("#loading",
            {
                alpha:0,
                duration:  2,
                scale: 0,
                rotationX:180 
                
            })
        .to("#loading",
        {
            alpha: 0,
            duration: 0.5
        })
                
    return tl;
}

export function doneTextAnimation(){
    var tl = gsap.timeline();
    tl.from("#done",
            {
                alpha:0,
                duration:  1,
                scale: 0,
                rotationX:180 
                
            });
                
    return tl;
}