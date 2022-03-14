// 1
function fozzieBear() {
    console.log(`Wocka Wocka!`);
}
fozzieBear();
console.log(`==========`);

// 2
function beaker(speak) {
    console.log(speak);
    console.log(speak);
    console.log(speak);
    console.log(speak);
};
beaker(`Meep`);
console.log(`==========`);

// 3
function muppetShow(a, b) {
    if (a === `Muppet` && b === `Show`) {
        console.log(`It's time to play the music. It's time to light the lights.`);
    }
};
muppetShow(`Muppet`, `Show`);
muppetShow(`Hello`, `Bye`);
console.log(`==========`);

// 4
function kermit() {
    return `Kermit the Frog`;
}
kermit();
console.log(`==========`);

//5
function muppetShowSeasons(seasons) {
    if (seasons == 5) {
        console.log(true);
        return;
    } else {
        console.log(false);
    }
};
muppetShowSeasons(5);
console.log(`==========`);

// 6
const manOrMuppet = function () {
    console.log(`Am I a man or am I a Muppet?`);
};
manOrMuppet();
console.log(`==========`);

// 7
rainbowConnection = () => `Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`;
const rC = rainbowConnection();
console.log(rC);
console.log(`==========`);

// 8
// No

// 9
// Yes

// 10a
const newMuppetMovies = [`The Muppets`, `Muppets Most Wanted`];
//10b
const upperMovies = newMuppetMovies.map(function (u) {
    return u.toUpperCase();
})
console.log(upperMovies); // [ 'THE MUPPETS', 'MUPPETS MOST WANTED' ]
// BONUS

// 11a 
const oldMuppetMovies = [
    "The Muppet Movie",
    "The Muppets Take Manhattan",
    "The Great Muppet Caper",
    "The Muppet Christmas Carol",
    "Muppet Treasure Island",
    "Muppets From Space"
];

const twoMovies = oldMuppetMovies.filter(a => a === "The Great Muppet Caper" || a === "Muppet Treasure Island");
console.log(twoMovies);

// 12a
const charactersOne = [
    `Statler`,
    `Waldorf`
];

// 12b
const charactersTwo = [
    `The Swedish Chef`,
    `Animal`,
    `Rowlf`
];

// 12c
randomMuppet = characters => {
    const random = Math.floor(Math.random() * characters.length);
    console.log(characters[random]);
};

// 12d
randomMuppet(charactersOne);
randomMuppet(charactersTwo);

// 13
caps = string => {
    let newString = ``;
    for (i = 0; i<string.length; i++){
        if (i%2 === 0){
            newString += string[i].toUpperCase();
        } else {
            newString += string[i]
        }
    }
    return newString;
}
console.log(caps(`hello`));

