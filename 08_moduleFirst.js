// const simple = require("./09_moduleSecond.mjs"); // This will not work with .mjs extension //

// import {simple} from "./09_moduleSecond.mjs";
// simple();

// import {simple2 as simple} from "./09_moduleSecond.mjs";
// simple();

// import simple3222 from "./09_moduleSecond.mjs";
// simple3222();

import * as a2 from "./09_moduleSecond.mjs";
console.log(a2);
console.log(a2.simple());

