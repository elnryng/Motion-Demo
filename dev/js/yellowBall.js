import {gsap} from "gsap";
import { ballSpeed } from "./animationSpeed";

export function yellowBallAnimation(){
    var tl = gsap.timeline();
    tl.to(".yellow-ball",
            {duration: ballSpeed, 
                width: 150, 
                repeat: -1, 
                y: 200,
                yoyo: true
                });
    return tl;
}