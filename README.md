# **Styled String**
---

## **Table of contents**
- [**Features**](#features)
- [**References**](#references)
- [**Installing**](#installing)
- [**Examples**](#examples)

---
### **DEMO**
![Demo](https://drive.google.com/uc?export=view&id=1zl6Lq3wszbSyaBLrymHlAj0QT_5DLvbo)
```javascript
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
```

### **Features**
- Have default and customizable themes and styles to generate styled string to your liking
- The method is to append ANSI color code into your string which can then be used in the al mighty ==console.log()==.

### **References**
*Find out your desired colors here*
- [ANSI escape code](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors)
- [How to change node.js's console font color?](https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color)

### **Installing**
Using NPM:
```
npm install @jimbui/styled-string
```

Using yarn
```
yarn add @jimbui/styled-string
```

### **Examples**
**Set up your theme in an array of the style names**

```javascript
const yourCustomedThemes = { headerStyle1: ["fg_red", "underscore"], highlighted: ["bright", "bg_green"] };
styledString.setThemes(yourCustomedThemes);
const string1 = "This is an exmple: [[headerStyle1:Header:]].\n And this is also another example:\n :[highlighted: I am Bright and Green]:";
const styled1 = styledString.styleString(string1);
console.log(styled1);
```
![example1](https://drive.google.com/uc?export=view&id=1HyeHqoMyJbY-Rz_Oebt9v961CGIhNTKS)


**Need to customize the values and naming of styles?**
```javascript
styledString.setStyles({ myNewStyle: "31" }); //code for foreground red
const newThemes = { myNewTheme: ["myNewStyle"] };
styledString.setThemes(newThemes);
const string2 = "[myNewTheme:This should be red(31).]\n And this should be no-styled";
const styled2 = styledString.styleString(string2);
console.log(styled2);
```
![example2](https://drive.google.com/uc?export=view&id=1GZi2mPaPnHSBPyE8O-QZtdJTN2qQf76r)

**Default Styles**
```
    //*stylings
    reset: "0",
    bright: "1",
    dim: "2",
    underscore: "4",
    blink: "5",
    reverse: "7",
    hidden: "8",

    //*foreground colors
    fg_black: "30",
    fg_red: "31",
    fg_green: "32",
    fg_yellow: "33",
    fg_blue: "34",
    fg_magenta: "35",
    fg_cyan: "36",
    fg_white: "37",
    fg_crimson: "38",
    fg_gray: "90",

    //*foreground colors - bright
    fg_b_red: "91",
    fg_b_green: "92",
    fg_b_yellow: "93",
    fg_b_blue: "94",
    fg_b_magenta: "95",
    fg_b_cyan: "96",
    fg_b_white: "97",
    fg_b_crimson: "98",

    //*background colors
    bg_black: "40",
    bg_red: "41",
    bg_green: "42",
    bg_yellow: "43",
    bg_blue: "44",
    bg_magenta: "45",
    bg_cyan: "46",
    bg_white: "47",
    bg_crimson: "48",

    //*background colors - bright
    bg_gray: "100",
    bg_b_red: "101",
    bg_b_green: "102",
    bg_b_yellow: "103",
    bg_b_blue: "104",
    bg_b_magenta: "105",
    bg_b_cyan: "106",
    bg_b_white: "107",
    bg_b_crimson: "108",
```