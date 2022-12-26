interface Istyles {
    [key: string]: string | undefined;
}

const defaultStyles: Istyles = {
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
};

const defaultStylesKeys = Object.keys(defaultStyles);

export { Istyles, defaultStyles, defaultStylesKeys };
