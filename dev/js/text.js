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
                
            });
                
    return tl;
}