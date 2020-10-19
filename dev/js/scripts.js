
import {gsap} from "gsap";

import {glassFillAnimation} from './glassFill.js';
import {loadingTextAnimation} from './text.js';


var mainTL = gsap.timeline();

mainTL.add(glassFillAnimation(), "begin")
        .add(loadingTextAnimation(),"begin")
        



