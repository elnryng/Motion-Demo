import {
    gsap
} from "gsap";


export function glassFillAnimation() {
    var tl = gsap.timeline();
    tl.fromTo("#waveshape", {
        y: 280
    }, {
        duration: 3,
        y: 10
    },"start");

    tl.fromTo("#waveshape", {
        x: -10
    }, {
        duration: 1,
        ease: "none",
        repeat: 2,
        yoyo: true,
        x: 300
    },"start");
    return tl;

}