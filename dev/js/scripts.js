// import * as Demo from './demo.js';
import {gsap} from "gsap";

import {blueBallAnimation} from './blueBall.js';
import {redBallAnimation} from './redBall.js';
import {yellowBallAnimation} from './yellowBall.js';

var mainTL = gsap.timeline();

mainTL.add(blueBallAnimation(), 0)
        .add(redBallAnimation(), 1)
        .add(yellowBallAnimation(), 2);

// mainTL.reverse()

// shut up codekit
// console.log(blueBallAnimation);
// console.log(redBallAnimation);
// console.log(yellowBallAnimation);

