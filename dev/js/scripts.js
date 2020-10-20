
import {gsap} from "gsap";

import {glassFillAnimation} from './glassFill.js';
import {loadingTextAnimation, doneTextAnimation} from './text.js';


var mainTL = gsap.timeline();

mainTL.add(glassFillAnimation(), "begin")
        .add(loadingTextAnimation(),"begin")
        .add(doneTextAnimation())
        



