// const { default: styledString } = require("../../build/app");

const yourCustomedThemes = { headerStyle1: ["fg_red", "underscore"], highlighted: ["bright", "bg_green"] };
styledString.setThemes(yourCustomedThemes);
const string1 = "This is an exmple: [[headerStyle1:Header:]].\n And this is also another example:\n :[highlighted: I am Bright and Green]:";
const styled1 = styledString.styleString(string1);
console.log(styled1);

styledString.setStyles({ myNewStyle: "31" }); //code for foreground red
const newThemes = { myNewTheme: ["myNewStyle"] };
styledString.setThemes(newThemes);
const string2 = "[myNewTheme:This should be red(31).]\n And this should be no-styled";
const styled2 = styledString.styleString(string2);
console.log(styled2);

const demoThemes = {
    header1: ["bright", "fg_red", "underscore"],
    header2: ["dim", "fg_green"],
    header3: ["fg_crimson"],
    body1: ["fg_yellow"],
    body2: ["fg_b_blue"],
    body3: ["fg_magenta"],
    body4: ["hidden","underscore"],
};

const demoText = `[header1:Welcome] [header2:To] [header3:My Package]
[body1:Use this to 
    make your terminal a bit more]
[body2:...you know,] [body3:ALIVE!]`;
styledString.setThemes(demoThemes);
const demoStyled = styledString.styleString(demoText);
console.log(demoStyled);
